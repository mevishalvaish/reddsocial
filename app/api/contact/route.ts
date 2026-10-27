import { NextRequest, NextResponse } from "next/server";
import fs from "fs";
import path from "path";

function getResendKey(): string | undefined {
  if (process.env.RESEND_API_KEY) return process.env.RESEND_API_KEY;

  const envFiles = [".env.local", ".env.production.local", ".env", ".env.production"];
  for (const file of envFiles) {
    try {
      const fullPath = path.join(process.cwd(), file);
      if (fs.existsSync(fullPath)) {
        const text = fs.readFileSync(fullPath, "utf8");
        const match = text.match(/RESEND_API_KEY=([^\s\r\n]+)/);
        if (match && match[1]) {
          return match[1].replace(/["']/g, "").trim();
        }
      }
    } catch {
      // Continue searching
    }
  }
  return undefined;
}

function getNotificationEmail(): string {
  if (process.env.NOTIFICATION_EMAIL) return process.env.NOTIFICATION_EMAIL;

  const envFiles = [".env.local", ".env.production.local", ".env"];
  for (const file of envFiles) {
    try {
      const fullPath = path.join(process.cwd(), file);
      if (fs.existsSync(fullPath)) {
        const text = fs.readFileSync(fullPath, "utf8");
        const match = text.match(/NOTIFICATION_EMAIL=([^\s\r\n]+)/);
        if (match && match[1]) {
          return match[1].replace(/["']/g, "").trim();
        }
      }
    } catch {
      // Continue searching
    }
  }
  return "mevishalvaish@gmail.com";
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json().catch(() => null);
    if (!body || !body.email || !body.name) {
      return NextResponse.json(
        { success: false, message: "Please provide your name and email address." },
        { status: 400 }
      );
    }

    const timestamp = new Date().toISOString();
    const leadType = body.type === "earner" ? "Earner Application" : "Brand Campaign Inquiry";

    // 1. Persistent Local File Storage (Zero Lost Leads)
    try {
      const dataDir = path.join(process.cwd(), "data");
      const filePath = path.join(dataDir, "leads.json");

      if (!fs.existsSync(dataDir)) {
        fs.mkdirSync(dataDir, { recursive: true });
      }

      let leads: Array<Record<string, unknown>> = [];
      if (fs.existsSync(filePath)) {
        const content = fs.readFileSync(filePath, "utf8");
        leads = JSON.parse(content || "[]");
      }

      leads.push({ ...body, timestamp });
      fs.writeFileSync(filePath, JSON.stringify(leads, null, 2), "utf8");
    } catch (fsErr) {
      console.error("Local leads save error:", fsErr);
    }

    // 2. Dispatch Live Alert to Owner via Resend
    const resendKey = getResendKey();
    const notificationEmail = getNotificationEmail();

    if (resendKey) {
      try {
        const subject =
          body.type === "earner"
            ? `💰 New Convolift Earner Application: ${body.name} (${body.redditUsername || body.email})`
            : `🚀 New Convolift Brand Lead: ${body.name} (${body.serviceNeeded || "Campaign"})`;

        const detailsText = Object.entries(body)
          .map(([k, v]) => `${k}: ${v}`)
          .join("\n");

        await fetch("https://api.resend.com/emails", {
          method: "POST",
          headers: {
            Authorization: `Bearer ${resendKey}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            from: "onboarding@resend.dev",
            to: notificationEmail,
            subject,
            text: `You have received a new submission on Convolift.com!\n\nType: ${leadType}\nTime: ${timestamp}\n\nDetails:\n${detailsText}\n\n---\nConvolift Lead System`,
          }),
        });
      } catch (emailErr) {
        console.error("Resend notification error:", emailErr);
      }
    }

    return NextResponse.json({
      success: true,
      message: "Your submission has been received successfully!",
    });
  } catch (err: unknown) {
    const msg = err instanceof Error ? err.message : "Server error";
    return NextResponse.json({ success: false, message: msg }, { status: 500 });
  }
}

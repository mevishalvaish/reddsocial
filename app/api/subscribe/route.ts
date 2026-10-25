import { NextRequest, NextResponse } from "next/server";
import fs from "fs";
import path from "path";

interface SubscribeResponse {
  success: boolean;
  status: "subscribed" | "already_subscribed" | "invalid_email" | "error";
  message: string;
  details?: string;
}

const EMAIL_REGEX = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

function getResendKey(): string | undefined {
  if (process.env.RESEND_API_KEY) return process.env.RESEND_API_KEY;

  // Read from local env files if process.env was not loaded into subprocess
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

export async function POST(req: NextRequest): Promise<NextResponse<SubscribeResponse>> {
  try {
    const body = await req.json().catch(() => null);

    if (!body || typeof body.email !== "string") {
      return NextResponse.json(
        {
          success: false,
          status: "invalid_email",
          message: "Please enter a valid work email address.",
        },
        { status: 400 }
      );
    }

    const email = body.email.trim().toLowerCase();

    // Validate email format
    if (!email || email.length > 254 || !EMAIL_REGEX.test(email)) {
      return NextResponse.json(
        {
          success: false,
          status: "invalid_email",
          message: "Please enter a valid, complete email address.",
        },
        { status: 400 }
      );
    }

    const timestamp = new Date().toISOString();
    const resendKey = getResendKey();
    const notificationEmail = getNotificationEmail();
    const fromEmail = process.env.FROM_EMAIL || "onboarding@resend.dev";
    const webhookUrl = process.env.SIGNUP_WEBHOOK_URL;

    // 1. Persistent Storage (Zero Lost Emails)
    try {
      const dataDir = path.join(process.cwd(), "data");
      const filePath = path.join(dataDir, "subscribers.json");

      if (!fs.existsSync(dataDir)) {
        fs.mkdirSync(dataDir, { recursive: true });
      }

      let subscribers: Array<{ email: string; timestamp: string }> = [];
      if (fs.existsSync(filePath)) {
        const fileContent = fs.readFileSync(filePath, "utf8");
        subscribers = JSON.parse(fileContent || "[]");
      }

      const alreadyExists = subscribers.some((s) => s.email === email);
      if (!alreadyExists) {
        subscribers.push({ email, timestamp });
        fs.writeFileSync(filePath, JSON.stringify(subscribers, null, 2), "utf8");
      }
    } catch (fsErr) {
      console.error("Local storage error:", fsErr);
    }

    // 2. Dispatch Live Email Alert via Resend
    if (resendKey) {
      try {
        await fetch("https://api.resend.com/emails", {
          method: "POST",
          headers: {
            Authorization: `Bearer ${resendKey}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            from: fromEmail,
            to: notificationEmail,
            subject: `🚀 New ReddSocial Waitlist Subscriber: ${email}`,
            text: `You have a new waitlist subscriber on ReddSocial.com!\n\nEmail: ${email}\nTime: ${timestamp}\nSource: reddsocial.com Waitlist Form`,
          }),
        });
      } catch (emailErr) {
        console.error("Resend owner notification error:", emailErr);
      }

      // Also attempt subscriber confirmation email (best-effort)
      try {
        await fetch("https://api.resend.com/emails", {
          method: "POST",
          headers: {
            Authorization: `Bearer ${resendKey}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            from: fromEmail,
            to: email,
            subject: "You're on the ReddSocial waitlist!",
            text: `Hi there,\n\nThank you for joining the ReddSocial waitlist! We are preparing to launch our Thread Posting, Comments, and Upvotes services with our private network of 500+ Reddit publishers.\n\nWe will reach out as soon as early access spots open up.\n\nBest,\nThe ReddSocial Team\nhttps://reddsocial.com`,
          }),
        });
      } catch {
        // Non-blocking in test mode before custom domain verification
      }
    }

    // 3. Optional Webhook Dispatch
    if (webhookUrl) {
      try {
        await fetch(webhookUrl, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ email, source: "reddsocial_coming_soon", timestamp }),
        });
      } catch (whErr) {
        console.error("Webhook dispatch error:", whErr);
      }
    }

    // Return instant success confirmation to the browser
    return NextResponse.json({
      success: true,
      status: "subscribed",
      message: "You're on the list! We'll notify you as soon as ReddSocial launches.",
    });
  } catch (err: unknown) {
    const errMsg = err instanceof Error ? err.message : "Server error";
    return NextResponse.json(
      {
        success: false,
        status: "error",
        message: "An unexpected server error occurred. Please try again later.",
        details: errMsg,
      },
      { status: 500 }
    );
  }
}

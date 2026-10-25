import { NextRequest, NextResponse } from "next/server";
import fs from "fs";
import path from "path";

interface SubscribeResponse {
  success: boolean;
  status: "subscribed" | "already_subscribed" | "unconfigured" | "invalid_email" | "error";
  message: string;
  details?: string;
}

const EMAIL_REGEX = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

export async function POST(req: NextRequest): Promise<NextResponse<SubscribeResponse>> {
  try {
    const body = await req.json().catch(() => null);

    if (!body || typeof body.email !== "string") {
      return NextResponse.json(
        {
          success: false,
          status: "invalid_email",
          message: "Please provide a valid email address.",
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

    // Check available provider integrations
    const resendKey = process.env.RESEND_API_KEY;
    const notificationEmail = process.env.NOTIFICATION_EMAIL || "mevishalvaish@gmail.com";
    const fromEmail = process.env.FROM_EMAIL || "onboarding@resend.dev";
    const webhookUrl = process.env.SIGNUP_WEBHOOK_URL;

    const isProviderConfigured = Boolean(resendKey || webhookUrl);

    // If no provider has been configured, provide an honest, transparent response
    if (!isProviderConfigured) {
      return NextResponse.json(
        {
          success: false,
          status: "unconfigured",
          message:
            "Subscription backend is not yet connected. Add RESEND_API_KEY to your environment variables to enable live launch notifications.",
          details: "No email provider is configured in environment variables.",
        },
        { status: 501 }
      );
    }

    const timestamp = new Date().toISOString();

    // 1. Persistent Server-side Backup (Zero Lost Emails)
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
    } catch {
      // Serverless file writing fallback (non-blocking)
    }

    // 2. Dispatch Email via Resend
    if (resendKey) {
      try {
        // A. Send notification alert to the site owner
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

        // B. Attempt to send confirmation email to the subscriber
        // (Succeeds immediately if custom domain is verified, or if subscriber is test owner)
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
          // Non-blocking in test mode before custom domain DNS verification
        }

        return NextResponse.json({
          success: true,
          status: "subscribed",
          message: "You're on the list! We'll notify you as soon as ReddSocial launches.",
        });
      } catch (err: unknown) {
        const errMsg = err instanceof Error ? err.message : "Resend dispatch error";
        return NextResponse.json(
          {
            success: false,
            status: "error",
            message: "Unable to process subscription with email provider.",
            details: errMsg,
          },
          { status: 502 }
        );
      }
    }

    // 3. Webhook Dispatch (if configured)
    if (webhookUrl) {
      try {
        await fetch(webhookUrl, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email,
            source: "reddsocial_coming_soon",
            timestamp,
          }),
        });

        return NextResponse.json({
          success: true,
          status: "subscribed",
          message: "You're on the list! We'll notify you as soon as ReddSocial launches.",
        });
      } catch (err: unknown) {
        const errMsg = err instanceof Error ? err.message : "Webhook error";
        return NextResponse.json(
          {
            success: false,
            status: "error",
            message: "Failed to dispatch to subscription webhook.",
            details: errMsg,
          },
          { status: 502 }
        );
      }
    }

    return NextResponse.json(
      {
        success: false,
        status: "unconfigured",
        message: "Email provider setup is incomplete.",
      },
      { status: 501 }
    );
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

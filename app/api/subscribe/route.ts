import { NextRequest, NextResponse } from "next/server";

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
    const resendAudienceId = process.env.RESEND_AUDIENCE_ID;
    const mailchimpKey = process.env.MAILCHIMP_API_KEY;
    const mailchimpPrefix = process.env.MAILCHIMP_SERVER_PREFIX;
    const mailchimpAudienceId = process.env.MAILCHIMP_AUDIENCE_ID;
    const convertKitKey = process.env.CONVERTKIT_API_KEY;
    const convertKitFormId = process.env.CONVERTKIT_FORM_ID;
    const webhookUrl = process.env.SIGNUP_WEBHOOK_URL;

    const isProviderConfigured = Boolean(
      resendKey ||
      (mailchimpKey && mailchimpPrefix && mailchimpAudienceId) ||
      (convertKitKey && convertKitFormId) ||
      webhookUrl
    );

    // If no provider has been configured, provide an honest, transparent response
    if (!isProviderConfigured) {
      return NextResponse.json(
        {
          success: false,
          status: "unconfigured",
          message:
            "Subscription backend is not yet connected. Add RESEND_API_KEY or SIGNUP_WEBHOOK_URL to your environment variables to enable live launch notifications.",
          details:
            "No email provider (Resend, Mailchimp, ConvertKit, or Webhook) is configured in environment variables.",
        },
        { status: 501 } // 501 Not Implemented
      );
    }

    // --- Provider 1: Resend ---
    if (resendKey) {
      try {
        const resendEndpoint = resendAudienceId
          ? `https://api.resend.com/audiences/${resendAudienceId}/contacts`
          : `https://api.resend.com/emails`;

        const resendPayload = resendAudienceId
          ? { email, unsubscribed: false }
          : {
              from: "ReddSocial <notifications@reddsocial.com>",
              to: email,
              subject: "You're on the ReddSocial launch list!",
              text: "Thank you for your interest in ReddSocial. We will be in touch when we launch.",
            };

        const res = await fetch(resendEndpoint, {
          method: "POST",
          headers: {
            Authorization: `Bearer ${resendKey}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify(resendPayload),
        });

        if (!res.ok) {
          const errData = await res.json().catch(() => ({}));
          return NextResponse.json(
            {
              success: false,
              status: "error",
              message: "Unable to process subscription with email provider.",
              details: errData.message || res.statusText,
            },
            { status: 502 }
          );
        }

        return NextResponse.json({
          success: true,
          status: "subscribed",
          message: "Thank you! You're on the list to receive ReddSocial launch updates.",
        });
      } catch (err: unknown) {
        const errMsg = err instanceof Error ? err.message : "Unknown error";
        return NextResponse.json(
          {
            success: false,
            status: "error",
            message: "Network error connecting to email service.",
            details: errMsg,
          },
          { status: 502 }
        );
      }
    }

    // --- Provider 2: Webhook (Zapier, Make, Slack, Discord, CRM) ---
    if (webhookUrl) {
      try {
        const res = await fetch(webhookUrl, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email,
            source: "reddsocial_coming_soon",
            timestamp: new Date().toISOString(),
          }),
        });

        if (!res.ok) {
          return NextResponse.json(
            {
              success: false,
              status: "error",
              message: "Webhook rejected subscription event.",
            },
            { status: 502 }
          );
        }

        return NextResponse.json({
          success: true,
          status: "subscribed",
          message: "Thank you! You're on the list to receive ReddSocial launch updates.",
        });
      } catch (err: unknown) {
        const errMsg = err instanceof Error ? err.message : "Unknown error";
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

    // Fallback if none matched
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

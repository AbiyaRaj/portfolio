import { NextResponse } from "next/server";
import { CONTACT_EMAIL } from "@/lib/constants";
import { sendViaGmailSmtp } from "@/lib/mailer";

export const runtime = "nodejs";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, subject, message } = body;

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Name, email, and message are required fields." },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Please provide a valid email address." },
        { status: 400 }
      );
    }

    const targetRecipient = process.env.CONTACT_EMAIL || CONTACT_EMAIL;
    const emailSubject = subject
      ? `[Portfolio Contact] ${subject}`
      : `[Portfolio Contact] New message from ${name}`;

    // Option 1: Direct Google SMTP if GMAIL_APP_PASSWORD is set in .env.local
    if (process.env.GMAIL_APP_PASSWORD || process.env.SMTP_PASS) {
      try {
        await sendViaGmailSmtp({
          to: targetRecipient,
          fromName: name,
          fromEmail: email,
          subject: emailSubject,
          message,
        });

        return NextResponse.json({
          success: true,
          message: "Message sent successfully!",
        });
      } catch (smtpErr) {
        console.error("Direct Gmail SMTP failed, falling back to FormSubmit:", smtpErr);
      }
    }

    // Option 2: Dispatch via FormSubmit service (delivers directly to targetRecipient inbox)
    const origin =
      request.headers.get("origin") ||
      request.headers.get("referer") ||
      "http://localhost:3000";

    try {
      await fetch(
        `https://formsubmit.co/ajax/${encodeURIComponent(targetRecipient)}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
            Origin: origin,
            Referer: origin,
          },
          body: JSON.stringify({
            name,
            email,
            _subject: emailSubject,
            message,
            _replyto: email,
            _template: "table",
            _captcha: "false",
          }),
        }
      );
    } catch (err) {
      console.error("FormSubmit delivery warning:", err);
    }

    return NextResponse.json({
      success: true,
      message: "Message sent successfully!",
    });
  } catch (error) {
    console.error("Error in contact route:", error);
    return NextResponse.json(
      {
        error: "Unable to send message at this moment.",
      },
      { status: 500 }
    );
  }
}

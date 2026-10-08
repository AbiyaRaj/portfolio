import { NextResponse } from "next/server";
import { CONTACT_EMAIL } from "@/lib/constants";

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
    const origin =
      request.headers.get("origin") ||
      request.headers.get("referer") ||
      "http://localhost:3000";

    // Send via FormSubmit service (delivers directly to targetRecipient inbox)
    const response = await fetch(
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
          _subject: subject
            ? `[Portfolio Contact] ${subject}`
            : `[Portfolio Contact] New message from ${name}`,
          message,
          _replyto: email,
          _template: "table",
          _captcha: "false",
        }),
      }
    );

    const data = await response.json().catch(() => ({}));
    const messageText = typeof data.message === "string" ? data.message : "";
    const isActivation =
      messageText.toLowerCase().includes("activation") ||
      messageText.toLowerCase().includes("actived");

    if (response.ok || isActivation) {
      return NextResponse.json({
        success: true,
        isActivation,
        message: isActivation
          ? `First-time setup: FormSubmit sent an activation email to ${targetRecipient}. Please check your inbox and click the "Activate Form" button to complete setup.`
          : `Message successfully forwarded to ${targetRecipient}!`,
      });
    }

    return NextResponse.json(
      {
        error:
          data.message ||
          "Delivery service response was not successful. Please send directly via email.",
      },
      { status: 502 }
    );
  } catch (error) {
    console.error("Error in contact route:", error);
    return NextResponse.json(
      {
        error:
          "Unable to send message via the backend service at this moment.",
      },
      { status: 500 }
    );
  }
}

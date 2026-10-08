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

import tls from "node:tls";

interface SendMailOptions {
  to: string;
  fromName: string;
  fromEmail: string;
  subject: string;
  message: string;
}

/**
 * Sends an email directly via Google SMTP (smtp.gmail.com:465) using Node.js built-in TLS.
 * Requires GMAIL_APP_PASSWORD or SMTP_PASS to be set in .env.local.
 */
export function sendViaGmailSmtp(options: SendMailOptions): Promise<void> {
  const user = process.env.SMTP_USER || process.env.CONTACT_EMAIL || "abiyaraj7@gmail.com";
  const pass = process.env.GMAIL_APP_PASSWORD || process.env.SMTP_PASS;

  if (!pass) {
    throw new Error("No GMAIL_APP_PASSWORD or SMTP_PASS configured.");
  }

  const cleanPass = pass.replace(/\s+/g, "");

  return new Promise((resolve, reject) => {
    let resolved = false;

    const socket = tls.connect(
      {
        host: "smtp.gmail.com",
        port: 465,
        rejectUnauthorized: true,
      },
      () => {
        let step = 0;

        const emailContent = [
          `From: "${options.fromName}" <${user}>`,
          `Reply-To: ${options.fromEmail}`,
          `To: <${options.to}>`,
          `Subject: ${options.subject}`,
          "MIME-Version: 1.0",
          "Content-Type: text/html; charset=UTF-8",
          "",
          `<div style="font-family: Arial, sans-serif; max-width: 600px; line-height: 1.6; color: #333;">`,
          `  <h2 style="color: #4f46e5; border-bottom: 2px solid #e5e7eb; padding-bottom: 8px;">New Message from Portfolio</h2>`,
          `  <p><strong>From:</strong> ${options.fromName} (&lt;<a href="mailto:${options.fromEmail}">${options.fromEmail}</a>&gt;)</p>`,
          `  <p><strong>Subject:</strong> ${options.subject}</p>`,
          `  <hr style="border: 0; border-top: 1px solid #e5e7eb; margin: 16px 0;" />`,
          `  <h4 style="margin-bottom: 6px; color: #374151;">Message:</h4>`,
          `  <div style="background-color: #f9fafb; border: 1px solid #e5e7eb; border-radius: 8px; padding: 16px; white-space: pre-wrap;">${options.message}</div>`,
          `  <p style="margin-top: 24px; font-size: 12px; color: #9ca3af;">Delivered directly via your Next.js Portfolio</p>`,
          `</div>`,
          "",
          ".",
        ].join("\r\n");

        socket.on("data", (data) => {
          const response = data.toString();
          const code = parseInt(response.slice(0, 3), 10);

          if (code >= 400 && code < 600) {
            socket.end();
            if (!resolved) {
              resolved = true;
              return reject(new Error(`SMTP Error: ${response.trim()}`));
            }
          }

          if (step === 0 && code === 220) {
            socket.write("EHLO portfolio.local\r\n");
            step = 1;
          } else if (step === 1 && code === 250) {
            socket.write("AUTH LOGIN\r\n");
            step = 2;
          } else if (step === 2 && code === 334) {
            socket.write(Buffer.from(user).toString("base64") + "\r\n");
            step = 3;
          } else if (step === 3 && code === 334) {
            socket.write(Buffer.from(cleanPass).toString("base64") + "\r\n");
            step = 4;
          } else if (step === 4 && code === 235) {
            socket.write(`MAIL FROM:<${user}>\r\n`);
            step = 5;
          } else if (step === 5 && code === 250) {
            socket.write(`RCPT TO:<${options.to}>\r\n`);
            step = 6;
          } else if (step === 6 && code === 250) {
            socket.write("DATA\r\n");
            step = 7;
          } else if (step === 7 && code === 354) {
            socket.write(emailContent + "\r\n");
            step = 8;
          } else if (step === 8 && code === 250) {
            socket.write("QUIT\r\n");
            step = 9;
            if (!resolved) {
              resolved = true;
              resolve();
            }
          }
        });

        socket.on("error", (err) => {
          if (!resolved) {
            resolved = true;
            reject(err);
          }
        });

        socket.setTimeout(12000, () => {
          socket.end();
          if (!resolved) {
            resolved = true;
            reject(new Error("SMTP connection timed out"));
          }
        });
      }
    );
  });
}

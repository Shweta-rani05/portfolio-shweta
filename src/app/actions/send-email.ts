"use server";

import { Resend } from "resend";

// Initialize Resend with placeholder or actual API key
const resendApiKey = process.env.RESEND_API_KEY || "re_placeholder_key";
const resend = new Resend(resendApiKey);

export async function sendEmail(formData: FormData) {
  const name = formData.get("name") as string;
  const email = formData.get("email") as string;
  const message = formData.get("message") as string;

  if (!name || !email || !message) {
    return { success: false, error: "Missing required fields" };
  }

  // If using placeholder key, simulate success
  if (resendApiKey === "re_placeholder_key") {
    console.log("Simulating email send:", { name, email, message });
    await new Promise(resolve => setTimeout(resolve, 1000));
    return { success: true, message: "Email simulated successfully (add RESEND_API_KEY to send real emails)" };
  }

  try {
    const data = await resend.emails.send({
      from: "Portfolio Contact <onboarding@resend.dev>",
      to: process.env.CONTACT_EMAIL || "contact@example.com",
      subject: `New message from ${name} via Portfolio`,
      text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
      replyTo: email,
    });

    return { success: true, data };
  } catch (error) {
    console.error("Failed to send email:", error);
    return { success: false, error: "Failed to send email" };
  }
}

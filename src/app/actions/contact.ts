"use server";

import nodemailer from "nodemailer";
import { INQUIRY_TYPES, type ContactState } from "@/lib/contact-schema";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
const PHONE_RE = /^[+\d][\d\s\-().]{6,19}$/;

const escapeHtml = (s: string) =>
  s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");

const field = (fd: FormData, key: string) => String(fd.get(key) ?? "").trim();

export async function sendContactMessage(
  _prev: ContactState,
  formData: FormData,
): Promise<ContactState> {
  if (field(formData, "website")) {
    return { status: "success", message: "Thanks! We'll be in touch soon." };
  }

  const values = {
    name: field(formData, "name"),
    email: field(formData, "email"),
    company: field(formData, "company"),
    phone: field(formData, "phone"),
    inquiryType: field(formData, "inquiryType"),
    message: field(formData, "message"),
  };

  const errors: NonNullable<ContactState["errors"]> = {};
  if (values.name.length < 2) errors.name = "Enter your name.";
  if (!EMAIL_RE.test(values.email))
    errors.email = "Enter a valid email address.";
  if (values.phone && !PHONE_RE.test(values.phone))
    errors.phone = "Enter a valid phone number.";
  if (!(INQUIRY_TYPES as readonly string[]).includes(values.inquiryType))
    errors.inquiryType = "Select an inquiry type.";
  if (values.message.length < 10)
    errors.message = "Message must be at least 10 characters.";
  if (values.message.length > 3000)
    errors.message = "Message must be under 3000 characters.";

  if (Object.keys(errors).length) {
    return {
      status: "error",
      message: "Please fix the highlighted fields.",
      errors,
      values,
    };
  }

  const {
    SMTP_HOST,
    SMTP_PORT,
    SMTP_USER,
    SMTP_PASS,
    CONTACT_TO,
    CONTACT_FROM,
  } = process.env;

  if (!SMTP_HOST || !SMTP_USER || !SMTP_PASS || !CONTACT_TO) {
    console.error("Contact form: missing SMTP environment variables");
    return {
      status: "error",
      message:
        "Email service is not configured. Please call or email us directly.",
      values,
    };
  }

  const port = Number(SMTP_PORT) || 465;

  try {
    const transporter = nodemailer.createTransport({
      host: SMTP_HOST,
      port,
      secure: port === 465,
      auth: { user: SMTP_USER, pass: SMTP_PASS },
    });

    const rows: [string, string][] = [
      ["Name", values.name],
      ["Email", values.email],
      ["Company", values.company || "—"],
      ["Phone", values.phone || "—"],
      ["Inquiry type", values.inquiryType],
    ];

    await transporter.sendMail({
      from: `"R3R NextGen Website" <${CONTACT_FROM || SMTP_USER}>`,
      to: CONTACT_TO,
      replyTo: `"${values.name.replace(/"/g, "")}" <${values.email}>`,
      subject: `[${values.inquiryType}] New enquiry from ${values.name}`,
      text:
        rows.map(([k, v]) => `${k}: ${v}`).join("\n") +
        `\n\nMessage:\n${values.message}`,
      html: `
        <div style="font-family:Arial,sans-serif;max-width:560px;color:#1f2a22">
          <h2 style="color:#17361f;margin:0 0 16px">New website enquiry</h2>
          <table style="border-collapse:collapse;width:100%">
            ${rows
              .map(
                ([k, v]) =>
                  `<tr><td style="padding:6px 12px 6px 0;color:#5f6b62;white-space:nowrap">${k}</td><td style="padding:6px 0;font-weight:600">${escapeHtml(v)}</td></tr>`,
              )
              .join("")}
          </table>
          <h3 style="color:#17361f;margin:20px 0 8px">Message</h3>
          <p style="white-space:pre-wrap;line-height:1.6;background:#fdf8f0;padding:14px;border-radius:8px">${escapeHtml(values.message)}</p>
        </div>`,
    });

    return {
      status: "success",
      message:
        "Thank you! Your message has been sent. Our team will get back to you soon.",
    };
  } catch (err) {
    console.error("Contact form: sendMail failed", err);
    return {
      status: "error",
      message:
        "We couldn't send your message. Please try again or email us directly.",
      values,
    };
  }
}

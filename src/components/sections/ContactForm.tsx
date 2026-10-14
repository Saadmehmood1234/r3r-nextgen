"use client";
import { useState } from "react";

export function ContactForm() {
  const [sent, setSent] = useState(false);
  const field = "w-full rounded-lg border border-sand bg-white px-4 py-3 text-sm focus:border-ember focus:outline-none";
  if (sent) return <p role="status" className="card p-6 text-sm font-semibold text-leaf">Thank you. We have received your enquiry and will reply soon.</p>;
  return (
    <form onSubmit={(e) => { e.preventDefault(); /* TODO: POST to your API / email service */ setSent(true); }} className="card grid gap-4 p-6">
      <label className="grid gap-1 text-sm font-semibold">Name<input required name="name" className={field} /></label>
      <label className="grid gap-1 text-sm font-semibold">Email<input required type="email" name="email" className={field} /></label>
      <label className="grid gap-1 text-sm font-semibold">Phone<input name="phone" type="tel" className={field} /></label>
      <label className="grid gap-1 text-sm font-semibold">Enquiry type
        <select name="type" className={field}><option>Wholesale / Bulk</option><option>OEM / White Label</option><option>Export</option><option>General</option></select>
      </label>
      <label className="grid gap-1 text-sm font-semibold">Message<textarea required name="message" rows={5} className={field} /></label>
      <button className="btn-primary justify-self-start" type="submit">Send Enquiry</button>
    </form>
  );
}

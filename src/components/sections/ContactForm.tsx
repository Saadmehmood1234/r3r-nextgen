"use client";

import { useActionState, useEffect, useRef } from "react";
import { INQUIRY_TYPES, initialContactState } from "@/lib/contact-schema";
import Icon from "@/components/ui/Icon";
import { sendContactMessage } from "@/app/actions/contact";

const input =
  "w-full rounded-md border border-leaf-dark/15 bg-white/70 px-4 py-3 text-sm text-ink placeholder:text-muted/80 transition-colors focus:border-ember focus:bg-white focus:outline-none focus:ring-2 focus:ring-ember/20 aria-[invalid=true]:border-red-500";

function Err({ id, msg }: { id: string; msg?: string }) {
  return msg ? (
    <p id={id} role="alert" className="mt-1 text-xs text-red-600">
      {msg}
    </p>
  ) : null;
}

export function ContactForm() {
  const [state, action, pending] = useActionState(
    sendContactMessage,
    initialContactState,
  );
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    if (state.status === "success") formRef.current?.reset();
  }, [state]);

  const v = state.values ?? {};
  const e = state.errors ?? {};

  return (
    <form ref={formRef} action={action} noValidate className="mt-4 space-y-3">
      {/* Honeypot */}
      <div className="absolute left-[-9999px]" aria-hidden="true">
        <label>
          Website
          <input type="text" name="website" tabIndex={-1} autoComplete="off" />
        </label>
      </div>

      <div className="grid gap-3 sm:grid-cols-2">
        <div>
          <input
            name="name"
            placeholder="Your Name *"
            aria-label="Your name"
            autoComplete="name"
            defaultValue={v.name}
            aria-invalid={!!e.name}
            aria-describedby={e.name ? "err-name" : undefined}
            className={input}
          />
          <Err id="err-name" msg={e.name} />
        </div>
        <div>
          <input
            name="email"
            type="email"
            placeholder="Your Email *"
            aria-label="Your email"
            autoComplete="email"
            defaultValue={v.email}
            aria-invalid={!!e.email}
            aria-describedby={e.email ? "err-email" : undefined}
            className={input}
          />
          <Err id="err-email" msg={e.email} />
        </div>
        <input
          name="company"
          placeholder="Company Name"
          aria-label="Company name"
          autoComplete="organization"
          defaultValue={v.company}
          className={input}
        />
        <div>
          <input
            name="phone"
            type="tel"
            placeholder="Phone Number"
            aria-label="Phone number"
            autoComplete="tel"
            defaultValue={v.phone}
            aria-invalid={!!e.phone}
            aria-describedby={e.phone ? "err-phone" : undefined}
            className={input}
          />
          <Err id="err-phone" msg={e.phone} />
        </div>
      </div>

      <div>
        <div className="relative">
          <select
            name="inquiryType"
            aria-label="Inquiry type"
            defaultValue={v.inquiryType ?? ""}
            aria-invalid={!!e.inquiryType}
            aria-describedby={e.inquiryType ? "err-type" : undefined}
            className={`${input} appearance-none pr-10 invalid:text-muted/80`}
            required
          >
            <option value="" disabled>
              Inquiry Type *
            </option>
            {INQUIRY_TYPES.map((t) => (
              <option key={t} value={t}>
                {t}
              </option>
            ))}
          </select>
          <svg
            aria-hidden
            viewBox="0 0 20 20"
            className="pointer-events-none absolute right-4 top-1/2 h-4 w-4 -translate-y-1/2 text-leaf-dark"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.2"
          >
            <path
              d="m5 7.5 5 5 5-5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
        <Err id="err-type" msg={e.inquiryType} />
      </div>

      <div>
        <textarea
          name="message"
          rows={4}
          placeholder="Your Message *"
          aria-label="Your message"
          defaultValue={v.message}
          aria-invalid={!!e.message}
          aria-describedby={e.message ? "err-message" : undefined}
          className={`${input} resize-none`}
        />
        <Err id="err-message" msg={e.message} />
      </div>

      <div className="flex flex-wrap items-center gap-4 pt-1">
        <button type="submit" disabled={pending} className="btn-primary px-8">
          {pending ? "Sending…" : "Send Message"}
          {!pending && <Icon name="arrow" size={16} />}
        </button>

        <p
          role="status"
          aria-live="polite"
          className={`text-sm ${
            state.status === "success" ? "text-leaf" : "text-red-600"
          }`}
        >
          {state.status !== "idle" ? state.message : null}
        </p>
      </div>
    </form>
  );
}

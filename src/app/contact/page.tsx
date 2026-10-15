import type { Metadata } from "next";
import { BackgroundImage } from "@/components/ui/BackgroundImage";
import Icon from "@/components/ui/Icon";
import { Reveal, RevealGroup, RevealItem } from "@/components/ui/Reveal";
import { ContactForm } from "@/components/sections/ContactForm";
import { ContactRow, InfoCard } from "@/components/ui/Infocard";

export const metadata: Metadata = {
  title: "Contact Us | R3R NextGen",
  description:
    "Get in touch with R3R NextGen for OEM manufacturing, white label opportunities, bulk orders and partnerships.",
};

const MAPS_LINK =
  "https://www.google.com/maps/search/?api=1&query=R3R+NextGen+(OPC)+Private+Limited+Sondhi+Jhajjar+Haryana";
const MAPS_EMBED =
  "https://www.google.com/maps?q=R3R+NextGen+(OPC)+Private+Limited+Sondhi+Jhajjar+Haryana&output=embed";

const topics = [
  { icon: "message", label: "General Inquiries" },
  { icon: "handshake", label: "OEM & Bulk Orders" },
  { icon: "settings", label: "Manufacturing Partnerships" },
  { icon: "users", label: "Business Collaboration" },
];

const highlights = [
  {
    icon: "leaf",
    title: "OEM & White Label",
    text: "Manufacturing Partnerships",
  },
  { icon: "settings", title: "Bulk Orders", text: "Scalable Production" },
  {
    icon: "shield",
    title: "Quality & Compliance",
    text: "Safe and Certified Products",
  },
  {
    icon: "globe",
    title: "Global Supply",
    text: "Domestic & International Markets",
  },
];

export default function ContactPage() {
  return (
    <BackgroundImage
      as="section"
      src="contact/contact-hero.png"
      alt="R3R NextGen factory building"
      priority
      overlay="light-left"
      mobileOverlay="light"
      imagePosition="right top"
      imageMode="fixed-right"
      className="min-h-screen"
    >
      <div className="container-page w-full section-y">
        <div className="grid gap-6 lg:grid-cols-[1.05fr_0.85fr_1.2fr] lg:gap-7">
          <div className="flex flex-col">
            <Reveal y={16}>
              <p className="flex items-center gap-4 text-sm font-medium uppercase tracking-[0.3em] text-leaf-dark">
                Get in touch
                <span className="h-px w-16 bg-leaf-dark/40" aria-hidden />
              </p>
            </Reveal>
            <Reveal y={20} delay={0.05}>
              <h1 className="mt-2 text-5xl font-extrabold text-leaf-dark md:text-6xl">
                Contact <span className="text-ember">Us</span>
              </h1>
            </Reveal>
            <Reveal y={16} delay={0.1}>
              <p className="mt-4 max-w-md text-sm leading-relaxed text-ink/80 md:text-base">
                We&apos;d love to hear from you. Whether you&apos;re exploring
                OEM manufacturing, white label opportunities, bulk orders or
                have any questions, our team is here to assist you.
              </p>
            </Reveal>

            <RevealGroup className="mt-6 grid grid-cols-2 gap-y-4 sm:grid-cols-4">
              {topics.map((t) => (
                <RevealItem
                  key={t.label}
                  className="flex flex-col items-center gap-2 text-center sm:border-r sm:border-leaf-dark/10 sm:last:border-r-0"
                >
                  <span className="grid h-14 w-14 place-items-center rounded-full bg-leaf-soft text-leaf-dark">
                    <Icon name={t.icon} className="h-6 w-6" />
                  </span>
                  <span className="text-xs font-bold leading-tight text-leaf-dark">
                    {t.label}
                  </span>
                </RevealItem>
              ))}
            </RevealGroup>

            <Reveal y={24} delay={0.1} className="mt-6">
              <div className="card p-6">
                <h2 className="text-2xl font-extrabold text-leaf-dark">
                  Send Us a Message
                </h2>
                <p className="mt-1 text-sm text-muted">
                  Fill out the form and our team will get back to you soon.
                </p>
                <ContactForm />
              </div>
            </Reveal>
          </div>

          <RevealGroup className="flex flex-col gap-4 lg:mt-70">
            <RevealItem>
              <InfoCard icon="map" title="Registered Office">
                R-2105, Devinder Vihar, Sector-56, Gurugram, Haryana – 122011,
                India
              </InfoCard>
            </RevealItem>
            <RevealItem>
              <InfoCard icon="factory" title="Factory">
                Plot No. 9, Street No. F, Sector – 7B, Model Economic Township,
                Village – Sondhi, District – Jhajjar, Haryana – 124105, India
              </InfoCard>
            </RevealItem>

            <RevealItem>
              <div
                className="relative isolate overflow-hidden rounded-2xl border border-white/70 bg-linear-to-br from-white/35 via-white/20 to-leaf-soft/30 p-5 shadow-[0_8px_32px_rgba(23,54,31,0.12)] backdrop-blur-2xl ring-1 ring-white/20 before:pointer-events-none before:absolute before:inset-0 before:-z-10 before:rounded-2xl before:bg-linear-to-br before:from-white/30 before:via-transparent before:to-white/5">
                <ContactRow icon="phone" title="Call Us">
                  <a
                    href="tel:+919712980864"
                    className="transition-colors hover:text-ember"
                  >
                    +91 97129 80864
                  </a>
                </ContactRow>

                <ContactRow icon="mail" title="Email Us">
                  <a
                    href="mailto:info@r3rnextgen.com"
                    className="break-all transition-colors hover:text-ember"
                  >
                    info@r3rnextgen.com
                  </a>
                </ContactRow>

                <ContactRow icon="clock" title="Business Hours">
                  <p>Mon - Sat: 9:00 AM - 6:00 PM</p>
                  <p>Sunday: Closed</p>
                </ContactRow>
              </div>
            </RevealItem>
          </RevealGroup>

          <div className="flex flex-col justify-end lg:pt-72">
            <Reveal y={24} delay={0.15}>
              <div className="card p-4">
                <div className="flex flex-wrap sm:flex-row flex-col sm:items-center gap-3 ">
                  <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-leaf-dark text-white">
                    <Icon name="map" className="h-5 w-5" />
                  </span>
                  <div className="min-w-0 flex-1">
                    <h3 className="text-sm font-extrabold text-leaf-dark">
                      Factory Location
                    </h3>
                    <p className="text-xs leading-snug text-muted">
                      Plot No. 9, Street No. F, Sector – 7B, Model Economic
                      Township, Village – Sondhi, District – Jhajjar, Haryana –
                      124105, India
                    </p>
                  </div>
                  <a
                    href={MAPS_LINK}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-dark whitespace-nowrap px-4 py-2.5 text-xs"
                  >
                    View on Google Maps
                    <Icon name="external" size={14} />
                  </a>
                </div>
                <div className="mt-3 overflow-hidden rounded-lg">
                  <iframe
                    title="R3R NextGen factory location on Google Maps"
                    src={MAPS_EMBED}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="h-48 w-full border-0 md:h-52"
                    allowFullScreen
                  />
                </div>
              </div>
            </Reveal>
          </div>
        </div>

        <Reveal y={24} className="mt-8">
          <ul className="grid gap-5 rounded-2xl border border-white/60 bg-white/75 p-3.5 shadow-soft backdrop-blur-md sm:grid-cols-2 lg:grid-cols-4 lg:gap-0">
            {highlights.map((h) => (
              <li
                key={h.title}
                className="flex items-center gap-4 lg:border-r lg:border-leaf-dark/10 lg:px-6 lg:first:pl-2 lg:last:border-r-0"
              >
                <Icon
                  name={h.icon}
                  className="h-10 w-10 shrink-0 text-leaf-dark"
                  strokeWidth={1.5}
                />
                <div>
                  <p className="font-extrabold text-leaf-dark">{h.title}</p>
                  <p className="text-sm text-muted">{h.text}</p>
                </div>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </BackgroundImage>
  );
}

import Link from "next/link";
import { nav, legal, site, products } from "@/lib/site";
import { Icon } from "../ui/Icon";
import { Logo } from "../ui/Logo";
import { BackgroundImage } from "../ui/BackgroundImage";

export function Footer() {
  return (
    <BackgroundImage
      as="footer"
      src="footer-bg.png"
      alt=""
      overlay="dark"
      className="bg-leaf-dark text-white/80"
    >
      {/* <div className="absolute inset-0 -z-10 bg-leaf-dark/80" /> */}

      <div className="container-page grid gap-10 py-14 md:grid-cols-4">
        <div>
          <Logo
            image="/images/logo/footer-logo.png"
            alt="Eddems"
            className="w-32"
          />
          <p className="text-xs">(OPC) Pvt. Ltd.</p>
          <p className="mt-3 text-sm">
            Crafting sustainable play for the next generation.
          </p>
        </div>

        <div>
          <h3 className="mb-3 text-sm font-bold text-white">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            {nav.map((n) => (
              <li key={n.href}>
                <Link className="transition-colors hover:text-white" href={n.href}>
                  {n.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="mb-3 text-sm font-bold text-white">Our Products</h3>
          <ul className="space-y-2 text-sm">
            {products.map((p) => (
              <li key={p.title}>
                <Link className="transition-colors hover:text-white" href="/products">
                  {p.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="mb-3 text-sm font-bold text-white">Contact Us</h3>
          <ul className="space-y-3 text-sm">
            <li className="flex gap-2">
              <Icon name="map" size={16} className="mt-0.5 shrink-0" />
              <span>{site.address}</span>
            </li>
            <li className="flex gap-2">
              <Icon name="mail" size={16} className="mt-0.5 shrink-0" />
              <a
                className="break-all transition-colors hover:text-white"
                href={`mailto:${site.email}`}
              >
                {site.email}
              </a>
            </li>
            <li className="flex gap-2">
              <Icon name="phone" size={16} className="mt-0.5 shrink-0" />
              <a
                className="transition-colors hover:text-white"
                href={`tel:${site.phone.replace(/\s/g, "")}`}
              >
                {site.phone}
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-page flex flex-col items-center justify-between gap-3 py-5 text-center text-xs md:flex-row md:text-left">
          <p>
            © {new Date().getFullYear()} R3R NEXTGEN (OPC) PRIVATE LIMITED.
            All rights reserved.
          </p>

          <ul className="flex flex-wrap justify-center gap-x-5 gap-y-2">
            {legal.map((l) => (
              <li key={l.href}>
                <Link className="transition-colors hover:text-white" href={l.href}>
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </BackgroundImage>
  );
}
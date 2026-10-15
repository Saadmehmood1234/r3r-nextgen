import Link from "next/link";
import { nav, legal, site, products } from "@/lib/site";
import Icon from "../ui/Icon";
import { Logo } from "../ui/Logo";
import { BackgroundImage } from "../ui/BackgroundImage";

export function Footer() {
  return (
    <BackgroundImage
      as="footer"
      src="home/footer-bg.png"
      alt=""
      overlay="dark"
      imagePosition="right center"
      className="bg-leaf-dark text-white/80"
    >
      {/* <div className="absolute inset-0 -z-10 bg-leaf-dark/80" /> */}

      <div className="container-page grid gap-8 lg:grid-cols-4 sm:grid-cols-3 md:gap-0">
        {/* Logo */}
        <div className="flex flex-col gap-2 md:pr-6">
          <Logo
            image="/images/logo/dark-logo.png"
            alt="Eddems"
            className="w-32"
          />
          <p className="text-md">(OPC) Pvt. Ltd.</p>
          <p className="text-sm lg:block hidden">
            Crafting sustainable play for the next generation.
          </p>

          <div className="lg:hidden w-full block">
            <ul className="space-y-3 lg:text-sm text-xs">
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

        {/* Quick Links */}
        <div className="md:border-l md:border-white/10 md:px-6">
          <h3 className="mb-3 lg:text-sm text-xs font-bold text-white">
            Quick Links
          </h3>
          <ul className="space-y-2 lg:text-sm text-xs">
            {nav.map((n) => (
              <li key={n.href}>
                <Link
                  className="transition-colors hover:text-white"
                  href={n.href}
                >
                  {n.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Products */}
        <div className="md:border-l md:border-white/10 md:px-6">
          <h3 className="mb-3 text-sm font-bold text-white">Our Products</h3>
          <ul className="space-y-2 lg:text-sm text-xs">
            {products.map((p) => (
              <li key={p.title}>
                <Link
                  className="transition-colors hover:text-white"
                  href="/products"
                >
                  {p.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div className="md:border-l lg:block hidden md:border-white/10 md:pl-6">
          <h3 className="mb-3 text-sm font-bold text-white">Contact Us</h3>
          <ul className="space-y-3 lg:text-sm text-xs">
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
      <div className="container-page lg:hidden block mt-4  w-full">
        <p className="text-sm">
          Crafting sustainable play for the next generation.
        </p>
      </div>
      <div className="border-t w-full border-white/10 lg:mt-8 mt-4">
        <div className="container-page flex flex-col items-center w-full justify-between gap-3 py-5 text-center text-xs md:flex-row md:text-left">
          <p>
            © {new Date().getFullYear()} R3R NEXTGEN (OPC) PRIVATE LIMITED. All
            rights reserved.
          </p>
          <ul className="flex flex-wrap justify-center gap-x-5 gap-y-2">
            {legal.map((l) => (
              <li key={l.href}>
                <Link
                  className="transition-colors hover:text-white"
                  href={l.href}
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <p className="container-page w-full md:text-start text-center text-xs">Design and Developed by Teknovia Technologies Pvt. Ltd.</p>
      </div>
    </BackgroundImage>
  );
}

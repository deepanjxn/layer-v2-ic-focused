import React from "react";
import Link from "next/link";
import { FaXTwitter, FaLinkedin, FaYoutube } from "react-icons/fa6";
import { MdOutlineEmail } from "react-icons/md";

interface Footer7Props {
  logo?: {
    url: string;
    title: string;
  };
  sections?: Array<{
    title: string;
    links: Array<{ name: string; href: string }>;
  }>;
  description?: string;
  socialLinks?: Array<{
    icon: React.ReactElement;
    href: string;
    label: string;
  }>;
  copyright?: string;
  legalLinks?: Array<{
    name: string;
    href: string;
  }>;
}

const defaultSections = [
  {
    title: "Product",
    links: [
      { name: "Pricing", href: "/pricing" },
      { name: "Our Story", href: "/our-story" },
      { name: "Use Cases", href: "/use-cases" },
    ],
  },
  {
    title: "Resources",
    links: [
      { name: "Documentation", href: "#" },
      { name: "FAQ", href: "#" },
      { name: "Support", href: "#" },
    ],
  },
  {
    title: "Company",
    links: [
      { name: "About", href: "/our-story" },
      { name: "Careers", href: "#" },
      { name: "Contact", href: "#" },
    ],
  },
];

const defaultSocialLinks = [
  { icon: <FaXTwitter className="size-5" />, href: "#", label: "X (Twitter)" },
  { icon: <FaLinkedin className="size-5" />, href: "#", label: "LinkedIn" },
  { icon: <FaYoutube className="size-5" />, href: "#", label: "YouTube" },
  { icon: <MdOutlineEmail className="size-5" />, href: "mailto:hello@layerhq.com", label: "Email" },
];

const defaultLegalLinks = [
  { name: "Terms and Conditions", href: "#" },
  { name: "Privacy Policy", href: "#" },
];

export const Footer7 = ({
  logo = { url: "/home", title: "layer" },
  sections = defaultSections,
  description = "Real-time clarity for leadership teams. Connect your teams, tools, and goals in one place.",
  socialLinks = defaultSocialLinks,
  copyright = `© ${new Date().getFullYear()} Layer. All rights reserved.`,
  legalLinks = defaultLegalLinks,
}: Footer7Props) => {
  return (
    <section className="py-32">
      <div className="mx-auto max-w-6xl px-6 xl:px-0">
        <div className="flex w-full flex-col justify-between gap-10 lg:flex-row lg:items-start lg:text-left">
          <div className="flex w-full flex-col justify-between gap-6 lg:items-start">
            {/* Logo */}
            <div className="flex items-center gap-2 lg:justify-start">
              <Link href={logo.url}>
                <img src="/images/layer-logo.png" alt="Layer" className="h-8 w-auto" />
              </Link>
            </div>
            <p className="max-w-[70%] text-sm text-muted-foreground">
              {description}
            </p>
            <ul className="flex items-center space-x-6 text-muted-foreground">
              {socialLinks.map((social, idx) => (
                <li key={idx} className="font-medium hover:text-primary">
                  <Link
                    href={social.href}
                    aria-label={social.label}
                    target={social.href.startsWith("http") || social.href.startsWith("mailto") ? "_blank" : undefined}
                    rel="noreferrer"
                  >
                    {social.icon}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="grid w-full gap-6 md:grid-cols-3 lg:gap-20">
            {sections.map((section, sectionIdx) => (
              <div key={sectionIdx}>
                <h3 className="mb-4 font-bold">{section.title}</h3>
                <ul className="space-y-3 text-sm text-muted-foreground">
                  {section.links.map((link, linkIdx) => (
                    <li key={linkIdx} className="font-medium hover:text-primary">
                      <Link href={link.href}>{link.name}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-8 flex flex-col justify-between gap-4 border-t py-8 text-xs font-medium text-muted-foreground md:flex-row md:items-center md:text-left">
          <p className="order-2 lg:order-1">{copyright}</p>
          <ul className="order-1 flex flex-col gap-2 md:order-2 md:flex-row">
            {legalLinks.map((link, idx) => (
              <li key={idx} className="hover:text-primary">
                <Link href={link.href}>{link.name}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

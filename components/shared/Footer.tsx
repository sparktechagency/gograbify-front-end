import Image from "next/image";
import Link from "next/link";

const CURRENT_YEAR = new Date().getFullYear(); 

const pages = [
  { href: "/privacy", label: "Privacy Policy" },
  { href: "/terms", label: "Terms of Service" },
  { href: "/dmca", label: "DMCA" },
  { href: "/legal-safety", label: "Legal & Safety" },
  // { href: "/faq", label: "FAQ" },
  { href: "/contact", label: "Contact" },
];

export const Footer = () => {
  return (
    <footer className="border-t border-border bg-background">
      <div className="max-w-6xl mx-auto px-4 py-8">
        {/* Top Section */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <Link href="/" aria-label="VidGrab Home" className="flex items-center gap-2">
            <Image
              src="/logo.png"
              alt="VidGrab video downloader logo"
              width={122}
              height={32}
              priority={false}
              sizes="(max-width: 768px) 120px, 122px"
            />
          </Link>

          {/* Navigation */}
          <nav
            aria-label="Footer navigation"
            className="flex flex-wrap items-center justify-center gap-6 text-sm"
          >
            {pages.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className="text-white/90 hover:text-foreground transition-colors"
              >
                {label}
              </Link>
            ))}
          </nav>

          {/* Copyright */}
          <p className="text-sm text-white/90 text-center md:text-right">
            © {CURRENT_YEAR} GoGrabify. All rights reserved.
          </p>
        </div>

        {/* Bottom Section */}
        <div className="mt-8 pt-8 border-t border-border text-center">
          <p className="text-sm text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            VidGrab is a fast and secure online video downloader supporting
            YouTube, TikTok, Instagram, and Facebook. Our free tool helps users
            save videos for offline viewing while respecting copyright laws and
            platform policies.
          </p>
        </div>
      </div>
    </footer>
  );
};

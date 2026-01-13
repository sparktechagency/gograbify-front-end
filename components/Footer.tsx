
import Image from "next/image";
import Link from "next/link";


export const Footer = () => {
  return (
    <footer className="py-12 px-4 border-t border-border">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <Image src="/logo.png" alt="VidGrab Logo" width={122} height={32} />
          </div>

          {/* Legal Links */}
          <nav className="flex flex-wrap items-center justify-center gap-6 text-sm">
            <Link
              href="/privacy"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              Terms of Service
            </Link>
            <Link
              href="/dmca"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              DMCA
            </Link>
            <Link
              href="/legal-safety"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              Legal & Safety
            </Link>
            <Link
              href="/contact"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              Contact
            </Link>
          </nav>

          {/* Copyright */}
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} VidGrab. All rights reserved.
          </p>
        </div>

        <div className="mt-8 pt-6 border-t border-border text-center">
          <p className="text-xs text-muted-foreground max-w-2xl mx-auto">
            Disclaimer: This service is for personal use only. Please respect copyright laws and
            the terms of service of the respective platforms. We do not host any copyrighted content.
          </p>
        </div>
      </div>
    </footer>
  );
};

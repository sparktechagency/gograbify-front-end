"use client";
import { NAV_LINKS } from "@/contents/navbar-data";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";


export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => setIsMenuOpen((prev) => !prev);
  const closeMenu = () => setIsMenuOpen(false);

  const  pathname  = usePathname();  
  console.log("pathname", pathname);

  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-background/80 backdrop-blur-xl border-b border-border/50">
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/logo.png"
            alt="VidGrab logo"
            width={122}
            height={32}
            priority
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          {NAV_LINKS.map(({ label, href }) => (
            <Link
              key={href}
              href={href}
              className={`text-sm font-medium hover:text-foreground   transition-colors ${
                pathname === href ? "text-white" : "text-muted-foreground"
              }`} // Add conditional class for active link
            >
              {label}
            </Link>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMenu}
          aria-label="Toggle menu"
          aria-expanded={isMenuOpen}
          className="md:hidden p-2 rounded-lg bg-secondary text-foreground"
        >
          {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-card border-t border-border">
          <nav className="flex flex-col p-4 gap-1">
            {NAV_LINKS.map(({ label, href }) => (
              <Link
                key={href}
                href={href}
                onClick={closeMenu}
                className={`px-4 py-3 rounded-lg text-sm font-medium  hover:bg-secondary hover:text-foreground transition-colors ${
                  pathname === href ? "text-white" : "text-muted-foreground"
                }`} // Add conditional class for active link
              >
                {label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};

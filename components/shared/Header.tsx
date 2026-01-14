"use client";
import {  Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";


export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-xl border-b border-border/50">
      <div className="max-w-300 mx-auto  py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
         <Image src="/logo.png" alt="VidGrab Logo" width={122} height={32} />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-6">
          <Link href="/" className="text-sm font-medium text-foreground hover:text-[#21a178] transition-colors">
            Home
          </Link>
          <Link href="/privacy" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
            Privacy
          </Link>
          <Link href="/terms" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
            Terms
          </Link>
          <Link href="/dmca" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
            DMCA
          </Link>
          <Link href="/legal-safety" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
            Legal & Safety
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden p-2 rounded-lg bg-secondary text-foreground"
        >
          {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-card border-t border-border">
          <nav className="flex flex-col p-4 gap-2">
            <Link 
              href="/" 
              onClick={() => setIsMenuOpen(false)}
              className="px-4 py-3 rounded-lg text-sm font-medium text-foreground hover:bg-secondary transition-colors"
            >
              Home
            </Link>
            <Link 
              href="/privacy" 
              onClick={() => setIsMenuOpen(false)}
              className="px-4 py-3 rounded-lg text-sm font-medium text-muted-foreground hover:bg-secondary transition-colors"
            >
              Privacy Policy
            </Link>
            <Link 
              href="/terms" 
              onClick={() => setIsMenuOpen(false)}
              className="px-4 py-3 rounded-lg text-sm font-medium text-muted-foreground hover:bg-secondary transition-colors"
            >
              Terms of Service
            </Link>
            <Link 
              href="/dmca" 
              onClick={() => setIsMenuOpen(false)}
              className="px-4 py-3 rounded-lg text-sm font-medium text-muted-foreground hover:bg-secondary transition-colors"
            >
              DMCA
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
};

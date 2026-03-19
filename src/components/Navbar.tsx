"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/onboarding", label: "Get Covered" },
  { href: "/dashboard", label: "Dashboard" },
  { href: "/simulate", label: "Live Demo" },
  { href: "/admin", label: "Admin" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-border">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link href="/" className="flex items-center gap-0">
            <Image src="/Kavach-Logo.png" alt="Kavach" width={200} height={80} priority style={{ width: "auto", height: "64px" }} />
            <span className="text-2xl font-extrabold tracking-tight text-text-primary -ml-1">Kavach</span>
          </Link>

          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="px-3.5 py-2 text-sm font-medium text-text-secondary hover:text-text-primary rounded-lg transition-colors hover:bg-surface-alt"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/onboarding"
              className="ml-4 px-5 py-2 text-sm font-semibold text-white bg-primary rounded-lg transition-all hover:bg-primary-light hover:shadow-md"
            >
              Get Started
            </Link>
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-text-secondary hover:text-text-primary"
          >
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t border-border"
          >
            <div className="px-4 py-2 space-y-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="block px-3 py-2.5 text-sm font-medium text-text-secondary hover:text-text-primary rounded-lg hover:bg-surface-alt"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

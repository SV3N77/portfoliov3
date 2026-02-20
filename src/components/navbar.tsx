"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const navLinks = [
  { label: "Projects", href: "/#projects" },
  { label: "About", href: "/#about" },
  { label: "Contact", href: "/#contact" },
  { label: "Resume", href: "/files/Danny_Jiang_resume2.pdf" }
];

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
      className="sticky top-0 z-50 border-b border-border/60 bg-background/80 backdrop-blur-md"
    >
      <nav className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
        <Link
          href="/"
          className="font-mono text-sm font-bold tracking-tight text-foreground transition-colors hover:text-accent"
        >
          Portfolio
        </Link>

        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((link, index) => (
            <motion.li
              key={link.href}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.1 + index * 0.1 }}
            >
              <Link
                href={link.href}
                {...(link.label === "Resume" && {
                  target: "_blank",
                  rel: "noopener noreferrer"
                })}
                className="relative text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
              >
                <motion.span
                  whileHover={{ y: -2 }}
                  transition={{ duration: 0.2 }}
                  className="inline-block"
                >
                  {link.label}
                </motion.span>
              </Link>
            </motion.li>
          ))}
        </ul>

        <Button
          variant="ghost"
          size="icon"
          className="md:hidden"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? (
            <X className="h-5 w-5" />
          ) : (
            <Menu className="h-5 w-5" />
          )}
        </Button>
      </nav>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden border-t border-border/60 bg-background/95 backdrop-blur-md"
          >
            <ul className="flex flex-col gap-4 px-6 py-4">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    {...(link.label === "Resume" && {
                      target: "_blank",
                      rel: "noopener noreferrer"
                    })}
                    onClick={() => setMobileMenuOpen(false)}
                    className="block text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}

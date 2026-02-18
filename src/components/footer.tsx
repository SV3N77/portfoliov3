"use client";

import { motion } from "framer-motion";

export function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="border-t border-border/60"
    >
      <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-6">
        <p className="text-xs text-muted-foreground">Crafted by Danny Jiang</p>
        <p className="font-mono text-xs text-muted-foreground">2026</p>
      </div>
    </motion.footer>
  );
}

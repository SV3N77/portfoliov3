"use client";

import { motion } from "framer-motion";
import { Mail, Github, Linkedin } from "lucide-react";

const contactItems = [
  {
    icon: Mail,
    label: "Danny.jiang177@gmail.com",
    href: "mailto:Danny.jiang177@gmail.com"
  },
  {
    icon: Github,
    label: "github.com/SV3N77",
    href: "https://github.com/SV3N77"
  },
  {
    icon: Linkedin,
    label: "linkedin.com/in/danny-jiang2",
    href: "https://www.linkedin.com/in/danny-jiang2/"
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.4, ease: "easeOut" as const }
  }
};

export function ContactSection() {
  return (
    <section id="contact" className="border-t border-border/60 bg-card">
      <div className="mx-auto max-w-5xl px-6 py-20 md:py-24">
        <div className="grid gap-12 md:grid-cols-2 md:gap-16">
          <div>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5 }}
              className="font-mono text-sm tracking-wide text-accent"
            >
              Get in touch
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="mt-2 text-balance text-3xl font-bold tracking-tight text-foreground"
            >
              Contact
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mt-4 leading-relaxed text-muted-foreground"
            >
              If you would like to discuss a project or just say hello, I am
              always open to chat. Drop me a message and I will get back to you
              as soon as I can.
            </motion.p>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="mt-8 flex flex-col gap-4"
            >
              {contactItems.map((item) => (
                <motion.a
                  key={item.href}
                  href={item.href}
                  target={item.href.startsWith("http") ? "_blank" : undefined}
                  rel={
                    item.href.startsWith("http")
                      ? "noopener noreferrer"
                      : undefined
                  }
                  variants={itemVariants}
                  whileHover={{ x: 8, transition: { duration: 0.2 } }}
                  className="flex items-center gap-3 text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  <motion.div
                    whileHover={{ scale: 1.2, rotate: 5 }}
                    transition={{ duration: 0.2 }}
                  >
                    <item.icon className="h-4 w-4 text-accent" />
                  </motion.div>
                  {item.label}
                </motion.a>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

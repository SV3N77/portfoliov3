"use client";

import { motion } from "framer-motion";
import { Code2, Palette, Gamepad, Cpu } from "lucide-react";

const interests = [
  {
    icon: Code2,
    title: "Web Development",
    description:
      "Building performant, accessible applications with modern frameworks."
  },
  {
    icon: Palette,
    title: "UI / UX Design",
    description:
      "Crafting intuitive interfaces that prioritize user experience."
  },
  {
    icon: Gamepad,
    title: "Gaming",
    description:
      "I love playing and am invested in the creative processes of games."
  },
  {
    icon: Cpu,
    title: "Machine Learning",
    description:
      "Exploring AI and data-driven solutions for real-world problems."
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" as const }
  }
};

export function InterestsSection() {
  return (
    <section id="interests" className="border-t border-border/60 bg-card">
      <div className="mx-auto max-w-5xl px-6 py-20 md:py-24">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="font-mono text-sm tracking-wide text-accent"
        >
          What I enjoy
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mt-2 text-balance text-3xl font-bold tracking-tight text-foreground"
        >
          Interests
        </motion.h2>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {interests.map((interest) => (
            <motion.div
              key={interest.title}
              variants={itemVariants}
              whileHover={{ y: -8 }}
              transition={{ duration: 0.2 }}
              className="group rounded-xl border border-border/60 bg-background p-6 transition-all hover:border-accent/40 hover:shadow-md"
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.4 }}
                className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-accent/10 text-accent transition-colors group-hover:bg-accent/20"
              >
                <interest.icon className="h-5 w-5" />
              </motion.div>
              <h3 className="font-semibold text-foreground">
                {interest.title}
              </h3>
              <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                {interest.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

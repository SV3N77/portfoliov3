"use client";

import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import { Silk } from "./silk";

export function HeroSection() {
  return (
    <section id="about" className="relative">
      <Silk
        speed={5}
        scale={1}
        color="#0a0a0a"
        noiseIntensity={0.4}
        rotation={0}
        className="absolute inset-0 -z-10 h-full w-full"
      />
      <div className="mx-auto max-w-5xl px-6 py-24 md:py-32">
        <div className="grid gap-12 md:grid-cols-2 md:gap-16">
          <div className="flex flex-col justify-center">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="mb-3 font-mono text-sm tracking-wide text-accent"
            >
              Hello, I am
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-balance text-4xl font-bold leading-tight tracking-tight text-foreground md:text-5xl"
            >
              Danny Jiang
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="mt-2 text-lg text-muted-foreground md:text-xl"
            >
              Software Engineer
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="mt-1 text-sm text-muted-foreground"
            >
              I am an aspiring web developer with a passion for creating
              innovative and user-friendly web applications.
            </motion.p>
          </div>

          <div className="flex flex-col justify-center">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="leading-relaxed text-muted-foreground"
            >
              I&apos;m a graduate at the Unversity of Technology Sydney studied
              a Bachelor of Science in Games Development. I am a developer
              passionate about crafting clean, performant user interfaces that
              blend thoughtful design with solid engineering. I&apos;m a
              self-taught developer with a strong passion for building
              accessible and responsive web applications.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="mt-4 leading-relaxed text-muted-foreground"
            >
              Currently, I am focused on building modern web applications with
              React and Next.js, specializing in responsive design and
              accessibility.
            </motion.p>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.7 }}
          className="mt-16 flex justify-center"
        >
          <a
            href="#interests"
            aria-label="Scroll to interests"
            className="text-muted-foreground transition-colors hover:text-accent"
          >
            <ArrowDown className="h-5 w-5 animate-bounce" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}

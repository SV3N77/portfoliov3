"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  ExternalLink,
  Calendar,
  CheckCircle2,
  Cpu,
  Target
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { ProjectImageCarousel } from "@/components/project-image-carousel";
import { Project } from "@/lib/projects";

interface ProjectContentClientProps {
  project: Project;
  prev?: Project;
  next?: Project;
}

export function ProjectContentClient({
  project,
  prev,
  next
}: ProjectContentClientProps) {
  return (
    <main className="mx-auto max-w-4xl px-6 py-12 md:py-20">
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.4 }}
      >
        <Link
          href="/#projects"
          className="mb-8 inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to projects
        </Link>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.1 }}
        className="mb-8"
      >
        <div className="flex flex-wrap items-center gap-3">
          <h1 className="text-balance text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            {project.title}
          </h1>
          <div className="flex items-center gap-1 text-sm text-muted-foreground">
            <Calendar className="h-3.5 w-3.5" />
            {project.year}
          </div>
        </div>
        <div className="mt-4 rounded-xl border-l-4 border-accent bg-accent/5 p-6">
          <p className="text-lg leading-relaxed text-foreground">
            {project.summary}
          </p>
        </div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.3 }}
          className="mt-4 flex flex-wrap gap-2"
        >
          {project.tags.map((tag) => (
            <Badge
              key={tag}
              variant="secondary"
              className="text-xs font-normal"
            >
              {tag}
            </Badge>
          ))}
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.2 }}
      >
        <ProjectImageCarousel images={project.images} title={project.title} />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.3 }}
        className="mt-12"
      >
        <h2 className="mb-4 text-2xl font-semibold text-foreground">
          About this project
        </h2>
        <p className="text-lg leading-relaxed text-muted-foreground">
          {project.description1}
        </p>
      </motion.div>

      {project.features && project.features.length > 0 && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.4 }}
          className="mt-12"
        >
          <h2 className="mb-6 text-2xl font-semibold text-foreground">
            Features I worked on
          </h2>
          <ul className="space-y-4">
            {project.features.map((feature, index) => (
              <motion.li
                key={index}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: 0.5 + index * 0.08 }}
                className="flex items-start gap-3 text-lg leading-relaxed text-muted-foreground"
              >
                <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-accent" />
                <span>{feature}</span>
              </motion.li>
            ))}
          </ul>
        </motion.div>
      )}

      {project.technologies && project.technologies.length > 0 && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.6 }}
          className="mt-12"
        >
          <h2 className="mb-6 flex items-center gap-2 text-2xl font-semibold text-foreground">
            <Cpu className="h-6 w-6 text-accent" />
            Technologies used
          </h2>
          <ul className="space-y-4">
            {project.technologies.map((tech, index) => (
              <motion.li
                key={index}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: 0.7 + index * 0.08 }}
                className="flex items-start gap-3 text-lg leading-relaxed text-muted-foreground"
              >
                <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-accent" />
                <span>{tech}</span>
              </motion.li>
            ))}
          </ul>
        </motion.div>
      )}

      {project.challenges && project.challenges.length > 0 && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.7 }}
          className="mt-12"
        >
          <h2 className="mb-6 flex items-center gap-2 text-2xl font-semibold text-foreground">
            <Target className="h-6 w-6 text-accent" />
            Challenges faced
          </h2>
          <ul className="space-y-4">
            {project.challenges.map((challenge, index) => (
              <motion.li
                key={index}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: 0.8 + index * 0.08 }}
                className="flex items-start gap-3 text-lg leading-relaxed text-muted-foreground"
              >
                <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-accent" />
                <span>{challenge}</span>
              </motion.li>
            ))}
          </ul>
        </motion.div>
      )}

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.8 }}
        className="mt-12"
      >
        <p className="text-lg leading-relaxed text-muted-foreground">
          {project.description2}
        </p>
      </motion.div>

      {project.links &&
        project.links.map((link, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.9 }}
            className="mt-8"
          >
            <motion.a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center justify-center gap-2 border border-border bg-card px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-muted hover:text-accent"
            >
              <ExternalLink className="h-4 w-4" />
              View Project
            </motion.a>
          </motion.div>
        ))}

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4, delay: 1.0 }}
        className="mt-16 flex items-center justify-between border-t border-border/60 pt-8"
      >
        {prev ? (
          <motion.div whileHover={{ x: -4 }} transition={{ duration: 0.2 }}>
            <Link
              href={`/projects/${prev.slug}`}
              className="group flex flex-col"
            >
              <span className="text-xs text-muted-foreground">Previous</span>
              <span className="text-sm font-medium text-foreground transition-colors group-hover:text-accent">
                {prev.title}
              </span>
            </Link>
          </motion.div>
        ) : (
          <div />
        )}
        {next ? (
          <motion.div whileHover={{ x: 4 }} transition={{ duration: 0.2 }}>
            <Link
              href={`/projects/${next.slug}`}
              className="group flex flex-col text-right"
            >
              <span className="text-xs text-muted-foreground">Next</span>
              <span className="text-sm font-medium text-foreground transition-colors group-hover:text-accent">
                {next.title}
              </span>
            </Link>
          </motion.div>
        ) : (
          <div />
        )}
      </motion.div>
    </main>
  );
}

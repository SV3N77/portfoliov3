import { notFound } from "next/navigation";
import { ProjectContentClient } from "./project-content-client";
import { projects } from "@/lib/projects";

interface ProjectPageProps {
  params: Promise<{ slug: string }>;
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  const currentIndex = projects.findIndex((p) => p.slug === project.slug);
  const prev = projects[currentIndex - 1];
  const next = projects[currentIndex + 1];

  return <ProjectContentClient project={project} prev={prev} next={next} />;
}

export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug
  }));
}

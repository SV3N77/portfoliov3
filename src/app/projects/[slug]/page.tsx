import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, ExternalLink, Calendar } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ProjectImageCarousel } from "@/components/project-image-carousel";
import { projects } from "@/lib/projects";

export function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug
  }));
}

export async function generateMetadata({
  params
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) return { title: "Project Not Found" };
  return {
    title: `${project.title} | Portfolio`,
    description: project.summary
  };
}

export default async function ProjectPage({
  params
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <main className="mx-auto max-w-4xl px-6 py-12 md:py-20">
      {/* Back link */}
      <Link
        href="/#projects"
        className="mb-8 inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
      >
        <ArrowLeft className="h-4 w-4" />
        Back to projects
      </Link>

      {/* Header */}
      <div className="mb-8">
        <div className="flex flex-wrap items-center gap-3">
          <h1 className="text-balance text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            {project.title}
          </h1>
          <div className="flex items-center gap-1 text-sm text-muted-foreground">
            <Calendar className="h-3.5 w-3.5" />
            {project.year}
          </div>
        </div>
        <p className="mt-3 text-lg leading-relaxed text-muted-foreground">
          {project.summary}
        </p>
        <div className="mt-4 flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <Badge
              key={tag}
              variant="secondary"
              className="text-xs font-normal"
            >
              {tag}
            </Badge>
          ))}
        </div>
      </div>

      {/* Carousel */}
      <ProjectImageCarousel images={project.images} title={project.title} />

      {/* Description */}
      <div className="mt-10">
        <h2 className="text-xl font-semibold text-foreground">
          About this project
        </h2>
        <p className="mt-4 leading-relaxed text-muted-foreground">
          {project.description}
        </p>
      </div>

      {/* CTA */}
      {project.link && (
        <div className="mt-8">
          <Button
            asChild
            className="bg-accent text-accent-foreground hover:bg-accent/90"
          >
            <a href={project.link} target="_blank" rel="noopener noreferrer">
              <ExternalLink className="mr-2 h-4 w-4" />
              View Project
            </a>
          </Button>
        </div>
      )}

      {/* Navigation */}
      <div className="mt-16 flex items-center justify-between border-t border-border/60 pt-8">
        {(() => {
          const currentIndex = projects.findIndex(
            (p) => p.slug === project.slug
          );
          const prev = projects[currentIndex - 1];
          const next = projects[currentIndex + 1];
          return (
            <>
              {prev ? (
                <Link
                  href={`/projects/${prev.slug}`}
                  className="group flex flex-col"
                >
                  <span className="text-xs text-muted-foreground">
                    Previous
                  </span>
                  <span className="text-sm font-medium text-foreground transition-colors group-hover:text-accent">
                    {prev.title}
                  </span>
                </Link>
              ) : (
                <div />
              )}
              {next ? (
                <Link
                  href={`/projects/${next.slug}`}
                  className="group flex flex-col text-right"
                >
                  <span className="text-xs text-muted-foreground">Next</span>
                  <span className="text-sm font-medium text-foreground transition-colors group-hover:text-accent">
                    {next.title}
                  </span>
                </Link>
              ) : (
                <div />
              )}
            </>
          );
        })()}
      </div>
    </main>
  );
}

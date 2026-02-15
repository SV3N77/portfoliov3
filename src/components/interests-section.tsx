import { Code2, Palette, Globe, Terminal, Layers, Cpu } from "lucide-react";

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
    icon: Globe,
    title: "Open Source",
    description: "Contributing to and maintaining open source projects."
  },
  {
    icon: Terminal,
    title: "DevOps",
    description: "Streamlining deployment pipelines and infrastructure."
  },
  {
    icon: Layers,
    title: "System Design",
    description: "Architecting scalable and maintainable software systems."
  },
  {
    icon: Cpu,
    title: "Machine Learning",
    description:
      "Exploring AI and data-driven solutions for real-world problems."
  }
];

export function InterestsSection() {
  return (
    <section id="interests" className="border-t border-border/60 bg-card">
      <div className="mx-auto max-w-5xl px-6 py-20 md:py-24">
        <p className="font-mono text-sm tracking-wide text-accent">
          What I enjoy
        </p>
        <h2 className="mt-2 text-balance text-3xl font-bold tracking-tight text-foreground">
          Interests
        </h2>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {interests.map((interest) => (
            <div
              key={interest.title}
              className="group rounded-xl border border-border/60 bg-background p-6 transition-all hover:border-accent/40 hover:shadow-sm"
            >
              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-accent/10 text-accent transition-colors group-hover:bg-accent/20">
                <interest.icon className="h-5 w-5" />
              </div>
              <h3 className="font-semibold text-foreground">
                {interest.title}
              </h3>
              <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                {interest.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

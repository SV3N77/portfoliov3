import { ArrowDown } from "lucide-react";

export function HeroSection() {
  return (
    <section id="about" className="mx-auto max-w-5xl px-6 py-24 md:py-32">
      <div className="grid gap-12 md:grid-cols-2 md:gap-16">
        {/* Left column */}
        <div className="flex flex-col justify-center">
          <p className="mb-3 font-mono text-sm tracking-wide text-accent">
            Hello, I am
          </p>
          <h1 className="text-balance text-4xl font-bold leading-tight tracking-tight text-foreground md:text-5xl">
            Danny Jiang
          </h1>
          <p className="mt-2 text-lg text-muted-foreground md:text-xl">
            Software Engineer
          </p>
          <p className="mt-1 text-sm text-muted-foreground">
            I am an aspiring web developer with a passion for creating
            innovative and user-friendly web applications.
          </p>
        </div>

        {/* Right column */}
        <div className="flex flex-col justify-center">
          <p className="leading-relaxed text-muted-foreground">
            I am a developer passionate about crafting clean, performant user
            interfaces that blend thoughtful design with solid engineering. My
            favorite work lives at the intersection of design and code, creating
            experiences that not only look great but are meticulously built for
            performance and usability.
          </p>
          <p className="mt-4 leading-relaxed text-muted-foreground">
            Currently, I am focused on building modern web applications with
            React and Next.js, specializing in responsive design and
            accessibility.
          </p>
        </div>
      </div>

      <div className="mt-16 flex justify-center">
        <a
          href="#interests"
          aria-label="Scroll to interests"
          className="text-muted-foreground transition-colors hover:text-accent"
        >
          <ArrowDown className="h-5 w-5 animate-bounce" />
        </a>
      </div>
    </section>
  );
}

import { Mail, Github, Linkedin } from "lucide-react";
import { ContactForm } from "@/components/contact-form";

export function ContactSection() {
  return (
    <section id="contact" className="border-t border-border/60 bg-card">
      <div className="mx-auto max-w-5xl px-6 py-20 md:py-24">
        <div className="grid gap-12 md:grid-cols-2 md:gap-16">
          {/* Left */}
          <div>
            <p className="font-mono text-sm tracking-wide text-accent">
              Get in touch
            </p>
            <h2 className="mt-2 text-balance text-3xl font-bold tracking-tight text-foreground">
              Contact
            </h2>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              If you would like to discuss a project or just say hello, I am
              always open to chat. Drop me a message and I will get back to you
              as soon as I can.
            </p>

            <div className="mt-8 flex flex-col gap-4">
              <a
                href="mailto:Danny.jiang177@gmail.com"
                className="flex items-center gap-3 text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                <Mail className="h-4 w-4 text-accent" />
                Danny.jiang177@gmail.com
              </a>
              <a
                href="https://github.com/SV3N77"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                <Github className="h-4 w-4 text-accent" />
                github.com/SV3N77
              </a>
              <a
                href="https://www.linkedin.com/in/danny-jiang2/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                <Linkedin className="h-4 w-4 text-accent" />
                linkedin.com/in/danny-jiang2
              </a>
            </div>
          </div>

          {/* Right - Form */}
          <ContactForm />
        </div>
      </div>
    </section>
  );
}

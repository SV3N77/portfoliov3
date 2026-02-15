"use client";

import { useState } from "react";
import { Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-5">
      <div className="flex flex-col gap-2">
        <Label htmlFor="name" className="text-sm text-foreground">
          Name
        </Label>
        <Input
          id="name"
          placeholder="Your name"
          required
          className="bg-background"
        />
      </div>
      <div className="flex flex-col gap-2">
        <Label htmlFor="email" className="text-sm text-foreground">
          Email
        </Label>
        <Input
          id="email"
          type="email"
          placeholder="you@example.com"
          required
          className="bg-background"
        />
      </div>
      <div className="flex flex-col gap-2">
        <Label htmlFor="message" className="text-sm text-foreground">
          Message
        </Label>
        <Textarea
          id="message"
          placeholder="Tell me about your project..."
          rows={4}
          required
          className="resize-none bg-background"
        />
      </div>
      <Button
        type="submit"
        className="mt-1 w-full bg-accent text-accent-foreground hover:bg-accent/90 sm:w-auto"
        disabled={submitted}
      >
        {submitted ? (
          "Message sent!"
        ) : (
          <>
            <Send className="mr-2 h-4 w-4" />
            Send Message
          </>
        )}
      </Button>
    </form>
  );
}

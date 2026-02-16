"use client";

import * as React from "react";
import useEmblaCarousel from "embla-carousel-react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface CarouselProps {
  children: React.ReactNode;
  className?: string;
}

export function Carousel({ children, className }: CarouselProps) {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: false });
  const [canPrev, setCanPrev] = React.useState(false);
  const [canNext, setCanNext] = React.useState(false);

  const updateButtons = React.useCallback(() => {
    if (!emblaApi) return;
    setCanPrev(emblaApi.canScrollPrev());
    setCanNext(emblaApi.canScrollNext());
  }, [emblaApi]);

  React.useEffect(() => {
    if (!emblaApi) return;
    updateButtons();
    emblaApi.on("select", updateButtons);
    emblaApi.on("reInit", updateButtons);
  }, [emblaApi, updateButtons]);

  return (
    <div className={cn("relative", className)}>
      <div ref={emblaRef} className="overflow-hidden">
        <div className="flex">{children}</div>
      </div>

      <button
        onClick={() => emblaApi?.scrollPrev()}
        disabled={!canPrev}
        className="absolute -left-12 top-1/2 -translate-y-1/2 h-8 w-8 rounded-full border bg-background flex items-center justify-center disabled:opacity-50"
      >
        <ArrowLeft className="h-4 w-4" />
      </button>

      <button
        onClick={() => emblaApi?.scrollNext()}
        disabled={!canNext}
        className="absolute -right-12 top-1/2 -translate-y-1/2 h-8 w-8 rounded-full border bg-background flex items-center justify-center disabled:opacity-50"
      >
        <ArrowRight className="h-4 w-4" />
      </button>
    </div>
  );
}


"use client";

import { useEffect, useState, useCallback } from "react";
import { ArrowUpCircle } from "lucide-react";
import { cn } from "@/lib/utils";
import { Progress } from "@/components/ui/progress";

export function BackToTop() {
  const [show, setShow] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  const handleScroll = useCallback(() => {
    const winScroll = document.documentElement.scrollTop;
    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrolled = (winScroll / height) * 100;

    setScrollProgress(scrolled);
    setShow(winScroll > 100);
  }, []);

  useEffect(() => {
    // Initial check on mount
    handleScroll();
    
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div 
      className={cn(
        "fixed bottom-4 right-4 md:bottom-8 md:right-8 z-[100] transition-opacity duration-300",
        show ? "opacity-100" : "opacity-0 pointer-events-none"
      )}
    >
      <div className="relative">
        {/* Circular progress indicator */}
        <div className="absolute inset-0 -m-1">
          <Progress
            value={scrollProgress}
            className="h-full w-full rounded-full bg-secondary/20 [&>div]:bg-primary"
          />
        </div>
        
        {/* Back to top button */}
        <button
          onClick={scrollToTop}
          aria-label="Retour en haut"
          className={cn(
            "relative flex h-12 w-12 items-center justify-center rounded-full",
            "bg-background text-primary shadow-lg hover:bg-accent",
            "transition-all duration-200 ease-in-out hover:scale-110",
          )}
        >
          <ArrowUpCircle className="h-6 w-6" />
        </button>
      </div>
    </div>
  );
}


"use client";

import { useEffect, useState, useCallback, useRef } from "react";
import { ArrowUpCircle } from "lucide-react";
import { cn } from "@/lib/utils";
import { Progress } from "@/components/ui/progress";

export function BackToTop() {
  const [show, setShow] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const ticking = useRef(false);

  const handleScroll = useCallback(() => {
    if (!ticking.current) {
      ticking.current = true;
      
      requestAnimationFrame(() => {
        const winScroll = window.pageYOffset || document.documentElement.scrollTop;
        const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const scrolled = height > 0 ? (winScroll / height) * 100 : 0;
        
        // Utiliser une valeur plus petite (50px au lieu de 100px) pour être plus réactif
        setShow(winScroll > 50);
        setScrollProgress(scrolled);
        
        ticking.current = false;
      });
    }
  }, []);

  useEffect(() => {
    // Vérification initiale au montage
    handleScroll();
    
    window.addEventListener("scroll", handleScroll, { passive: true });
    
    // Vérifier à nouveau après un court délai pour s'assurer que le calcul est correct
    const timer = setTimeout(handleScroll, 300);
    
    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearTimeout(timer);
    };
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
        "fixed bottom-4 right-4 md:bottom-8 md:right-8 z-[100] transition-all duration-300",
        show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10 pointer-events-none"
      )}
      aria-hidden={!show}
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

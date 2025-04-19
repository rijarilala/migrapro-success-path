
"use client";

import { useEffect, useState, useCallback, useRef } from "react";
import { ChevronUp } from "lucide-react";
import { cn } from "@/lib/utils";

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
        
        // Use an even smaller threshold (30px) to ensure better visibility
        setShow(winScroll > 30);
        setScrollProgress(scrolled);
        
        ticking.current = false;
      });
    }
  }, []);

  useEffect(() => {
    // Initial check on mount
    handleScroll();
    
    window.addEventListener("scroll", handleScroll, { passive: true });
    
    // Check again after a short delay to ensure calculation is correct
    const timer = setTimeout(handleScroll, 300);
    
    // Add another check after a longer delay (useful for slower page loads)
    const secondTimer = setTimeout(handleScroll, 1000);
    
    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearTimeout(timer);
      clearTimeout(secondTimer);
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
        "fixed bottom-5 right-5 md:bottom-8 md:right-8 z-[9999] transition-all duration-300",
        show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10 pointer-events-none"
      )}
      aria-hidden={!show}
    >
      <button
        onClick={scrollToTop}
        aria-label="Retour en haut"
        className="relative h-12 w-12 rounded-full bg-white shadow-md focus:outline-none focus:ring-2 focus:ring-primary"
      >
        {/* SVG Progress Circle */}
        <svg 
          className="absolute inset-0 h-full w-full -rotate-90" 
          viewBox="0 0 100 100"
        >
          {/* Background circle */}
          <circle
            cx="50"
            cy="50"
            r="45"
            fill="none"
            stroke="var(--border, hsl(var(--border)))"
            strokeWidth="2"
            className="opacity-20"
          />
          
          {/* Progress circle */}
          <circle
            cx="50"
            cy="50"
            r="45"
            fill="none"
            stroke="var(--primary, hsl(var(--primary)))"
            strokeWidth="3"
            strokeLinecap="round"
            strokeDasharray={`${2 * Math.PI * 45}`}
            strokeDashoffset={`${2 * Math.PI * 45 * (1 - scrollProgress / 100)}`}
            className="transition-all duration-200"
          />
        </svg>
        
        {/* Centered icon */}
        <div className="absolute inset-0 flex items-center justify-center">
          <ChevronUp className="h-5 w-5 text-primary" />
        </div>
      </button>
    </div>
  );
}

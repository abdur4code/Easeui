import React, { useState, useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/libs/utils";

export interface CarouselProps extends React.HTMLAttributes<HTMLDivElement> {
  items: React.ReactNode[];
  showArrows?: boolean;
  showIndicators?: boolean;
  autoPlay?: boolean;
  interval?: number;
}

export const Carousel = React.forwardRef<HTMLDivElement, CarouselProps>(
  ({ 
    items, 
    showArrows = true, 
    showIndicators = true, 
    autoPlay = false, 
    interval = 3000, 
    className, 
    ...props 
  }, ref) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    // 1. Add state to track mouse hover
    const [isPaused, setIsPaused] = useState(false);

    const nextSlide = useCallback(() => {
      setCurrentIndex((prev) => (prev === items.length - 1 ? 0 : prev + 1));
    }, [items.length]);

    const prevSlide = () => {
      setCurrentIndex((prev) => (prev === 0 ? items.length - 1 : prev - 1));
    };

    // 2. Tie the interval to both autoPlay AND the isPaused state
    useEffect(() => {
      if (!autoPlay || isPaused) return; 
      
      const timer = setInterval(nextSlide, interval);
      return () => clearInterval(timer);
    }, [autoPlay, interval, nextSlide, isPaused]);

    if (!items || items.length === 0) return null;

    return (
      <div 
        ref={ref} 
        className={cn("relative overflow-hidden w-full rounded-lg group", className)} 
        // 3. Listen for mouse enter/leave events on the main wrapper
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        {...props}
      >
        {/* Carousel Track */}
        <div
          className="flex transition-transform duration-500 ease-out h-full"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {items.map((item, index) => (
            <div key={index} className="w-full shrink-0">
              {item}
            </div>
          ))}
        </div>

        {/* Navigation Arrows */}
        {showArrows && (
          <>
            <button
              onClick={prevSlide}
              aria-label="Previous slide"
              className="absolute top-1/2 left-4 -translate-y-1/2 p-2 rounded-full bg-black/30 text-white opacity-0 group-hover:opacity-100 transition-opacity hover:bg-black/50 z-10"
            >
              <ChevronLeft size={24} />
            </button>
            <button
              onClick={nextSlide}
              aria-label="Next slide"
              className="absolute top-1/2 right-4 -translate-y-1/2 p-2 rounded-full bg-black/30 text-white opacity-0 group-hover:opacity-100 transition-opacity hover:bg-black/50 z-10"
            >
              <ChevronRight size={24} />
            </button>
          </>
        )}

        {/* Bottom Dot Indicators */}
        {showIndicators && (
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
            {items.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                aria-label={`Go to slide ${index + 1}`}
                className={cn(
                  "w-2.5 h-2.5 rounded-full transition-colors",
                  currentIndex === index ? "bg-white" : "bg-white/50 hover:bg-white/80"
                )}
              />
            ))}
          </div>
        )}
      </div>
    );
  }
);

Carousel.displayName = "Carousel";
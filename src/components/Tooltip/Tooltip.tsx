import React, { useState, useRef, useEffect } from "react";
import { createPortal } from "react-dom";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/libs/utils";
import { entranceAnimations } from "@/libs/animations/entranceAnimation";

const tooltipVariants = cva(
  "absolute z-[9999] px-3 py-1.5 text-sm rounded-md shadow-md whitespace-nowrap pointer-events-none",
  {
    variants: {
      variant: {
        light: "bg-white text-gray-800 border border-gray-200",
        dark: "bg-slate-900 text-white",
      },
    },
    defaultVariants: { variant: "dark" },
  }
);

export interface TooltipProps extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof tooltipVariants> {
  content: string;
  children: React.ReactNode;
  position?: "top" | "bottom" | "left" | "right";
  animation?: keyof typeof entranceAnimations;
}

export const Tooltip = React.forwardRef<HTMLDivElement, TooltipProps>(
  ({ content, children, variant, position = "top", animation = "fadeIn", className, ...props }, externalRef) => {
    const [isVisible, setIsVisible] = useState(false);
    const [coords, setCoords] = useState({ top: 0, left: 0 });
    const triggerRef = useRef<HTMLDivElement>(null);
    const tooltipRef = useRef<HTMLDivElement>(null);

    // Calculate exact pixel position relative to the document
    const updatePosition = () => {
      if (!triggerRef.current || !tooltipRef.current) return;
      
      const rect = triggerRef.current.getBoundingClientRect();
      const tooltipRect = tooltipRef.current.getBoundingClientRect();
      const spacing = 8; // Margin between trigger and tooltip
      
      let top = 0;
      let left = 0;

      switch (position) {
        case "top":
          top = rect.top - tooltipRect.height - spacing + window.scrollY;
          left = rect.left + (rect.width / 2) - (tooltipRect.width / 2) + window.scrollX;
          break;
        case "bottom":
          top = rect.bottom + spacing + window.scrollY;
          left = rect.left + (rect.width / 2) - (tooltipRect.width / 2) + window.scrollX;
          break;
        case "left":
          top = rect.top + (rect.height / 2) - (tooltipRect.height / 2) + window.scrollY;
          left = rect.left - tooltipRect.width - spacing + window.scrollX;
          break;
        case "right":
          top = rect.top + (rect.height / 2) - (tooltipRect.height / 2) + window.scrollY;
          left = rect.right + spacing + window.scrollX;
          break;
      }
      setCoords({ top, left });
    };

    useEffect(() => {
      if (isVisible) {
        updatePosition();
        window.addEventListener("resize", updatePosition);
        window.addEventListener("scroll", updatePosition, true); // true catches scrolling inside scrollable divs

        // Trigger entrance animation
        if (tooltipRef.current && animation !== "none") {
          entranceAnimations[animation]?.(tooltipRef.current);
        }
      }
      
      return () => {
        window.removeEventListener("resize", updatePosition);
        window.removeEventListener("scroll", updatePosition, true);
      };
    }, [isVisible, position, animation]);

    // Handle forwarding the ref safely
    const setRefs = (node: HTMLDivElement) => {
      tooltipRef.current = node;
      if (typeof externalRef === "function") externalRef(node);
      else if (externalRef) (externalRef as React.MutableRefObject<HTMLDivElement | null>).current = node;
    };

    return (
      <>
        <div
          ref={triggerRef}
          className="relative inline-flex"
          onMouseEnter={() => setIsVisible(true)}
          onMouseLeave={() => setIsVisible(false)}
        >
          {children}
        </div>
        
        {/* Render tooltip at the DOM root */}
        {isVisible &&
          createPortal(
            <div
              ref={setRefs}
              style={{ top: coords.top, left: coords.left }}
              className={cn(tooltipVariants({ variant }), className)}
              {...props}
            >
              {content}
            </div>,
            document.body
          )}
      </>
    );
  }
);

Tooltip.displayName = "Tooltip";
import React, { useState, useRef, useEffect } from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/libs/utils";
import { entranceAnimations } from "@/libs/animations/entranceAnimation";

const tooltipVariants = cva(
  "absolute z-50 px-3 py-1.5 text-sm rounded-md shadow-md whitespace-nowrap pointer-events-none",
  {
    variants: {
      variant: {
        light: "bg-white text-gray-800 border border-gray-200",
        dark: "bg-slate-900 text-white",
      },
      position: {
        top: "bottom-full left-1/2 -translate-x-1/2 mb-2",
        bottom: "top-full left-1/2 -translate-x-1/2 mt-2",
        left: "right-full top-1/2 -translate-y-1/2 mr-2",
        right: "left-full top-1/2 -translate-y-1/2 ml-2",
      }
    },
    defaultVariants: { variant: "dark", position: "top" },
  }
);

export interface TooltipProps extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof tooltipVariants> {
  content: string;
  children: React.ReactNode;
  animation?: keyof typeof entranceAnimations;
}

export const Tooltip = React.forwardRef<HTMLDivElement, TooltipProps>(
  ({ content, children, variant, position, animation = "fadeIn", className, ...props }, ref) => {
    const [isVisible, setIsVisible] = useState(false);
    const tooltipRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
      if (isVisible && tooltipRef.current && animation !== "none") {
        entranceAnimations[animation]?.(tooltipRef.current);
      }
    }, [isVisible, animation]);

    return (
      <div
        className="relative inline-flex"
        onMouseEnter={() => setIsVisible(true)}
        onMouseLeave={() => setIsVisible(false)}
      >
        {children}
        {isVisible && (
          <div
            ref={(node) => {
              tooltipRef.current = node;
              if (typeof ref === "function") ref(node);
              else if (ref) ref.current = node;
            }}
            className={cn(tooltipVariants({ variant, position }), className)}
            {...props}
          >
            {content}
          </div>
        )}
      </div>
    );
  }
);
Tooltip.displayName = "Tooltip";
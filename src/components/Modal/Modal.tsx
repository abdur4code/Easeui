import { cva, type VariantProps } from "class-variance-authority";
import React, { useEffect, useId } from "react";
import { cn } from "@/libs/utils";

// FIX: Removed the screen-wrapping classes. These styles now solely define the dialog box.
const modalVariants = cva(
  "relative w-full rounded-xl transition-all duration-300 animate-fadeIn outline-none",
  {
    variants: {
      variant: {
        light: "bg-white text-gray-900 shadow-2xl border border-gray-200",
        dark: "bg-slate-900 text-white shadow-lg border border-slate-700",
        outline: "bg-transparent border border-gray-400 text-gray-800 dark:border-gray-600 dark:text-gray-100 backdrop-blur-md",
      },
      size: {
        sm: "max-w-sm p-4",
        md: "max-w-md p-6",
        lg: "max-w-lg p-8",
      },
    },
    defaultVariants: {
      variant: "light",
      size: "md",
    },
  }
);

export interface ModalProps extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof modalVariants> {
  isOpen?: boolean;
  title?: string;
  description?: string;
  onClose?: () => void;
  onDone?: () => void;
  doneText?: string;
  closeText?: string;
  children?: React.ReactNode;
}

const Modal = React.forwardRef<HTMLDivElement, ModalProps>(
  ( // FIX: Added missing parenthesis for the render function
    {
      title,
      description,
      children,
      className,
      isOpen = false,
      onClose,
      onDone,
      doneText = "Done",
      closeText = "Close",
      variant,
      size,
      ...props
    },
    ref
  ) => {
    // FIX: Unique IDs for accessibility if multiple modals exist
    const uniqueId = useId(); 
    const titleId = title ? `modal-title-${uniqueId}` : undefined;
    const descId = description ? `modal-desc-${uniqueId}` : undefined;

    useEffect(() => {
      if (!isOpen) return;

      const originalOverflow = window.getComputedStyle(document.body).overflow;
      document.body.style.overflow = "hidden";

      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === "Escape") onClose?.();
      };
      window.addEventListener("keydown", handleKeyDown);

      return () => {
        document.body.style.overflow = originalOverflow;
        window.removeEventListener("keydown", handleKeyDown);
      };
    }, [isOpen, onClose]);

    if (!isOpen) return null;

    return (
      <div className="fixed inset-0 flex items-center justify-center z-50 p-4">
        {/* Overlay */}
        <div
          className="fixed inset-0 bg-black/50 backdrop-blur-sm transition-opacity duration-300"
          onClick={onClose}
          aria-hidden="true"
        />
        
        {/* Modal Dialog */}
        <div
          ref={ref}
          role="dialog"
          aria-modal="true"
          aria-labelledby={titleId}
          aria-describedby={descId}
          className={cn(modalVariants({ variant, size }), className)}
          {...props}
        >
          {title && (
            <h3 id={titleId} className="text-xl font-semibold mb-2">
              {title}
            </h3>
          )}
          {description && (
            <p id={descId} className="text-gray-600 dark:text-gray-300 mb-4">
              {description}
            </p>
          )}
          <div className="mb-4">{children}</div>
          <div className="flex justify-end gap-3 mt-6">
            <button
              onClick={onClose}
              className={cn(
                "px-4 py-2 rounded-md font-medium transition",
                variant === "dark"
                  ? "border border-slate-600 hover:bg-slate-700"
                  : "border border-gray-300 hover:bg-gray-100"
              )}
            >
              {closeText}
            </button>
            <button
              onClick={onDone}
              className={cn(
                "px-4 py-2 rounded-md text-white font-medium transition",
                variant === "dark"
                  ? "bg-indigo-500 hover:bg-indigo-600"
                  : "bg-indigo-600 hover:bg-indigo-700"
              )}
            >
              {doneText}
            </button>
          </div>
        </div>
      </div>
    );
  }
);

Modal.displayName = "Modal";
export { Modal, modalVariants };
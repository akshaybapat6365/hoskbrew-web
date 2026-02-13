"use client";

import { motion, HTMLMotionProps } from "framer-motion";
import { cn } from "@/lib/utils";
import React from "react";

interface ButtonProps extends HTMLMotionProps<"button"> {
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    { className, variant = "primary", size = "md", children, ...props },
    ref,
  ) => {
    const variants = {
      primary:
        "bg-primary text-primary-foreground border-2 border-primary-foreground hover:bg-primary/90 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] active:translate-x-[4px] active:translate-y-[4px] active:shadow-none",
      secondary:
        "bg-secondary text-secondary-foreground border-2 border-secondary-foreground hover:bg-secondary/90 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] active:translate-x-[4px] active:translate-y-[4px] active:shadow-none",
      outline:
        "bg-transparent border-2 border-retro-white text-retro-white hover:bg-retro-white hover:text-retro-black",
      ghost: "bg-transparent text-retro-white hover:bg-white/10",
    };

    const sizes = {
      sm: "px-3 py-1 text-sm",
      md: "px-6 py-2 text-base",
      lg: "px-8 py-3 text-lg font-bold",
    };

    return (
      <motion.button
        ref={ref}
        whileTap={{ scale: 0.98 }}
        className={cn(
          "relative inline-flex items-center justify-center font-retro uppercase transition-colors focus:outline-none focus:ring-2 focus:ring-retro-accent focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none",
          variants[variant],
          sizes[size],
          className,
        )}
        {...props}
      >
        {children}
      </motion.button>
    );
  },
);
Button.displayName = "Button";

export { Button };

import React from 'react';
import { motion, HTMLMotionProps } from "motion/react";

interface InputNodeProps extends Omit<HTMLMotionProps<"div">, "x" | "y"> {
  label: string;
  icon: React.ReactNode;
  rotation?: number;
  x: number;
  y: number;
  accentColor?: string;
  shadowRotation?: number;
}

export const InputNode = React.forwardRef<HTMLDivElement, InputNodeProps>(({ 
  label, icon, rotation = 0, x, y, accentColor, shadowRotation = 0, className = "", ...props 
}, ref) => {
  return (
    <motion.div 
      ref={ref}
      className={`lg:absolute lg:left-[var(--x)] lg:top-[var(--y)] flex items-center gap-3 bg-surface px-4 py-3 rounded border border-border-subtle shadow-[0_4px_12px_rgba(0,0,0,0.05)] z-10 w-[140px] hover:border-border hover:bg-surface-raised transition-colors cursor-default ${className}`}
      style={{
        "--x": `${x}px`,
        "--y": `${y}px`,
        ...props.style,
      } as React.CSSProperties}
      {...props}
    >
      <div 
        className="absolute inset-0 bg-background border border-border-subtle rounded -z-10 transition-transform"
        style={{
          transform: `rotate(${shadowRotation - rotation}deg) translate(2px, 2px)`,
        }}
      />
      
      <div className="text-foreground-secondary flex-shrink-0">
        {icon}
      </div>
      <span className="text-body-sm font-medium text-foreground-secondary flex-grow">
        {label}
      </span>
      {accentColor && (
        <div 
          className="w-[6px] h-[6px] rounded-full flex-shrink-0" 
          style={{ backgroundColor: accentColor }}
        />
      )}
    </motion.div>
  );
});

InputNode.displayName = "InputNode";

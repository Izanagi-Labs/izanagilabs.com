import React from 'react';
import { motion, HTMLMotionProps } from "motion/react";

interface WorkflowNodeProps extends Omit<HTMLMotionProps<"div">, "x" | "y"> {
  label: string;
  icon: React.ReactNode;
  x: number;
  y: number;
  isActive?: boolean;
}

export const WorkflowNode = React.forwardRef<HTMLDivElement, WorkflowNodeProps>(({ 
  label, icon, x, y, isActive = false, className = "", ...props 
}, ref) => {
  const bgColor = isActive ? "bg-accent-soft" : "bg-surface-raised";
  const borderColor = isActive ? "border-accent" : "border-border";
  const textColor = isActive ? "text-accent" : "text-foreground-secondary";
  const hoverBorderColor = isActive ? "hover:border-accent-hover" : "hover:border-foreground-fainter";
  const hoverBgColor = isActive ? "hover:bg-accent/20" : "hover:bg-surface";
  
  return (
    <motion.div 
      ref={ref}
      className={`lg:absolute lg:left-[var(--x)] lg:top-[var(--y)] flex items-center gap-2.5 px-3 py-[9px] rounded border ${bgColor} ${borderColor} shadow-sm z-10 w-[110px] ${hoverBorderColor} ${hoverBgColor} transition-colors cursor-default ${className}`}
      style={{
        "--x": `${x}px`,
        "--y": `${y}px`,
        ...props.style,
      } as React.CSSProperties}
      {...props}
    >
      <div className={`${textColor} flex-shrink-0 opacity-80 transition-colors`}>
        {icon}
      </div>
      <span className={`text-body-sm ${isActive ? 'font-medium' : 'font-normal'} ${textColor} transition-colors`}>
        {label}
      </span>
      
      <div className={`absolute -left-1.5 top-1/2 -translate-y-1/2 w-2 h-2 ${isActive ? 'bg-accent border-accent' : 'bg-surface-raised border-border'} border rounded-full transition-colors`} />
      {!isActive && <div className="absolute -right-1.5 top-1/2 -translate-y-1/2 w-2 h-2 bg-surface-raised border border-border rounded-full transition-colors" />}
      {isActive && <div className="absolute -right-1.5 top-1/2 -translate-y-1/2 w-2 h-2 bg-accent border border-accent rounded-full transition-colors" />}
    </motion.div>
  );
});

WorkflowNode.displayName = "WorkflowNode";

import Image from "next/image";
import React from 'react';
import { motion, HTMLMotionProps } from "motion/react";

interface IzanagiNodeProps extends Omit<HTMLMotionProps<"div">, "x" | "y"> {
  x: number;
  y: number;
}

export const IzanagiNode = React.forwardRef<HTMLDivElement, IzanagiNodeProps>(({ 
  x, y, className = "", ...props 
}, ref) => {
  return (
    <motion.div 
      ref={ref}
      className={`lg:absolute lg:left-[var(--x)] lg:top-[var(--y)] bg-surface-raised border-2 border-foreground w-[160px] h-[80px] flex flex-col justify-center items-center z-20 shadow-[0_4px_24px_rgba(0,0,0,0.08)] ${className}`}
      style={{
        "--x": `${x}px`,
        "--y": `${y}px`,
        ...props.style,
      } as React.CSSProperties}
      {...props}
    >
      {/* We can use an inner motion element for the activation accent if we want, but Framer Motion handles it from the parent's animate prop if we configure it correctly. For now, this is static. */}
      <motion.div 
        className="absolute left-[-2px] top-[-2px] bottom-[-2px] w-[5px] bg-accent" 
        variants={{
          inactive: { scaleY: 0, opacity: 0 },
          active: { scaleY: 1, opacity: 1 }
        }}
        initial="inactive"
        animate="active" // In system flow this will be overridden
        transition={{ duration: 0.3 }}
        style={{ transformOrigin: "bottom" }}
      />
      
      <div className="relative w-10 h-6 mb-2">
         <Image src="/logo-new.png" alt="Izanagi Labs" fill sizes="40px" className="object-contain scale-125" />
      </div>
      <span className="text-label text-foreground">
        Izanagi
      </span>
      
      {/* Visual Anchor points for lines */}
      <div className="absolute -left-1 top-1/2 -translate-y-1/2 w-1.5 h-1.5 bg-foreground rounded-full" />
      <div className="absolute -right-1 top-1/2 -translate-y-1/2 w-1.5 h-1.5 bg-foreground rounded-full" />
      <div className="absolute left-1/2 -bottom-1 -translate-x-1/2 w-1.5 h-1.5 bg-foreground rounded-full rotate-45 transform triangle-down" style={{ clipPath: "polygon(50% 100%, 0 0, 100% 0)", borderRadius: 0, height: 4, width: 6, bottom: -4, backgroundColor: 'var(--color-foreground)' }} />
    </motion.div>
  );
});

IzanagiNode.displayName = "IzanagiNode";

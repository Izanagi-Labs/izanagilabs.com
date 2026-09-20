import { motion } from "motion/react";

export function ConnectorLayerMobile() {
  return (
    <svg className="absolute inset-0 w-full h-full pointer-events-none lg:hidden" style={{ zIndex: 0 }}>
      <defs>
        <marker id="arrowHeadRustMobile" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
          <path d="M 0 0 L 10 5 L 0 10 z" fill="var(--color-accent)" />
        </marker>
        <marker id="arrowHeadGrayMobile" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
          <path d="M 0 0 L 10 5 L 0 10 z" fill="var(--color-foreground-fainter)" />
        </marker>
      </defs>

      <motion.path 
        initial={{ pathLength: 0, opacity: 0 }} 
        animate={{ pathLength: 1, opacity: 0.3 }} 
        transition={{ duration: 1, delay: 0.5 }}
        d="M 55 46 C 55 160, 170 160, 170 280" 
        stroke="var(--color-foreground-fainter)" 
        strokeWidth="1.5" 
        fill="none" 
        strokeDasharray="4 4"
        markerEnd="url(#arrowHeadGrayMobile)"
      />
      
      <motion.path 
        initial={{ pathLength: 0, opacity: 0 }} 
        animate={{ pathLength: 1, opacity: 0.4 }} 
        transition={{ duration: 1, delay: 0.6 }}
        d="M 285 68 C 285 170, 170 170, 170 280" 
        stroke="var(--color-accent)" 
        strokeWidth="1.5" 
        fill="none" 
        markerEnd="url(#arrowHeadRustMobile)"
      />
      
      <motion.path 
        initial={{ pathLength: 0, opacity: 0 }} 
        animate={{ pathLength: 1, opacity: 0.3 }} 
        transition={{ duration: 1, delay: 0.7 }}
        d="M 170 128 C 170 200, 170 200, 170 280" 
        stroke="var(--color-foreground-fainter)" 
        strokeWidth="1.5" 
        fill="none" 
        strokeDasharray="4 4"
        markerEnd="url(#arrowHeadGrayMobile)"
      />
      
      <motion.path 
        initial={{ pathLength: 0, opacity: 0 }} 
        animate={{ pathLength: 1, opacity: 0.3 }} 
        transition={{ duration: 1, delay: 0.8 }}
        d="M 55 188 C 55 240, 160 240, 160 280" 
        stroke="var(--color-foreground-fainter)" 
        strokeWidth="1.5" 
        fill="none" 
        strokeDasharray="4 4"
        markerEnd="url(#arrowHeadGrayMobile)"
      />
      
      <motion.path 
        initial={{ pathLength: 0, opacity: 0 }} 
        animate={{ pathLength: 1, opacity: 0.3 }} 
        transition={{ duration: 1, delay: 0.9 }}
        d="M 285 198 C 285 240, 180 240, 180 280" 
        stroke="var(--color-foreground-fainter)" 
        strokeWidth="1.5" 
        fill="none" 
        strokeDasharray="4 4"
        markerEnd="url(#arrowHeadGrayMobile)"
      />
    </svg>
  );
}

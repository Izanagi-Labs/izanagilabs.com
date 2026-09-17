import { motion } from "motion/react";

export function ConnectorLayer({ prefersReducedMotion = false }: { prefersReducedMotion?: boolean }) {
  const d = (delay: number) => prefersReducedMotion ? 0 : delay;
  const dDur = (duration: number) => prefersReducedMotion ? 0 : duration;

  const getPathVariants = (delay: number) => ({
    hidden: { pathLength: prefersReducedMotion ? 1 : 0, opacity: prefersReducedMotion ? 1 : 0 },
    visible: { 
      pathLength: 1, 
      opacity: 1,
      transition: { duration: dDur(0.6), delay: d(delay), ease: "easeInOut" as any }
    }
  });

  const getDotVariants = (delay: number) => ({
    hidden: { opacity: prefersReducedMotion ? 1 : 0 },
    visible: { 
      opacity: 1, 
      transition: { duration: dDur(0.3), delay: d(delay) }
    }
  });

  return (
    <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ zIndex: 0 }}>
      <defs>
        <marker id="arrowHeadRust" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
          <path d="M 0 0 L 10 5 L 0 10 z" fill="var(--color-accent)" />
        </marker>
        <marker id="arrowHeadGray" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
          <path d="M 0 0 L 10 5 L 0 10 z" fill="var(--color-foreground-fainter)" />
        </marker>
      </defs>

      {/* Left side messy inputs pointing to center */}
      <motion.path initial="hidden" animate="visible" variants={getPathVariants(0.55)} d="M 140 103 C 180 110, 190 190, 220 220" fill="none" stroke="var(--color-foreground-faint)" strokeWidth="1" strokeDasharray="4 2" />
      <motion.path initial="hidden" animate="visible" variants={getPathVariants(0.65)} d="M 130 163 C 170 170, 190 200, 220 220" fill="none" stroke="var(--color-foreground-faint)" strokeWidth="1" />
      <motion.path initial="hidden" animate="visible" variants={getPathVariants(0.50)} d="M 150 223 C 180 223, 190 220, 220 220" fill="none" stroke="var(--color-foreground-faint)" strokeWidth="1.5" />
      <motion.path initial="hidden" animate="visible" variants={getPathVariants(0.70)} d="M 140 283 C 180 280, 200 240, 220 220" fill="none" stroke="var(--color-foreground-faint)" strokeWidth="1" />
      <motion.path initial="hidden" animate="visible" variants={getPathVariants(0.60)} d="M 155 343 C 190 330, 190 240, 220 220" fill="none" stroke="var(--color-foreground-faint)" strokeWidth="1" />
      
      {/* Visual anchors for the lines */}
      <motion.rect initial="hidden" animate="visible" variants={getDotVariants(0.65)} x="175" y="145" width="3" height="3" fill="var(--color-foreground-faint)" />
      <motion.rect initial="hidden" animate="visible" variants={getDotVariants(0.50)} x="170" y="222" width="3" height="3" fill="var(--color-foreground-faint)" />
      <motion.rect initial="hidden" animate="visible" variants={getDotVariants(0.70)} x="175" y="270" width="3" height="3" fill="var(--color-surface-raised)" stroke="var(--color-foreground-faint)" strokeWidth="1" />

      {/* Right side organized workflow connectors */}
      <motion.path initial="hidden" animate="visible" variants={getPathVariants(1.05)} d="M 380 220 L 420 220" fill="none" stroke="var(--color-accent)" strokeWidth="1" markerEnd="url(#arrowHeadRust)" />
      <motion.path initial="hidden" animate="visible" variants={getPathVariants(1.15)} d="M 530 220 L 550 220" fill="none" stroke="var(--color-accent)" strokeWidth="1" markerEnd="url(#arrowHeadRust)" />
      <motion.path initial="hidden" animate="visible" variants={getPathVariants(1.25)} d="M 660 220 L 680 220" fill="none" stroke="var(--color-accent)" strokeWidth="1" markerEnd="url(#arrowHeadRust)" />
      <motion.path initial="hidden" animate="visible" variants={getPathVariants(1.35)} d="M 790 220 L 810 220" fill="none" stroke="var(--color-accent)" strokeWidth="1" markerEnd="url(#arrowHeadRust)" />
      
      {/* Downward insights branch */}
      <motion.path initial="hidden" animate="visible" variants={getPathVariants(1.45)} d="M 735 240 L 735 300 L 750 300" fill="none" stroke="var(--color-foreground-fainter)" strokeWidth="1" markerEnd="url(#arrowHeadGray)" />
    </svg>
  );
}

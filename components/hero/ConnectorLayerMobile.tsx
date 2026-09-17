export function ConnectorLayerMobile({ prefersReducedMotion = false }: { prefersReducedMotion?: boolean }) {
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

      {/* Empty for now as discussed in original code */}
    </svg>
  );
}

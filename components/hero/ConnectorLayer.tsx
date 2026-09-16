export function ConnectorLayer() {
  return (
    <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ zIndex: 0 }}>
      <defs>
        <marker id="arrowHeadRust" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
          <path d="M 0 0 L 10 5 L 0 10 z" fill="#C25934" />
        </marker>
        <marker id="arrowHeadGray" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
          <path d="M 0 0 L 10 5 L 0 10 z" fill="#AAAAAA" />
        </marker>
      </defs>

      {/* Messy Inputs -> Izanagi Node (Left side) */}
      <path d="M 140 103 C 180 110, 190 190, 220 220" fill="none" stroke="#888888" strokeWidth="1" strokeDasharray="4 2" />
      <path d="M 130 163 C 170 170, 190 200, 220 220" fill="none" stroke="#888888" strokeWidth="1" />
      <path d="M 150 223 C 180 223, 190 220, 220 220" fill="none" stroke="#888888" strokeWidth="1.5" />
      <path d="M 140 283 C 180 280, 200 240, 220 220" fill="none" stroke="#888888" strokeWidth="1" />
      <path d="M 155 343 C 190 330, 190 240, 220 220" fill="none" stroke="#888888" strokeWidth="1" />
      
      {/* Anchor dots on lines */}
      <rect x="175" y="145" width="3" height="3" fill="#888888" />
      <rect x="170" y="222" width="3" height="3" fill="#888888" />
      <rect x="175" y="270" width="3" height="3" fill="white" stroke="#888888" strokeWidth="1" />

      {/* Izanagi Node -> Organized Workflows (Right side) */}
      <path d="M 380 220 L 420 220" fill="none" stroke="#C25934" strokeWidth="1" markerEnd="url(#arrowHeadRust)" />
      <path d="M 530 220 L 550 220" fill="none" stroke="#C25934" strokeWidth="1" markerEnd="url(#arrowHeadRust)" />
      <path d="M 660 220 L 680 220" fill="none" stroke="#C25934" strokeWidth="1" markerEnd="url(#arrowHeadRust)" />
      <path d="M 790 220 L 810 220" fill="none" stroke="#C25934" strokeWidth="1" markerEnd="url(#arrowHeadRust)" />
      
      {/* Insights branch */}
      <path d="M 735 240 L 735 300 L 750 300" fill="none" stroke="#AAAAAA" strokeWidth="1" markerEnd="url(#arrowHeadGray)" />
    </svg>
  );
}

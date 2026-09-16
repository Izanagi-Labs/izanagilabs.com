import Image from "next/image";

interface IzanagiNodeProps {
  x: number;
  y: number;
}

export function IzanagiNode({ x, y, className = "" }: IzanagiNodeProps & { className?: string }) {
  return (
    <div 
      className={`lg:absolute lg:left-[var(--x)] lg:top-[var(--y)] bg-white border-2 border-brand-dark w-[160px] h-[80px] flex flex-col justify-center items-center z-20 shadow-[0_4px_24px_rgba(0,0,0,0.08)] ${className}`}
      style={{
        "--x": `${x}px`,
        "--y": `${y}px`,
      } as React.CSSProperties}
    >
      <div className="absolute left-[-2px] top-[-2px] bottom-[-2px] w-[5px] bg-brand-rust" />
      
      <div className="relative w-6 h-6 mb-2">
         <Image src="/logo.png" alt="Izanagi Labs" fill className="object-contain" />
      </div>
      <span className="font-sans text-[11px] font-bold tracking-[0.2em] uppercase text-brand-dark">
        Izanagi
      </span>
      
      {/* Visual Anchor points for lines */}
      <div className="absolute -left-1 top-1/2 -translate-y-1/2 w-1.5 h-1.5 bg-brand-dark rounded-full" />
      <div className="absolute -right-1 top-1/2 -translate-y-1/2 w-1.5 h-1.5 bg-brand-dark rounded-full" />
      <div className="absolute left-1/2 -bottom-1 -translate-x-1/2 w-1.5 h-1.5 bg-brand-dark rounded-full rotate-45 transform triangle-down" style={{ clipPath: "polygon(50% 100%, 0 0, 100% 0)", borderRadius: 0, height: 4, width: 6, bottom: -4, backgroundColor: '#1A1A1A' }} />
    </div>
  );
}

import React from 'react';

interface WorkflowNodeProps {
  label: string;
  icon: React.ReactNode;
  x: number;
  y: number;
  isActive?: boolean;
}

export function WorkflowNode({ label, icon, x, y, isActive = false, className = "" }: WorkflowNodeProps & { className?: string }) {
  const bgColor = isActive ? "bg-[#FFEDE8]" : "bg-white";
  const borderColor = isActive ? "border-brand-rust" : "border-[#DDDDDD]";
  const textColor = isActive ? "text-brand-rust" : "text-[#333333]";
  
  return (
    <div 
      className={`lg:absolute lg:left-[var(--x)] lg:top-[var(--y)] flex items-center gap-2.5 px-3 py-[9px] rounded border ${bgColor} ${borderColor} shadow-sm z-10 w-[110px] ${className}`}
      style={{
        "--x": `${x}px`,
        "--y": `${y}px`,
      } as React.CSSProperties}
    >
      <div className={`${textColor} flex-shrink-0 opacity-80`}>
        {icon}
      </div>
      <span className={`font-sans text-[13px] ${isActive ? 'font-medium' : 'font-regular'} ${textColor}`}>
        {label}
      </span>
      
      <div className={`absolute -left-1.5 top-1/2 -translate-y-1/2 w-2 h-2 ${isActive ? 'bg-brand-rust border-brand-rust' : 'bg-white border-[#DDDDDD]'} border rounded-full`} />
      {!isActive && <div className="absolute -right-1.5 top-1/2 -translate-y-1/2 w-2 h-2 bg-white border border-[#DDDDDD] rounded-full" />}
      {isActive && <div className="absolute -right-1.5 top-1/2 -translate-y-1/2 w-2 h-2 bg-brand-rust border border-brand-rust rounded-full" />}
    </div>
  );
}

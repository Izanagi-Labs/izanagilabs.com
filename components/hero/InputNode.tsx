import React from 'react';

interface InputNodeProps {
  label: string;
  icon: React.ReactNode;
  rotation?: number;
  x: number;
  y: number;
  accentColor?: string;
  shadowRotation?: number;
}

export function InputNode({ label, icon, rotation = 0, x, y, accentColor, shadowRotation = 0, className = "" }: InputNodeProps & { className?: string }) {
  return (
    <div 
      className={`lg:absolute lg:left-[var(--x)] lg:top-[var(--y)] flex items-center gap-3 bg-[#FCFCFC] px-4 py-3 rounded border border-[#EAEAEA] shadow-[0_4px_12px_rgba(0,0,0,0.05)] z-10 w-[140px] ${className}`}
      style={{
        "--x": `${x}px`,
        "--y": `${y}px`,
        transform: `rotate(${rotation}deg)`,
      } as React.CSSProperties}
    >
      <div 
        className="absolute inset-0 bg-[#F5F5F5] border border-[#E0E0E0] rounded -z-10"
        style={{
          transform: `rotate(${shadowRotation - rotation}deg) translate(2px, 2px)`,
        }}
      />
      
      <div className="text-[#333333] flex-shrink-0">
        {icon}
      </div>
      <span className="font-sans text-sm font-medium text-[#333333] flex-grow">
        {label}
      </span>
      {accentColor && (
        <div 
          className="w-[6px] h-[6px] rounded-full flex-shrink-0" 
          style={{ backgroundColor: accentColor }}
        />
      )}
    </div>
  );
}

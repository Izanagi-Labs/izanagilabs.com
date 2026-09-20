export function MicroLabels() {
  return (
    <div className="hidden lg:block absolute inset-0 pointer-events-none">
      {/* Top Left - Messy Inputs */}
      <div className="absolute top-[40px] left-[0px] flex flex-col gap-1">
        <span className="text-system-xs text-foreground-fainter">Messy Inputs</span>
        <span className="text-system-xs text-foreground-fainter">Real Problems</span>
        <div className="w-4 h-[1px] bg-border mt-1" />
      </div>

      {/* Top Right - Organized Workflows */}
      <div className="absolute top-[120px] right-[40px] flex flex-col gap-1 text-right items-start">
        <span className="text-system-xs text-foreground-fainter">Organized Workflows</span>
        <span className="text-system-xs text-foreground-fainter">Real Outcomes</span>
        <div className="w-4 h-[1px] bg-border mt-1" />
      </div>

      {/* Center Top - Integration Logic */}
      <div className="absolute top-[85px] left-[260px] flex flex-col gap-1 text-left">
        <span className="text-system-2xs text-foreground-fainter">Integration</span>
        <span className="text-system-2xs text-foreground-fainter">Logic</span>
        <span className="text-system-2xs text-foreground-fainter">Automation</span>
        <span className="text-system-2xs text-foreground-fainter">Custom Fit</span>
      </div>

      {/* Center Bottom - Turning Complexity */}
      <div className="absolute top-[300px] left-[240px] flex flex-col gap-1 text-center w-[120px]">
        <span className="text-system-2xs text-foreground-fainter">Turning Complexity</span>
        <span className="text-system-2xs text-foreground-fainter">Into Clarity</span>
        <div className="w-4 h-[1px] bg-border mt-1 mx-auto" />
      </div>

      {/* Bottom Right - Less Manual Work */}
      <div className="absolute top-[390px] right-[40px] flex flex-col gap-1 text-left">
        <span className="text-system-xs text-foreground-fainter">Less Manual Work</span>
        <span className="text-system-xs text-foreground-fainter">More Progress</span>
        <div className="w-4 h-[1px] bg-border mt-1" />
      </div>

      {/* Bottom Left - Handwritten notes */}
      <div className="absolute top-[380px] left-[20px] flex flex-col -rotate-6 text-foreground-muted font-annotation text-[22px] leading-tight">
        <span className="block">Spreadsheets...</span>
        <span className="block">Different tools...</span>
        <span className="block">Manual work...</span>
        <span className="block">Siloed data...</span>
      </div>
    </div>
  );
}

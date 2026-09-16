export function MicroLabels() {
  return (
    <div className="hidden lg:block absolute inset-0 pointer-events-none">
      {/* Top Left - Messy Inputs */}
      <div className="absolute top-[40px] left-[0px] flex flex-col gap-1">
        <span className="font-sans text-[9px] font-bold uppercase tracking-[0.2em] text-[#999999]">Messy Inputs</span>
        <span className="font-sans text-[9px] font-bold uppercase tracking-[0.2em] text-[#999999]">Real Problems</span>
        <div className="w-4 h-[1px] bg-[#CCCCCC] mt-1" />
      </div>

      {/* Top Right - Organized Workflows */}
      <div className="absolute top-[120px] right-[40px] flex flex-col gap-1 text-right items-start">
        <span className="font-sans text-[9px] font-bold uppercase tracking-[0.2em] text-[#999999]">Organized Workflows</span>
        <span className="font-sans text-[9px] font-bold uppercase tracking-[0.2em] text-[#999999]">Real Outcomes</span>
        <div className="w-4 h-[1px] bg-[#CCCCCC] mt-1" />
      </div>

      {/* Center Top - Integration Logic */}
      <div className="absolute top-[85px] left-[260px] flex flex-col gap-1 text-left">
        <span className="font-sans text-[8px] font-bold uppercase tracking-[0.2em] text-[#A0A0A0]">Integration</span>
        <span className="font-sans text-[8px] font-bold uppercase tracking-[0.2em] text-[#A0A0A0]">Logic</span>
        <span className="font-sans text-[8px] font-bold uppercase tracking-[0.2em] text-[#A0A0A0]">Automation</span>
        <span className="font-sans text-[8px] font-bold uppercase tracking-[0.2em] text-[#A0A0A0]">Custom Fit</span>
      </div>

      {/* Center Bottom - Turning Complexity */}
      <div className="absolute top-[300px] left-[240px] flex flex-col gap-1 text-center w-[120px]">
        <span className="font-sans text-[8px] font-bold uppercase tracking-[0.2em] text-[#A0A0A0]">Turning Complexity</span>
        <span className="font-sans text-[8px] font-bold uppercase tracking-[0.2em] text-[#A0A0A0]">Into Clarity</span>
        <div className="w-4 h-[1px] bg-[#CCCCCC] mt-1 mx-auto" />
      </div>

      {/* Bottom Right - Less Manual Work */}
      <div className="absolute top-[390px] right-[40px] flex flex-col gap-1 text-left">
        <span className="font-sans text-[9px] font-bold uppercase tracking-[0.2em] text-[#999999]">Less Manual Work</span>
        <span className="font-sans text-[9px] font-bold uppercase tracking-[0.2em] text-[#999999]">More Progress</span>
        <div className="w-4 h-[1px] bg-[#CCCCCC] mt-1" />
      </div>

      {/* Bottom Left - Handwritten notes */}
      <div className="absolute top-[380px] left-[20px] flex flex-col gap-2 -rotate-6 text-[#A0A0A0] font-script text-[18px]">
        <span>Spreadsheets...</span>
        <span>Different tools...</span>
        <span>Manual work...</span>
        <span>Siloed data...</span>
      </div>
    </div>
  );
}

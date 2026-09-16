import { Table, Mail, FileText, Code, Settings, CheckSquare, Play, BarChart2, ArrowDown } from "lucide-react";
import { InputNode } from "./InputNode";
import { IzanagiNode } from "./IzanagiNode";
import { WorkflowNode } from "./WorkflowNode";
import { MicroLabels } from "./MicroLabels";
import { ConnectorLayer } from "./ConnectorLayer";
import { ConnectorLayerMobile } from "./ConnectorLayerMobile";

export function SystemFlow() {
  return (
    <div className="relative flex flex-col items-center gap-6 lg:block w-full max-w-[340px] lg:max-w-none lg:w-[880px] lg:h-[500px] flex-shrink-0 mx-auto">
      <MicroLabels />
      <div className="hidden lg:block"><ConnectorLayer /></div>
      <ConnectorLayerMobile />
      
      {/* Mobile Messy Inputs Wrapper */}
      <div className="relative w-full h-[220px] lg:contents">
        <div className="absolute -top-4 left-0 lg:hidden flex flex-col gap-1">
          <span className="font-sans text-[9px] font-bold uppercase tracking-[0.2em] text-[#999999]">Messy Inputs</span>
          <div className="w-4 h-[1px] bg-[#CCCCCC]" />
        </div>
        
        <InputNode label="Sheets" icon={<Table size={15} />} x={0} y={80} rotation={-2} shadowRotation={3} className="absolute left-0 top-2" />
        <InputNode label="Email" icon={<Mail size={15} />} x={-10} y={140} rotation={1} shadowRotation={-2} accentColor="#C25934" className="absolute right-0 top-[30px]" />
        <InputNode label="Forms" icon={<FileText size={15} />} x={10} y={200} rotation={-1} shadowRotation={1} className="absolute left-[50%] -translate-x-1/2 top-[90px] lg:translate-x-0 z-10" />
        <InputNode label="API" icon={<Code size={15} />} x={0} y={260} rotation={3} shadowRotation={-3} accentColor="#A0A0A0" className="absolute left-0 top-[150px]" />
        <InputNode label="Manual" icon={<FileText size={15} />} x={15} y={320} rotation={-4} shadowRotation={2} className="absolute right-0 top-[160px]" />
      </div>

      {/* Down Arrow Mobile */}
      <div className="lg:hidden text-[#888888] flex flex-col items-center my-2">
         <ArrowDown size={20} strokeWidth={1} />
      </div>

      {/* Processing Node */}
      <div className="lg:contents z-20 relative">
        <IzanagiNode x={220} y={180} className="relative lg:absolute mx-auto" />
      </div>

      {/* Down Arrow Mobile */}
      <div className="lg:hidden text-[#C25934] flex flex-col items-center my-2">
         <ArrowDown size={20} strokeWidth={1.5} />
      </div>

      {/* Mobile Workflow Wrapper */}
      <div className="grid grid-cols-2 gap-y-8 gap-x-8 lg:contents relative mt-4 lg:mt-0">
        <div className="absolute -top-10 left-1/2 -translate-x-1/2 lg:hidden flex flex-col items-center gap-1">
          <span className="font-sans text-[9px] font-bold uppercase tracking-[0.2em] text-[#999999]">Organized Workflows</span>
          <div className="w-4 h-[1px] bg-[#CCCCCC]" />
        </div>
        
        <WorkflowNode label="Capture" icon={<FileText size={15} />} x={420} y={200} className="relative place-self-end lg:place-self-auto" />
        
        {/* Right Arrow Mobile */}
        <div className="absolute top-[32px] left-1/2 -translate-x-1/2 -translate-y-1/2 lg:hidden text-[#C25934]">
          →
        </div>

        <WorkflowNode label="Automate" icon={<Settings size={15} />} x={550} y={200} className="relative place-self-start lg:place-self-auto" />
        
        {/* Down Arrow Mobile (row to row) */}
        <div className="absolute top-[70px] left-1/2 -translate-x-1/2 lg:hidden text-[#C25934]">
          <ArrowDown size={16} strokeWidth={1.5} />
        </div>

        <WorkflowNode label="Review" icon={<CheckSquare size={15} />} x={680} y={200} className="relative place-self-end lg:place-self-auto" />
        
        {/* Right Arrow Mobile */}
        <div className="absolute top-[120px] left-1/2 -translate-x-1/2 -translate-y-1/2 lg:hidden text-[#C25934]">
          →
        </div>

        <WorkflowNode label="Action" icon={<Play size={15} fill="currentColor" />} x={810} y={200} isActive className="relative place-self-start lg:place-self-auto" />
      </div>
      
      {/* Down Arrow Mobile (insights branch) */}
      <div className="lg:hidden text-[#AAAAAA] flex flex-col items-center mt-2">
         <ArrowDown size={16} strokeWidth={1.5} />
      </div>

      <div className="lg:contents">
        <WorkflowNode label="Insights" icon={<BarChart2 size={15} />} x={750} y={280} className="relative mx-auto lg:mx-0" />
      </div>
    </div>
  );
}

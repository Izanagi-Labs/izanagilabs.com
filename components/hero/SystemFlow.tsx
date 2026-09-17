"use client";

import { Table, Mail, FileText, Code, Settings, CheckSquare, Play, BarChart2, ArrowDown } from "lucide-react";
import { InputNode } from "./InputNode";
import { IzanagiNode } from "./IzanagiNode";
import { WorkflowNode } from "./WorkflowNode";
import { MicroLabels } from "./MicroLabels";
import { ConnectorLayer } from "./ConnectorLayer";
import { ConnectorLayerMobile } from "./ConnectorLayerMobile";
import { motion } from "motion/react";
import { useEffect, useState } from "react";

export function SystemFlow() {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    setPrefersReducedMotion(mediaQuery.matches);
    
    const handler = (e: MediaQueryListEvent) => setPrefersReducedMotion(e.matches);
    mediaQuery.addEventListener("change", handler);
    return () => mediaQuery.removeEventListener("change", handler);
  }, []);

  // Helper for conditional delays
  const d = (delay: number) => prefersReducedMotion ? 0 : delay;
  const dDur = (duration: number) => prefersReducedMotion ? 0 : duration;

  // Reduced motion helpers
  const initialMessy = prefersReducedMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: -8 };
  const animateMessy = { opacity: 1, y: 0 };
  
  const initialOrganized = prefersReducedMotion ? { opacity: 1, x: 0 } : { opacity: 0, x: -6 };
  const animateOrganized = { opacity: 1, x: 0 };

  return (
    <div className="relative flex flex-col items-center gap-6 lg:block w-full max-w-[340px] lg:max-w-none lg:w-[880px] lg:h-[500px] flex-shrink-0 mx-auto group">
      <MicroLabels />
      <div className="hidden lg:block">
        <ConnectorLayer prefersReducedMotion={prefersReducedMotion} />
      </div>
      <ConnectorLayerMobile prefersReducedMotion={prefersReducedMotion} />
      
      {/* Mobile Messy Inputs Wrapper */}
      <div className="relative w-full h-[220px] lg:contents">
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: dDur(0.3), delay: d(0.35) }}
          className="absolute -top-4 left-0 lg:hidden flex flex-col gap-1"
        >
          <span className="text-system-xs text-foreground-fainter">Messy Inputs</span>
          <div className="w-4 h-[1px] bg-border" />
        </motion.div>
        
        <InputNode label="Sheets" icon={<Table size={15} />} x={0} y={80} rotation={-2} shadowRotation={3} className="absolute left-0 top-2" initial={initialMessy} animate={animateMessy} transition={{ duration: dDur(0.4), delay: d(0.35) }} />
        <InputNode label="Email" icon={<Mail size={15} />} x={-10} y={140} rotation={1} shadowRotation={-2} accentColor="#C25934" className="absolute right-0 top-[30px]" initial={initialMessy} animate={animateMessy} transition={{ duration: dDur(0.4), delay: d(0.42) }} />
        <InputNode label="Forms" icon={<FileText size={15} />} x={10} y={200} rotation={-1} shadowRotation={1} className="absolute left-[50%] -translate-x-1/2 top-[90px] lg:translate-x-0 z-10" initial={initialMessy} animate={animateMessy} transition={{ duration: dDur(0.4), delay: d(0.48) }} />
        <InputNode label="API" icon={<Code size={15} />} x={0} y={260} rotation={3} shadowRotation={-3} accentColor="#A0A0A0" className="absolute left-0 top-[150px]" initial={initialMessy} animate={animateMessy} transition={{ duration: dDur(0.4), delay: d(0.38) }} />
        <InputNode label="Manual" icon={<FileText size={15} />} x={15} y={320} rotation={-4} shadowRotation={2} className="absolute right-0 top-[160px]" initial={initialMessy} animate={animateMessy} transition={{ duration: dDur(0.4), delay: d(0.45) }} />
      </div>

      {/* Down Arrow Mobile */}
      <motion.div 
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: dDur(0.3), delay: d(0.6) }}
        className="lg:hidden text-foreground-faint flex flex-col items-center my-2"
      >
         <ArrowDown size={20} strokeWidth={1} />
      </motion.div>

      {/* Processing Node */}
      <div className="lg:contents z-20 relative">
        <IzanagiNode 
          x={220} y={180} 
          className="relative lg:absolute mx-auto" 
          initial={prefersReducedMotion ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: dDur(0.3), delay: d(0.8) }}
        />
      </div>

      {/* Down Arrow Mobile */}
      <motion.div 
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: dDur(0.3), delay: d(1.0) }}
        className="lg:hidden text-accent flex flex-col items-center my-2"
      >
         <ArrowDown size={20} strokeWidth={1.5} />
      </motion.div>

      {/* Mobile Workflow Wrapper */}
      <div className="grid grid-cols-2 gap-y-8 gap-x-8 lg:contents relative mt-4 lg:mt-0">
        <motion.div 
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: dDur(0.3), delay: d(1.1) }}
          className="absolute -top-10 left-1/2 -translate-x-1/2 lg:hidden flex flex-col items-center gap-1"
        >
          <span className="text-system-xs text-foreground-fainter">Organized Workflows</span>
          <div className="w-4 h-[1px] bg-border" />
        </motion.div>
        
        <WorkflowNode label="Capture" icon={<FileText size={15} />} x={420} y={200} className="relative place-self-end lg:place-self-auto" initial={initialOrganized} animate={animateOrganized} transition={{ duration: dDur(0.4), delay: d(1.1) }} />
        
        {/* Right Arrow Mobile */}
        <motion.div 
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: dDur(0.3), delay: d(1.15) }}
          className="absolute top-[32px] left-1/2 -translate-x-1/2 -translate-y-1/2 lg:hidden text-accent"
        >
          →
        </motion.div>

        <WorkflowNode label="Automate" icon={<Settings size={15} />} x={550} y={200} className="relative place-self-start lg:place-self-auto" initial={initialOrganized} animate={animateOrganized} transition={{ duration: dDur(0.4), delay: d(1.2) }} />
        
        {/* Down Arrow Mobile (row to row) */}
        <motion.div 
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: dDur(0.3), delay: d(1.25) }}
          className="absolute top-[70px] left-1/2 -translate-x-1/2 lg:hidden text-accent"
        >
          <ArrowDown size={16} strokeWidth={1.5} />
        </motion.div>

        <WorkflowNode label="Review" icon={<CheckSquare size={15} />} x={680} y={200} className="relative place-self-end lg:place-self-auto" initial={initialOrganized} animate={animateOrganized} transition={{ duration: dDur(0.4), delay: d(1.3) }} />
        
        {/* Right Arrow Mobile */}
        <motion.div 
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: dDur(0.3), delay: d(1.35) }}
          className="absolute top-[120px] left-1/2 -translate-x-1/2 -translate-y-1/2 lg:hidden text-accent"
        >
          →
        </motion.div>

        <WorkflowNode label="Action" icon={<Play size={15} fill="currentColor" />} x={810} y={200} isActive className="relative place-self-start lg:place-self-auto" initial={initialOrganized} animate={animateOrganized} transition={{ duration: dDur(0.4), delay: d(1.4) }} />
      </div>
      
      {/* Down Arrow Mobile (insights branch) */}
      <motion.div 
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: dDur(0.3), delay: d(1.45) }}
        className="lg:hidden text-foreground-fainter flex flex-col items-center mt-2"
      >
         <ArrowDown size={16} strokeWidth={1.5} />
      </motion.div>

      <div className="lg:contents">
        <WorkflowNode label="Insights" icon={<BarChart2 size={15} />} x={750} y={280} className="relative mx-auto lg:mx-0" initial={initialOrganized} animate={animateOrganized} transition={{ duration: dDur(0.4), delay: d(1.5) }} />
      </div>
    </div>
  );
}

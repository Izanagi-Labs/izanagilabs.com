import { ArrowRight } from "lucide-react";
import Link from "next/link";

export function HeroCopy() {
  return (
    <section className="flex flex-col justify-center max-w-[600px] lg:max-w-[500px] w-full pt-8 lg:pt-16 h-full">
      <p className="font-sans text-[11px] lg:text-[13px] tracking-[0.2em] uppercase text-[#808080] mb-6 lg:mb-8">
        Custom solutions, clear systems
      </p>
      <h1 className="font-serif text-5xl md:text-6xl lg:text-[72px] leading-[1.05] text-[#111111] mb-6">
        We build custom solutions for your problems.
      </h1>
      <p className="font-sans text-lg lg:text-[22px] text-[#4A4A4A] tracking-wider mb-8 lg:mb-12">
        Web &middot; Mobile &middot; Software &middot; AI
      </p>
      
      <div>
        <Link href="#" className="inline-flex items-center justify-center gap-4 bg-brand-rust text-white px-8 py-4 lg:py-[18px] font-sans text-base lg:text-[17px] hover:bg-opacity-90 transition-opacity">
          Tell us your problem <ArrowRight size={20} strokeWidth={2} />
        </Link>
      </div>
      
      <div className="mt-12 lg:mt-auto lg:pt-24 pb-8 flex flex-col gap-1">
        <div className="flex gap-4">
           <div className="w-8 h-[1px] bg-[#CCCCCC] mt-2" />
           <div>
             <p className="font-sans text-[10px] tracking-[0.2em] uppercase text-[#999999]">
               Ideas to systems.
             </p>
             <p className="font-sans text-[10px] tracking-[0.2em] uppercase text-[#999999]">
               Built to last.
             </p>
           </div>
        </div>
      </div>
    </section>
  );
}

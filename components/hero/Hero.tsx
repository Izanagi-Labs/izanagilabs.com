import { HeroHeader } from "./HeroHeader";
import { HeroValueProposition } from "./HeroValueProposition";
import { SystemFlow } from "./SystemFlow";

export function Hero() {
  return (
    <div className="min-h-screen bg-brand-cream flex flex-col overflow-x-hidden text-brand-dark">
      <HeroHeader />
      
      <main className="flex-grow flex flex-col lg:flex-row items-center lg:items-center justify-between px-[6vw] lg:px-[4vw] max-w-[1600px] mx-auto w-full pt-10 pb-20 lg:py-0 gap-16 lg:gap-0">
        {/* Left Column: Copy */}
        <div className="w-full lg:w-[45%] lg:h-[600px] flex-shrink-0 z-10">
          <HeroValueProposition />
        </div>
        
        {/* Right Column: Visual System */}
        <div className="w-full lg:w-[55%] flex justify-center lg:justify-end">
          <SystemFlow />
        </div>
      </main>
    </div>
  );
}

import { WebsitePreview } from "./WebsitePreview"
import { DiscoveryPlatforms } from "./DiscoveryPlatforms"
import { ConnectorLayer } from "./ConnectorLayer"

export function DiscoveryVisual() {
  return (
    <div className="relative w-full flex flex-col items-center ml-0 lg:-ml-6 xl:-ml-12 pt-16 sm:pt-20">
       
       {/* Top Left Annotation: From a website to real opportunities... */}
       <div className="hidden lg:flex absolute top-0 -left-10 transform -rotate-2 z-20 flex-col items-start">
         <span className="font-annotation text-foreground-muted text-[22px] leading-tight block">From a website<br/>to real opportunities...</span>
         <svg width="40" height="40" viewBox="0 0 40 40" fill="none" className="text-foreground-fainter opacity-60 self-end mr-4 mt-1">
           <path d="M 8 8 Q 20 12 30 25 M 24 25 L 30 25 L 30 19" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
         </svg>
       </div>

       {/* Top Right Annotation: Optimized for people, search engines and AI. */}
       <div className="hidden lg:flex absolute -top-9 -right-12 xl:-right-0 transform rotate-3 z-20 flex-col items-end">
         <span className="font-annotation text-foreground-muted text-[22px] leading-tight block text-right">Optimized for people,<br/>search engines and AI.</span>
         <svg width="40" height="40" viewBox="0 0 40 40" fill="none" className="text-foreground-fainter opacity-60 self-center mr-8 mt-2">
           <path d="M 32 10 Q 20 12 10 25 M 10 18 L 10 25 L 17 25" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
         </svg>
       </div>

       {/* Flow: Website -> Connectors -> Platforms */}
       {/* Website visual is sized to about 85% of the container */}
       <div className="w-[95%] sm:w-[90%] lg:w-[85%] relative z-10 mx-auto">
          <WebsitePreview />
       </div>

       {/* Connectors (Directly below website) */}
       <div className="w-full max-w-[600px] h-[100px] lg:h-[130px] relative z-0 -mt-6 pointer-events-none mx-auto">
          <ConnectorLayer />
       </div>

       {/* Bottom: Platforms */}
       <div className="w-full max-w-[620px] relative z-10 px-2 mt-4 mx-auto">
          <DiscoveryPlatforms />
       </div>

       {/* Annotation: ...make the web understand you. */}
       <div className="hidden lg:flex relative mt-8 left-13 -translate-x-1/2 transform -rotate-2 z-20 flex-col items-center">
         <span className="font-annotation text-foreground-muted text-[22px] leading-tight block">...make the web<br/>understand you.</span>
       </div>

    </div>
  )
}

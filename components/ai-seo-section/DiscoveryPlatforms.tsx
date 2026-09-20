export function DiscoveryPlatforms() {
  const platforms = [
    { 
      name: "Google", 
      desc: "Search results that drive traffic.",
    },
    { 
      name: "Bing", 
      desc: "Wider visibility across search.",
    },
    { 
      name: "ChatGPT", 
      desc: "Be included in AI-generated answers.",
    },
    { 
      name: "Gemini", 
      desc: "Show up in AI discovery.",
    },
    { 
      name: "Perplexity", 
      desc: "Reach new audiences.",
    }
  ]

  return (
    <div className="w-full flex justify-between items-start gap-2 sm:gap-4">
      {platforms.map((p, i) => (
        <div key={i} className="flex flex-col items-center text-center w-[19%]">
          <span className="text-[11px] font-bold text-foreground tracking-wide leading-tight">{p.name}</span>
          <span className="hidden sm:block text-[9px] text-foreground-muted mt-0.5 leading-snug">{p.desc}</span>
        </div>
      ))}
    </div>
  )
}

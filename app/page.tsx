import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-[#0a0a0a] text-white p-6 relative overflow-hidden">
      {/* Background gradients */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-indigo-900/20 via-[#0a0a0a] to-[#0a0a0a] pointer-events-none" />
      
      <div className="z-10 flex flex-col items-center text-center space-y-8 max-w-2xl">
        <div className="mb-4">
          <Image
            src="/logo.png"
            alt="Izanagi Labs Logo"
            width={100}
            height={100}
            className="object-contain drop-shadow-[0_0_15px_rgba(255,255,255,0.1)]"
            priority
          />
        </div>

        
        <h1 className="text-6xl md:text-2xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-b from-white via-white/80 to-white/20 pb-2">
          Coming Soon
        </h1>
        
      </div>
    </main>
  );
}

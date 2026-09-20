import Image from "next/image";
import { MobileSidebar } from "./MobileSidebar";

export function HeroHeader() {
  return (
    <header className="flex justify-between items-center w-full px-[4vw] py-8 border-b border-black/10">
      <div className="flex items-center gap-4">
        <div className="relative w-8 h-8">
          <Image src="/logo.png" alt="Izanagi Labs" fill sizes="32px" className="object-contain" />
        </div>
        <span className="text-body-md font-bold tracking-[0.2em] lg:tracking-[0.25em] uppercase text-foreground">
          Izanagi Labs
        </span>
      </div>
      <nav className="hidden md:flex items-center gap-10">
        <a href="#process" className="text-body-md text-foreground hover:text-accent transition-colors">Process</a>
        <a href="#capabilities" className="text-body-md text-foreground hover:text-accent transition-colors">Capabilities</a>
        <a href="#contact" className="text-body-md text-foreground hover:text-accent transition-colors">Contact</a>
      </nav>
      <MobileSidebar />
    </header>
  );
}

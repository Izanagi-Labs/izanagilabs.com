import Image from "next/image";
import Link from "next/link";

export function HeroHeader() {
  return (
    <header className="flex justify-between items-center w-full px-[4vw] py-8 border-b border-black/10">
      <div className="flex items-center gap-4">
        <div className="relative w-8 h-8">
          <Image src="/logo.png" alt="Izanagi Labs" fill className="object-contain" />
        </div>
        <span className="font-sans font-bold text-base tracking-[0.15em] uppercase text-brand-dark">
          Izanagi Labs
        </span>
      </div>
      <nav className="flex items-center gap-10">
        <Link href="#" className="font-sans text-[15px] text-brand-dark hover:text-brand-rust transition-colors">Work</Link>
        <Link href="#" className="font-sans text-[15px] text-brand-dark hover:text-brand-rust transition-colors">Capabilities</Link>
        <Link href="#" className="font-sans text-[15px] text-brand-dark hover:text-brand-rust transition-colors">Contact</Link>
      </nav>
    </header>
  );
}

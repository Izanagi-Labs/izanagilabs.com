"use client";

import Image from "next/image";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-[#171714] text-[#F4F5F0] pt-12 pb-6 px-[6vw] lg:px-[4vw] overflow-hidden">
      <div className="max-w-[1600px] mx-auto w-full">
        {/* Top: Logo */}
        <div className="mb-12 lg:mb-16">
          <div className="flex flex-row items-center gap-4">
            <div className="relative w-8 h-8 ">
              <Image 
                src="/logo.png" 
                alt="Izanagi Labs" 
                fill 
                className="object-contain" 
              />
            </div>
            <span className="text-[10px] font-bold tracking-[0.25em] uppercase text-[#F4F5F0]/90">
              IZANAGI LABS
            </span>
          </div>
        </div>

        {/* Middle content */}
        <div className="flex flex-col lg:flex-row justify-between gap-12 lg:gap-8 mb-12 lg:mb-16">
          {/* Left / Editorial */}
          <div className="w-full lg:w-[65%]">
            <h2 className="font-serif text-[36px] leading-[1.1] sm:text-[48px] lg:text-[56px] xl:text-[64px] mb-4 max-w-[800px]">
              Ideas deserve more<br className="hidden sm:block" /> than just execution.
            </h2>
            <p className="text-base lg:text-lg text-[#F4F5F0]/70 max-w-[540px] leading-relaxed mb-10 sm:mb-12 lg:mb-16">
              We design and build digital products, systems and<br className="hidden sm:block" /> growth engines for businesses ready to move forward.
            </p>

            <div className="relative inline-block">
              <span className="text-[10px] tracking-[0.2em] uppercase text-[#F4F5F0]/50 block mb-3">
                HAVE SOMETHING IN MIND?
              </span>
              <a 
                href="mailto:hello@izanagilabs.com"
                className="flex items-center group w-fit"
              >
                <span className="font-serif text-[24px] sm:text-[32px] lg:text-[36px] mr-4 sm:mr-6">
                  hello@izanagilabs.com
                </span>
                <span className="text-[#C25934] text-xl sm:text-2xl font-light transition-transform group-hover:translate-x-2">
                  →
                </span>
              </a>
              <div className="w-full h-[1px] bg-[#C25934] mt-2"></div>

              {/* Annotation */}
              <div className="hidden lg:flex absolute top-3 -right-[220px] xl:-right-[240px] items-start gap-3 text-[#F4F5F0]/60 transform -rotate-3" aria-hidden="true">
                <svg width="40" height="24" viewBox="0 0 50 30" fill="none" className="mt-1">
                  <path d="M 45 5 Q 25 10 5 25 M 5 15 L 5 25 L 15 25" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
                </svg>
                <span className="font-annotation text-[18px]">Start with an idea...</span>
              </div>
            </div>
          </div>

          {/* Right / Navigation */}
          <div className="w-full lg:w-[30%] flex gap-12 sm:gap-24 lg:justify-end mt-6 lg:mt-2">
            <div className="flex flex-col gap-4 w-[120px]">
              <div className="pb-2 border-b border-[#F4F5F0]/10">
                <span className="text-[10px] tracking-[0.2em] uppercase text-[#F4F5F0]/70">NAVIGATE</span>
              </div>
              <nav className="flex flex-col gap-3">
                <a 
                  href="#" 
                  onClick={(e) => {
                    e.preventDefault();
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="text-[15px] text-[#F4F5F0]/90 hover:text-[#F4F5F0] transition-colors"
                >
                  Home
                </a>
                <a 
                  href="#dashboard" 
                  onClick={(e) => {
                    e.preventDefault();
                    document.getElementById('dashboard')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="text-[15px] text-[#F4F5F0]/90 hover:text-[#F4F5F0] transition-colors"
                >
                  Services
                </a>
                <a 
                  href="#contact" 
                  onClick={(e) => {
                    e.preventDefault();
                    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="text-[15px] text-[#F4F5F0]/90 hover:text-[#F4F5F0] transition-colors"
                >
                  Contact
                </a>
              </nav>
            </div>

            <div className="flex flex-col gap-4 w-[120px]">
              <div className="pb-2 border-b border-[#F4F5F0]/10">
                <span className="text-[10px] tracking-[0.2em] uppercase text-[#F4F5F0]/70">CONNECT</span>
              </div>
              <nav className="flex flex-col gap-3">
                <a href="https://www.linkedin.com/company/izanagi-labs" className="text-[15px] text-[#F4F5F0]/90 hover:text-[#F4F5F0] transition-colors">LinkedIn</a>
                <a href="https://www.instagram.com/izanagilabs" className="text-[15px] text-[#F4F5F0]/90 hover:text-[#F4F5F0] transition-colors">Instagram</a>
              </nav>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="w-full h-[1px] bg-[#F4F5F0]/10 mb-6"></div>

        {/* Bottom / Legal */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <div className="flex flex-col gap-2 text-[10px] tracking-[0.15em] uppercase text-[#F4F5F0]/50">
            <p>© {new Date().getFullYear()} IZANAGI LABS</p>
          </div>
          
          <div className="flex gap-6 sm:gap-8 text-[10px] tracking-[0.15em] uppercase text-[#F4F5F0]/50">
            <Link href="/privacy" className="hover:text-[#F4F5F0] transition-colors">PRIVACY</Link>
            <Link href="/terms" className="hover:text-[#F4F5F0] transition-colors">TERMS</Link>
            <span className="flex items-center gap-1">INDIA ↗</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

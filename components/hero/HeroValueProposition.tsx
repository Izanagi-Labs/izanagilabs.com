"use client";

import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { motion } from "motion/react";

export function HeroValueProposition() {
  return (
    <section className="flex flex-col justify-center max-w-[600px] lg:max-w-[500px] w-full pt-8 lg:pt-16 h-full">
      <motion.p 
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.1 }}
        className="text-system-sm text-[#707070] mb-6 lg:mb-8"
      >
        Custom solutions, clear systems
      </motion.p>
      
      <motion.h1 
        initial={{ y: 8 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.4, delay: 0.15 }}
        className="text-display-xl text-foreground mb-6"
      >
        We build custom <span className="italic">solutions for your problems.</span>
      </motion.h1>
      
      <motion.p 
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.25 }}
        className="text-system-lg text-foreground-muted mb-8 lg:mb-12"
      >
        Web &middot; Mobile &middot; Software &middot; AI
      </motion.p>
      
      <motion.div
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.3 }}
      >
        <Link 
          href="#contact" 
          onClick={(e) => {
            const target = document.querySelector('#contact');
            if (target) {
              e.preventDefault();
              target.scrollIntoView({ behavior: 'smooth' });
            }
          }}
          className="group inline-flex items-center justify-center gap-4 bg-accent text-white px-8 py-4 lg:py-[18px] text-body-lg hover:bg-accent-hover transition-colors duration-200"
        >
          Tell us your problem 
          <ArrowRight 
            size={20} 
            strokeWidth={2} 
            className="transition-transform duration-200 group-hover:translate-x-1"
          />
        </Link>
      </motion.div>
      
    </section>
  );
}

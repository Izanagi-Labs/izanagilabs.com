"use client"

import { useState } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

export function MobileSidebar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button 
        className="md:hidden p-2 text-foreground z-50 relative"
        onClick={() => setIsOpen(true)}
        aria-label="Open Menu"
      >
        <Menu size={24} />
      </button>

      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-black/20 z-40 md:hidden backdrop-blur-sm"
            />
            
            {/* Sidebar */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 bottom-0 w-[280px] bg-background border-l border-border z-50 md:hidden shadow-2xl flex flex-col"
            >
              <div className="flex justify-end p-6">
                <button 
                  onClick={() => setIsOpen(false)} 
                  className="p-2 text-foreground"
                  aria-label="Close Menu"
                >
                  <X size={24} />
                </button>
              </div>
              
              <nav className="flex flex-col gap-8 p-8">
                <a 
                  href="#process" 
                  onClick={() => setIsOpen(false)}
                  className="text-display-sm text-foreground hover:text-accent transition-colors"
                >
                  Process
                </a>
                <a 
                  href="#capabilities" 
                  onClick={() => setIsOpen(false)}
                  className="text-display-sm text-foreground hover:text-accent transition-colors"
                >
                  Capabilities
                </a>
                <a 
                  href="#contact" 
                  onClick={() => setIsOpen(false)}
                  className="text-display-sm text-foreground hover:text-accent transition-colors"
                >
                  Contact
                </a>
              </nav>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}

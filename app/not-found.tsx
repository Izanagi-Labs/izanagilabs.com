import React from "react";
import Link from "next/link";

export default function NotFound() {
  return (
    <main className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-center min-h-[70vh]">
      <div className="flex flex-col items-center text-center max-w-md">
        <h1 className="text-display-lg font-serif text-foreground mb-4">404</h1>
        <h2 className="text-heading-md font-semibold text-foreground mb-4">Page not found.</h2>
        <p className="text-body-lg text-foreground-muted mb-12">
          The page you&apos;re looking for doesn&apos;t exist or may have moved.
        </p>
        <Link href="/" className="inline-flex items-center text-system-sm font-semibold text-accent hover:text-accent-hover transition-colors group tracking-widest uppercase pb-2 border-b border-accent">
           BACK TO HOME
           <span className="ml-3 group-hover:translate-x-1 transition-transform">&rarr;</span>
        </Link>
      </div>
    </main>
  );
}

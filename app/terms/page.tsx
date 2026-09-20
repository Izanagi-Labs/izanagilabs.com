import React from "react";
import Link from "next/link";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Use",
  description: "Terms of Use for the Izanagi Labs website.",
  alternates: {
    canonical: "/terms",
  },
};

export default function TermsPage() {
  const currentDate = new Date().toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric"
  });

  return (
    <main className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 py-24 xl:py-32 min-h-[70vh]">
      <div className="max-w-3xl mx-auto flex flex-col gap-8">
        <div>
          <h1 className="text-display-lg font-serif text-foreground leading-[1.05] tracking-tight mb-2">Terms of Use</h1>
          <p className="text-body-sm text-foreground-faint">Last updated: {currentDate}</p>
        </div>

        <div className="prose prose-invert prose-brand max-w-none text-body-lg text-foreground-muted">
          <p>
            By using the Izanagi Labs website, you agree to these basic terms.
          </p>

          <h2 className="text-display-md font-serif text-foreground mt-12 mb-4">Website content</h2>
          <p>
            The information on this website is provided for general information about Izanagi Labs and our services. We may update or change website content without notice.
          </p>

          <h2 className="text-display-md font-serif text-foreground mt-12 mb-4">Services</h2>
          <p>
            Submitting an enquiry does not create a client relationship or guarantee that we will accept a project.
          </p>
          <p>
            Project scope, pricing, timelines, ownership and other commercial terms will be agreed separately before work begins.
          </p>

          <h2 className="text-display-md font-serif text-foreground mt-12 mb-4">Intellectual property</h2>
          <p>
            Unless otherwise stated, the content, branding and original materials on this website belong to Izanagi Labs and may not be reproduced without permission.
          </p>

          <h2 className="text-display-md font-serif text-foreground mt-12 mb-4">External services</h2>
          <p>
            Our website may contain links to third-party websites or services. Izanagi Labs is not responsible for their content or availability.
          </p>

          <h2 className="text-display-md font-serif text-foreground mt-12 mb-4">Contact</h2>
          <p>
            Questions regarding these terms can be sent to:
          </p>
          <p>
            <a href="mailto:hello@izanagilabs.com" className="text-accent hover:text-accent-hover transition-colors">hello@izanagilabs.com</a>
          </p>

          <div className="mt-16 pt-8 border-t border-border">
             <Link href="/" className="inline-flex items-center text-system-sm font-semibold text-foreground-muted hover:text-foreground transition-colors group tracking-widest uppercase">
                <span className="mr-3 group-hover:-translate-x-1 transition-transform">&larr;</span>
                BACK TO HOME
             </Link>
          </div>
        </div>
      </div>
    </main>
  );
}

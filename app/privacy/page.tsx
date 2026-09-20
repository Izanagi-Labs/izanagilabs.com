import React from "react";
import Link from "next/link";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Privacy Policy for the Izanagi Labs website.",
  alternates: {
    canonical: "/privacy",
  },
};

export default function PrivacyPage() {
  const currentDate = new Date().toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric"
  });

  return (
    <main className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 py-24 xl:py-32 min-h-[70vh]">
      <div className="max-w-3xl mx-auto flex flex-col gap-8">
        <div>
          <h1 className="text-display-lg font-serif text-foreground leading-[1.05] tracking-tight mb-2">Privacy Policy</h1>
          <p className="text-body-sm text-foreground-faint">Last updated: {currentDate}</p>
        </div>

        <div className="prose prose-invert prose-brand max-w-none text-body-lg text-foreground-muted">
          <p>
            Izanagi Labs respects your privacy. This policy explains the basic information we collect when you use our website or contact us.
          </p>

          <h2 className="text-display-md font-serif text-foreground mt-12 mb-4">Information we collect</h2>
          <p>
            When you submit our contact form, we may collect your name, email address, phone number and message. We may also collect basic website usage and technical information through analytics tools used on the website.
          </p>

          <h2 className="text-display-md font-serif text-foreground mt-12 mb-4">How we use it</h2>
          <p>
            We use this information to respond to enquiries, communicate with potential clients, understand how our website is used, and improve our services.
          </p>
          <p>We do not sell your personal information.</p>

          <h2 className="text-display-md font-serif text-foreground mt-12 mb-4">Third-party services</h2>
          <p>
            We may use trusted third-party services for website hosting, analytics and processing contact enquiries. These services may process limited information necessary to provide their functionality.
          </p>

          <h2 className="text-display-md font-serif text-foreground mt-12 mb-4">Contact</h2>
          <p>
            For privacy-related questions, contact:
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

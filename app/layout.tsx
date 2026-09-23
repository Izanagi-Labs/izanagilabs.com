import type { Metadata } from "next";
import { Inter, Instrument_Serif, Caveat, Space_Mono } from "next/font/google";
import "./globals.css";
import { Footer } from "@/components/Footer";
import { MotionProvider } from "@/components/MotionProvider";
import Script from "next/script";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

const spaceMono = Space_Mono({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-mono",
});

const instrumentSerif = Instrument_Serif({
  weight: ["400"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  variable: "--font-serif",
});

const caveat = Caveat({
  subsets: ["latin"],
  variable: "--font-caveat",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.izanagilabs.com"),
  title: {
    default: "Izanagi Labs | Custom Software, Web Development & Digital Growth",
    template: "%s | Izanagi Labs",
  },
  description: "Izanagi Labs is a Nashik based development and growth studio building custom software, high performance websites and digital growth solutions for businesses across India.",
  openGraph: {
    type: "website",
    siteName: "Izanagi Labs",
    title: "Izanagi Labs | Custom Software, Web Development & Digital Growth",
    description: "Izanagi Labs is a Nashik based development and growth studio building custom software, high performance websites and digital growth solutions for businesses across India.",
    url: "https://www.izanagilabs.com",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Izanagi Labs",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Izanagi Labs | Custom Software, Web Development & Digital Growth",
    description: "Izanagi Labs is a Nashik based development and growth studio building custom software, high performance websites and digital growth solutions for businesses across India.",
    images: ["/og-image.png"],
  },
  icons: {
    icon: [
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon.ico" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${instrumentSerif.variable} ${caveat.variable} ${spaceMono.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": "Organization",
                  "@id": "https://www.izanagilabs.com/#organization",
                  "name": "Izanagi Labs",
                  "url": "https://www.izanagilabs.com",
                  "email": "hello@izanagilabs.com",
                  "address": {
                    "@type": "PostalAddress",
                    "addressLocality": "Nashik",
                    "addressRegion": "Maharashtra",
                    "addressCountry": "IN"
                  },
                  "logo": {
                    "@type": "ImageObject",
                    "url": "https://www.izanagilabs.com/logo.png"
                  },
                  "sameAs": [
                    "https://www.linkedin.com/company/izanagi-labs",
                    "https://www.instagram.com/izanagilabs"
                  ]
                },
                {
                  "@type": "WebSite",
                  "@id": "https://www.izanagilabs.com/#website",
                  "url": "https://www.izanagilabs.com",
                  "name": "Izanagi Labs",
                  "publisher": {
                    "@id": "https://www.izanagilabs.com/#organization"
                  }
                }
              ]
            })
          }}
        />
      </head>
      <body className="font-sans bg-background text-foreground antialiased overflow-x-hidden" suppressHydrationWarning>
        {/* Google tag (gtag.js) */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-1LL1Y52CLJ"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-1LL1Y52CLJ');
          `}
        </Script>
        <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:z-50 focus:p-4 focus:bg-background focus:text-foreground">
          Skip to main content
        </a>
        <MotionProvider>
          {children}
          <Footer />
        </MotionProvider>
      </body>
    </html>
  );
}

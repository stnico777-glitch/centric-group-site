import type { Metadata } from "next";
import { Cormorant_Garamond, DM_Sans } from "next/font/google";
import { ContactSection } from "@/components/ContactSection";
import { SiteHeader } from "@/components/SiteHeader";
import { JsonLd } from "@/components/seo/JsonLd";
import { HtmlLangSync, LocaleProvider } from "@/context/LocaleContext";
import { rootMetadata } from "@/lib/metadata";
import "./globals.css";

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

export const metadata: Metadata = rootMetadata();

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${dmSans.variable} ${cormorant.variable} h-full antialiased`}
    >
      <body className="font-sans flex min-h-full flex-col overflow-x-hidden bg-background text-foreground">
        <LocaleProvider>
          <HtmlLangSync />
          <JsonLd />
          <SiteHeader />
          {children}
          <ContactSection />
        </LocaleProvider>
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import { DM_Sans, Syne } from "next/font/google";
import "./globals.css";

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Carlos Media — Miami Luxury Real Estate Media",
  description:
    "Cinematic listing media, architectural storytelling, and campaign films for Miami’s most considered properties.",
  openGraph: {
    title: "Carlos Media — Miami Luxury Real Estate Media",
    description:
      "Cinematic listing media and architectural storytelling in Miami.",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Carlos Media — Miami Luxury Real Estate Media",
    description:
      "Cinematic listing media and architectural storytelling in Miami.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${dmSans.variable} ${syne.variable} h-full antialiased`}
    >
      <body className="font-sans min-h-full flex flex-col overflow-x-hidden bg-background text-foreground">
        {children}
      </body>
    </html>
  );
}

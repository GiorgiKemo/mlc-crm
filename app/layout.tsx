import type { Metadata } from "next";
import { Cormorant_Garamond, Manrope } from "next/font/google";
import "./globals.css";

const bodyFont = Manrope({
  variable: "--font-body",
  subsets: ["latin"],
  display: "swap",
});

const headlineFont = Cormorant_Garamond({
  variable: "--font-headline",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "MLC Group CRM",
    template: "%s | MLC Group CRM",
  },
  description:
    "Arbor & Earth development workspace for the MLC CRM rebuild, designed for Next.js, Supabase, and Vercel.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${bodyFont.variable} ${headlineFont.variable} min-h-full antialiased`}
    >
      <body className="min-h-full">{children}</body>
    </html>
  );
}

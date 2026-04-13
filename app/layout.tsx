import type { Metadata } from "next";
import { Noto_Serif, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const bodyFont = Plus_Jakarta_Sans({
  variable: "--font-body",
  subsets: ["latin"],
});

const headlineFont = Noto_Serif({
  variable: "--font-headline",
  subsets: ["latin"],
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

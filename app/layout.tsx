import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const bodyFont = Inter({
  variable: "--font-body",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: {
    default: "MLC Group CRM",
    template: "%s | MLC Group CRM",
  },
  description:
    "Chronicle-inspired MLC Group CRM rebuilt in Next.js for development on GitHub, Vercel, and Supabase.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${bodyFont.variable} min-h-full antialiased`}>
      <body className="min-h-full">{children}</body>
    </html>
  );
}

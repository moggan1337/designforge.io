import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "DesignForge - AI-Powered Design Systems",
  description: "Generate complete design systems with Tailwind, shadcn/ui, and CSS variables in seconds. Describe your product, get production-ready code.",
  keywords: ["design system", "tailwind", "shadcn", "AI", "design tokens", "UI components"],
  authors: [{ name: "DesignForge" }],
  openGraph: {
    title: "DesignForge - AI-Powered Design Systems",
    description: "Generate complete design systems with Tailwind, shadcn/ui, and CSS variables in seconds.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "DesignForge - AI-Powered Design Systems",
    description: "Generate complete design systems with Tailwind, shadcn/ui, and CSS variables in seconds.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}

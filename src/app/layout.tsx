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
  title: "CyberHub Cafe | Premium Internet Lounge in Nigeria",
  description:
    "CyberHub Cafe delivers secure high-speed internet, co-working pods, esports lounges, and professional business services for Nigeria's modern workforce.",
  keywords: [
    "cyber cafe",
    "internet cafe nigeria",
    "co-working lagos",
    "gaming lounge",
    "business center",
  ],
  openGraph: {
    title: "CyberHub Cafe | Premium Internet Lounge in Nigeria",
    description:
      "Work, play, and connect at CyberHub Cafe — premium internet access, esports arena, and professional business services in one vibrant space.",
    url: "https://agentic-ab7b8a91.vercel.app",
    siteName: "CyberHub Cafe",
    locale: "en_NG",
    type: "website",
  },
  metadataBase: new URL("https://agentic-ab7b8a91.vercel.app"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} min-h-screen bg-background text-foreground antialiased`}
      >
        {children}
      </body>
    </html>
  );
}

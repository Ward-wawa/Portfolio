import type {Metadata, Viewport} from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import SpaceBackground from "@/components/SpaceBackground";
import SmoothScroll from "@/components/SmoothScroll";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Portfolio",
  description: "Ward Abboud Portfolio",
};

export const viewport: Viewport = {
    width: 'device-width',
    initialScale:1
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html style={{scrollBehavior:'smooth'}} lang="en">

      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased scroll-smooth`}
      >
      <SmoothScroll>
          <SpaceBackground>
                {children}
          </SpaceBackground>
      </SmoothScroll>
      </body>
    </html>
  );
}

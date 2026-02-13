import type { Metadata } from "next";
import { Inter, Pixelify_Sans } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const pixel = Pixelify_Sans({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-pixel",
});

export const metadata: Metadata = {
  title: "Hoskbrew | Retro Gaming Hardware & Homebrew Support",
  description:
    "Custom cartridges, game parts, and homebrew support. Makers of Crystal Mines.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${pixel.variable} bg-retro-black text-retro-white antialiased overflow-x-hidden flex flex-col min-h-screen`}
      >
        <Header />
        <main className="flex-grow pt-20">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

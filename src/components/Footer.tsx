"use client";

import Link from "next/link";
import Image from "next/image";
import { Twitter, Instagram, Mail, Github } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-retro-black border-t-4 border-retro-gray py-12 relative overflow-hidden">
      <div className="absolute inset-0 scanlines opacity-20 pointer-events-none" />

      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-12 relative z-10">
        <div className="col-span-1 md:col-span-2 space-y-4">
          <Link href="/" className="block relative w-48 h-24">
            <Image
              src="/assets/images/HoskBrew_Stacked_White.svg"
              alt="Hoskbrew Logo"
              fill
              className="object-contain"
            />
          </Link>
          <p className="text-retro-white/80 max-w-sm font-sans">
            Retro-gaming hardware, custom cartridges, and homebrew support.
            Makers of{" "}
            <span className="text-retro-accent font-bold">Crystal Mines</span>.
          </p>
        </div>

        <div className="space-y-4">
          <h3 className="font-retro text-retro-accent text-lg uppercase">
            Explore
          </h3>
          <ul className="space-y-2 font-sans text-retro-white/80">
            <li>
              <Link
                href="/products"
                className="hover:text-retro-accent transition-colors"
              >
                Products
              </Link>
            </li>
            <li>
              <Link
                href="/services"
                className="hover:text-retro-accent transition-colors"
              >
                Services
              </Link>
            </li>
            <li>
              <Link
                href="/retronomicon"
                className="hover:text-retro-accent transition-colors"
              >
                RetroNomicon
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                className="hover:text-retro-accent transition-colors"
              >
                About Us
              </Link>
            </li>
          </ul>
        </div>

        <div className="space-y-4">
          <h3 className="font-retro text-retro-accent text-lg uppercase">
            Connect
          </h3>
          <div className="flex gap-4">
            <a
              href="#"
              className="p-2 bg-retro-gray rounded-full hover:bg-retro-accent transition-colors group"
            >
              <Twitter className="w-5 h-5 text-retro-white group-hover:text-white" />
            </a>
            <a
              href="#"
              className="p-2 bg-retro-gray rounded-full hover:bg-retro-accent transition-colors group"
            >
              <Instagram className="w-5 h-5 text-retro-white group-hover:text-white" />
            </a>
            <a
              href="#"
              className="p-2 bg-retro-gray rounded-full hover:bg-retro-accent transition-colors group"
            >
              <Mail className="w-5 h-5 text-retro-white group-hover:text-white" />
            </a>
            <a
              href="#"
              className="p-2 bg-retro-gray rounded-full hover:bg-retro-accent transition-colors group"
            >
              <Github className="w-5 h-5 text-retro-white group-hover:text-white" />
            </a>
          </div>
          <p className="text-sm text-retro-white/50 mt-4">
            © {new Date().getFullYear()} Hoskbrew. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

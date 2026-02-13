"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Button } from "./ui/Button";

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-retro-black">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#2d2d2d_1px,transparent_1px),linear-gradient(to_bottom,#2d2d2d_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-20" />
      </div>

      <div className="container mx-auto px-4 z-10 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-6"
        >
          <h1 className="text-5xl md:text-7xl font-retro text-retro-white leading-tight">
            Level Up Your{" "}
            <span className="text-retro-accent crt-flicker">Retro</span>{" "}
            Collection
          </h1>
          <p className="text-xl md:text-2xl font-sans text-retro-white/80 max-w-lg">
            Custom cartridges, high-quality manuals, and white-label
            manufacturing for the indie homebrew community.
          </p>
          <div className="flex gap-4 pt-4">
            <Button size="lg" variant="primary">
              Explore Products
            </Button>
            <Button size="lg" variant="outline">
              Start Project
            </Button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative h-[400px] md:h-[600px] w-full"
        >
          <motion.div
            animate={{ y: [0, -20, 0] }}
            transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
            className="absolute inset-0 flex items-center justify-center"
          >
            <Image
              src="/assets/images/Color Octopus Vector.png"
              alt="Hoskbrew Octopus Mascot"
              width={600}
              height={600}
              className="object-contain drop-shadow-[0_0_50px_rgba(139,92,246,0.3)]"
              priority
            />
          </motion.div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <div className="w-6 h-10 border-2 border-retro-white/30 rounded-full flex justify-center p-1">
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
            className="w-1.5 h-1.5 bg-retro-accent rounded-full"
          />
        </div>
      </motion.div>
    </section>
  );
}

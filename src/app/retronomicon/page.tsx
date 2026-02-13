"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Button } from "@/components/ui/Button";

export default function RetroNomiconPage() {
  return (
    <div className="min-h-screen bg-retro-black">
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-[url('/assets/images/HoskBrew_VisualCenter_08012025_Page_005.png')] bg-cover bg-center opacity-30" />
        <div className="absolute inset-0 bg-gradient-to-t from-retro-black via-retro-black/50 to-transparent" />

        <div className="container mx-auto px-4 relative z-10 text-center space-y-6">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-6xl md:text-8xl font-retro text-retro-accent crt-flicker"
          >
            RetroNomicon
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-2xl font-sans text-retro-white max-w-2xl mx-auto"
          >
            The Quarterly Journal of Homebrew Heroes & Hardware Hackers
          </motion.p>
        </div>
      </section>

      <section className="py-24 bg-retro-gray/10">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative aspect-[3/4] bg-retro-black border-4 border-retro-white shadow-[8px_8px_0px_0px_rgba(255,0,85,1)] rotate-[-2deg] hover:rotate-0 transition-transform duration-500"
            >
              <div className="absolute inset-0 bg-[url('/assets/images/HoskBrew_VisualCenter_08012025_Page_007.png')] bg-cover bg-center" />
              <div className="absolute bottom-0 left-0 right-0 bg-retro-black/90 p-4 border-t-2 border-retro-white">
                <p className="font-retro text-retro-accent text-xl">
                  ISSUE #04: THE MAPPER ISSUE
                </p>
              </div>
            </motion.div>

            <div className="space-y-8">
              <h2 className="text-4xl md:text-5xl font-retro text-retro-white">
                <span className="text-retro-secondary">{">>>"}</span> LATEST
                ISSUE
              </h2>
              <p className="text-xl text-retro-white/80 font-sans leading-relaxed">
                Deep dive into MMC5 mapper chips, an interview with the creator
                of "Micro Mages", and a teardown of the rarest Famicom carts.
              </p>

              <div className="space-y-4">
                <div className="flex items-center gap-4 p-4 bg-retro-gray/20 border border-retro-white/10 rounded-lg">
                  <div className="w-12 h-12 bg-retro-secondary flex items-center justify-center font-retro text-retro-black text-xl">
                    01
                  </div>
                  <div>
                    <h4 className="font-bold text-retro-white">
                      PCB Layout 101
                    </h4>
                    <p className="text-sm text-retro-white/60">
                      Optimizing traces for signal integrity
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-4 p-4 bg-retro-gray/20 border border-retro-white/10 rounded-lg">
                  <div className="w-12 h-12 bg-retro-accent flex items-center justify-center font-retro text-retro-white text-xl">
                    02
                  </div>
                  <div>
                    <h4 className="font-bold text-retro-white">
                      Artist Spotlight
                    </h4>
                    <p className="text-sm text-retro-white/60">
                      Pixel art techniques for 8-bit constraints
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex gap-4 pt-4">
                <Button size="lg" variant="primary">
                  Subscribe ($12/yr)
                </Button>
                <Button size="lg" variant="outline">
                  Read Sample
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-retro-secondary relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/assets/images/B_W_Octopus_New.png.png')] bg-no-repeat bg-left-center opacity-10 bg-contain rotate-180" />

        <div className="container mx-auto px-4 relative z-10 text-center max-w-4xl mx-auto space-y-8">
          <h2 className="text-4xl md:text-6xl font-retro text-retro-black">
            CALL FOR SUBMISSIONS
          </h2>
          <p className="text-xl font-sans text-retro-black/80">
            Are you working on a homebrew project? We want to feature it. Submit
            your game, hardware mod, or technical article for the next issue.
          </p>
          <Button
            size="lg"
            className="bg-retro-black text-retro-white hover:bg-retro-black/90 border-retro-black w-full md:w-auto"
          >
            Submit Your Project
          </Button>
        </div>
      </section>
    </div>
  );
}

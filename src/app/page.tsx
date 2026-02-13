import Hero from "@/components/Hero";
import { ProductGrid } from "@/components/ProductGrid";
import { Button } from "@/components/ui/Button";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Hero />

      <ProductGrid />

      <section className="py-24 bg-retro-black relative border-y border-retro-gray/30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <h2 className="text-4xl md:text-5xl font-retro text-retro-white">
                <span className="text-retro-accent">MANUFACTURING</span> &
                SUPPORT
              </h2>
              <p className="text-xl text-retro-white/80 font-sans leading-relaxed">
                We handle the heavy lifting so you can focus on the game. From
                PCB fabrication to full-color box art printing and assembly.
              </p>
              <ul className="space-y-4">
                {[
                  "Custom PCBs",
                  "Injection Molded Shells",
                  "Box & Manual Printing",
                  "Worldwide Fulfillment",
                ].map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-3 text-lg font-retro text-retro-secondary"
                  >
                    <span className="w-2 h-2 bg-retro-secondary block" />
                    {item}
                  </li>
                ))}
              </ul>
              <div className="pt-4">
                <Button variant="secondary">View Services</Button>
              </div>
            </div>
            <div className="relative h-[400px] w-full bg-retro-gray/20 rounded-lg border-2 border-retro-gray/50 flex items-center justify-center overflow-hidden">
              <div className="absolute inset-0 bg-[url('/assets/images/HoskBrew_VisualCenter_08012025_Page_001.png')] bg-cover bg-center opacity-50 grayscale hover:grayscale-0 transition-all duration-500" />
              <div className="z-10 bg-retro-black/80 p-6 border border-retro-white/20 backdrop-blur-sm">
                <h3 className="text-2xl font-retro text-retro-white text-center">
                  WHITE LABEL
                  <br />
                  PARTNER
                </h3>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-32 bg-retro-secondary relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/assets/images/B_W_Octopus_New.png.png')] bg-no-repeat bg-right-bottom opacity-10 bg-contain" />
        <div className="container mx-auto px-4 text-center relative z-10 space-y-8">
          <h2 className="text-4xl md:text-6xl font-retro text-retro-black max-w-4xl mx-auto leading-tight">
            READY TO LAUNCH YOUR RETRO PROJECT?
          </h2>
          <p className="text-xl md:text-2xl font-sans text-retro-black/80 max-w-2xl mx-auto">
            Join the RetroNomicon community or start your manufacturing journey
            today.
          </p>
          <div className="flex gap-4 justify-center">
            <Button
              size="lg"
              className="bg-retro-black text-retro-white hover:bg-retro-black/90 border-retro-black"
            >
              Get a Quote
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-retro-black text-retro-black hover:bg-retro-black hover:text-retro-white"
            >
              Join RetroNomicon
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}

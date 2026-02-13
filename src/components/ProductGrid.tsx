"use client";

import { motion } from "framer-motion";
import { ProductCard } from "./ProductCard";
import { products } from "@/data/products";

export function ProductGrid() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <section className="py-24 bg-retro-gray/10 relative">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center mb-16 text-center space-y-4">
          <h2 className="text-4xl md:text-5xl font-retro text-retro-white">
            <span className="text-retro-secondary">{">>>"}</span> LATEST DROPS
          </h2>
          <p className="text-retro-white/60 font-sans max-w-2xl text-lg">
            Fresh from the workshop. Limited edition hardware and new releases.
          </p>
        </div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {products.map((product) => (
            <motion.div key={product.id} variants={item}>
              <ProductCard
                title={product.title}
                description={product.description}
                image={product.image}
                price={product.price}
                tags={product.tags}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

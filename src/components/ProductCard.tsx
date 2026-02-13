"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Button } from "./ui/Button";

interface ProductCardProps {
  title: string;
  description: string;
  image: string;
  price?: string;
  tags?: string[];
  link?: string;
}

export function ProductCard({
  title,
  description,
  image,
  price,
  tags,
  link,
}: ProductCardProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      className="group relative bg-retro-gray border-2 border-retro-white/10 overflow-hidden flex flex-col"
    >
      <div className="absolute inset-0 bg-gradient-to-t from-retro-black/90 to-transparent z-10 pointer-events-none" />

      <div className="relative aspect-square w-full overflow-hidden bg-retro-black/50">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-110"
        />
        {price && (
          <div className="absolute top-4 right-4 bg-retro-accent text-white px-3 py-1 font-retro text-sm z-20 shadow-lg rotate-3">
            {price}
          </div>
        )}
      </div>

      <div className="relative z-20 p-6 flex flex-col flex-grow space-y-4">
        <div className="space-y-2">
          <div className="flex gap-2 flex-wrap">
            {tags?.map((tag) => (
              <span
                key={tag}
                className="text-xs font-mono text-retro-secondary uppercase tracking-wider px-2 py-0.5 border border-retro-secondary/30 rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>
          <h3 className="text-2xl font-retro text-retro-white group-hover:text-retro-accent transition-colors">
            {title}
          </h3>
          <p className="text-retro-white/70 font-sans text-sm line-clamp-3">
            {description}
          </p>
        </div>

        <div className="mt-auto pt-4">
          <Button
            variant="outline"
            className="w-full group-hover:bg-retro-white group-hover:text-retro-black"
          >
            View Details
          </Button>
        </div>
      </div>
    </motion.div>
  );
}

"use client";

import { motion } from "framer-motion";
import React from "react";
import { AuroraBackground } from "@/components/ui/aurora-background";
import Example from "@/components/hover/button";
import { FlipWords } from "@/components/ui/flip-words";

const words = [
  "The New Age IT Support",
  "The Greatest AI Tool",
  "Help Instantly",
];

export function AuroraBackgroundDemo() {
  return (
    <AuroraBackground>
      <motion.div
        initial={{ opacity: 0.0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        viewport={{
          once: true,
        }}
        className="relative flex flex-col gap-4 items-center justify-center px-4 overflow-hidden"
      >
        <div className="text-3xl md:text-7xl font-bold dark:text-white text-center ">
          FixChat <br /> <FlipWords className="text-white" words={words} />
        </div>
        <div className="font-extralight text-center text-base md:text-4xl dark:text-neutral-200 py-4">
          We merged AI and IT to create instant and precise solutions
        </div>
        {/* <button className="bg-white rounded-full w-fit text-black px-4 py-2">
          Start Now
        </button> */}
        <Example />
      </motion.div>
    </AuroraBackground>
  );
}

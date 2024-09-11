"use client";
import {
  TypewriterEffect,
  TypewriterEffectSmooth,
} from "@/components/ui/typewriter-effect";
import { motion } from "framer-motion";
export function TypewriterEffectSmoothDemo() {
  const words = [
    {
      text: "Get",
      className: "text-white",
    },
    {
      text: "started",
      className: "text-white",
    },
    {
      text: "here",
      className: "text-white",
    },
    {
      text: "with",
      className: "text-white",
    },
    {
      text: "FixChat.",
      className: "text-purple-500 dark:text-blue-500",
    },
  ];
  return (
    <div className="flex flex-col items-center justify-center">
      <TypewriterEffectSmooth words={words} />
    </div>
  );
}

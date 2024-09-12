"use client";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";

const words = `Meet FixChat, the groundbreaking platform designed to transform the way you solve IT problems. Whether you’re a seasoned IT professional or part of a dynamic support team, FixChat delivers powerful, precise solutions instantly.`;

export function TextGenerateEffectDemo() {
  return <TextGenerateEffect words={words} />;
}

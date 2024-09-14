"use client";

import React, { useEffect, useState } from "react";
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";
import { motion } from "framer-motion";

const testimonials = [
  {
    quote:
      "When I first started using FixChat, I just wanted it to fix my wifi issues. It did that and more!",
    name: "Charles Dickens",
    title: "",
  },
  {
    quote: "To FixChat, or not to FixChat, that is the question.",
    name: "William Shakespeare",
    title: "",
  },
  {
    quote: "All that we see or seem is but a fix within a chat.",
    name: "Edgar Allan Poe",
    title: "",
  },
  {
    quote:
      "I couldnt believe how fast my issues were fixed. It even caught a future issue!",
    name: "Thomas",
    title: "",
  },
  {
    quote: "Dont hesitate with FixChat. Get in while the getting is good!",
    name: "Matt",
    title: "",
  },
];

export function InfiniteMovingCardsDemo() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 2, ease: "easeOut" }}
      className="rounded-md flex flex-col antialiased items-center justify-center relative overflow-hidden"
    >
      <h1 className="section-title">Testimonials</h1>
      <InfiniteMovingCards
        items={testimonials}
        direction="right"
        speed="slowest"
      />
    </motion.div>
  );
}

const facts = [
  {
    quote:
      "When I first started using FixChat, I just wanted it to fix my wifi issues. It did that and more!",
    name: "Charles Dickens",
    title: "",
  },
  {
    quote: "To FixChat, or not to FixChat, that is the question.",
    name: "William Shakespeare",
    title: "",
  },
  {
    quote: "All that we see or seem is but a fix within a chat.",
    name: "Edgar Allan Poe",
    title: "",
  },
  {
    quote:
      "I couldnt believe how fast my issues were fixed. It even caught a future issue!",
    name: "Thomas",
    title: "",
  },
  {
    quote: "Dont hesitate with FixChat. Get in while the getting is good!",
    name: "Matt",
    title: "",
  },
];

export function FixChatFactsScroll() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 2, ease: "easeOut" }}
      className="rounded-md flex flex-col antialiased items-center justify-center relative overflow-hidden"
    >
      <InfiniteMovingCards
        items={testimonials}
        direction="right"
        speed="slowest"
      />
    </motion.div>
  );
}

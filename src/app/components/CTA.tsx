"use client";

import { motion } from "framer-motion";
import Example from "@/components/hover/button";

export default function CTA() {
  return (
    <>
      <motion.section
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
        className="py-16 lg:py-24"
      >
        <div className="gap-8 items-center px-4 mx-auto max-w-screen-xl xl:gap-16 md:grid md:grid-cols-2 lg:px-6">
          {/* Image for light mode */}
          <motion.img
            className="w-full dark:hidden"
            src="https://plus.unsplash.com/premium_photo-1683120966127-14162cdd0935?q=80&w=2526&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="dashboard image"
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          />
          {/* Image for dark mode */}
          <motion.img
            className="w-full hidden dark:block"
            src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/cta/cta-dashboard-mockup-dark.svg"
            alt="dashboard image"
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          />
          <motion.div
            className="mt-4 md:mt-0"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-white">
              Wait times and unresolved solutions are now a thing of the past.
            </h2>
            <p className="mb-6 font-light md:text-lg text-gray-400">
              Get started with FixChat today to start your journey into the
              world of AI-based technical support. You will never want to go
              back to the old ways of dealing with technical issues!
            </p>
            <a href="/aiUtility">
              <Example />
            </a>
          </motion.div>
        </div>
      </motion.section>
    </>
  );
}

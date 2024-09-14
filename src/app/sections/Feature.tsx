"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { FiArrowUpRight } from "react-icons/fi";
import { BackgroundGradientDemo } from "../components/BackGradient";

const fadeInAnimationVariants = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.05 * index,
    },
  }),
};

export const TextParallaxContentExample = () => {
  const problems = [
    {
      heading: "Network Issues:",
      description: `
        FixChat asks you to provide specific network logs with just a few command inputs, guiding you every step of the way.
        Once analyzed, it pinpoints the exact issue—be it an IP conflict or a DNS failure—and suggests precise commands
        to reset and optimize your network settings, ensuring a fast and stable connection.
      `,
    },
    {
      heading: "Software Installation Fails with Error Code 1603:",
      description: `
        FixChat prompts you to collect detailed installation logs, guiding you to run targeted scripts for better clarity.
        After analyzing the logs, FixChat identifies the underlying permissions issues and conflicting files. It then provides
        you with custom commands to clean up the registry, adjust settings, and get the software installed without further hassle.
      `,
    },
    {
      heading: "High CPU Usage:",
      description: `
        FixChat asks you to gather performance logs using straightforward commands, allowing for an in-depth diagnosis of resource-heavy
        processes. It then guides you through a tailored set of scripts that help disable unnecessary programs and optimize system performance,
        putting you back in control of your computer’s speed and efficiency.
      `,
    },
  ];

  return (
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
      className=""
    >
      <TextParallaxContent
        imgUrl="https://plus.unsplash.com/premium_photo-1683121710572-7723bd2e235d?q=80&w=2532&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        subheading=""
        heading="What Can FixChat Solve For Me?"
      >
        {problems.map((problem, index) => (
          <motion.div
            key={index}
            variants={fadeInAnimationVariants}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            custom={index}
            className="text-center "
          >
            <Problem
              heading={problem.heading}
              description={problem.description}
            />
          </motion.div>
        ))}
      </TextParallaxContent>

      <TextParallaxContent
        imgUrl="https://images.unsplash.com/photo-1697577418970-95d99b5a55cf?q=80&w=2592&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        subheading="Those were just the tip of the iceberg"
        heading="Solve more of your issues instantly with FixChat"
      />
    </motion.div>
  );
};

const IMG_PADDING = 12;

const TextParallaxContent = ({ imgUrl, subheading, heading, children }) => {
  return (
    <div
      style={{
        paddingLeft: IMG_PADDING,
        paddingRight: IMG_PADDING,
      }}
    >
      <div className="relative h-[150vh]">
        <StickyImage imgUrl={imgUrl} />
        <OverlayCopy heading={heading} subheading={subheading} />
      </div>
      {children}
    </div>
  );
};

const StickyImage = ({ imgUrl }) => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["end end", "end start"],
  });

  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.85]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  return (
    <motion.div
      style={{
        backgroundImage: `url(${imgUrl})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: `calc(100vh - ${IMG_PADDING * 2}px)`,
        top: IMG_PADDING,
        scale,
      }}
      ref={targetRef}
      className="sticky z-0 overflow-hidden rounded-3xl"
    >
      <motion.div
        className="absolute inset-0 bg-neutral-950/70"
        style={{
          opacity,
        }}
      />
    </motion.div>
  );
};

const OverlayCopy = ({ subheading, heading }) => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [250, -250]);
  const opacity = useTransform(scrollYProgress, [0.25, 0.5, 0.75], [0, 1, 0]);

  return (
    <motion.div
      style={{
        y,
        opacity,
      }}
      ref={targetRef}
      className="absolute left-0 top-0 flex h-screen w-full flex-col items-center justify-center text-white"
    >
      <p className="mb-2 text-center text-xl md:mb-4 md:text-3xl">
        {subheading}
      </p>
      <p className="text-center text-4xl font-bold md:text-7xl">{heading}</p>
    </motion.div>
  );
};

const Problem = ({ heading, description }) => (
  <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 px-4 pb-24 pt-12 md:grid-cols-12 ">
    <h2 className="col-span-1 text-3xl font-bold md:col-span-4 ">{heading}</h2>
    <div className="col-span-1 md:col-span-8">
      <p className="mb-4 text-xl text-white/90 md:text-2xl">{description}</p>
    </div>
  </div>
);

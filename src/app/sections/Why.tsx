"use client";

import { Container, Typography } from "@mui/material";
import { motion } from "framer-motion";
import React from "react";
import { FaShippingFast } from "react-icons/fa";
import { GiDart } from "react-icons/gi";
import { RiGuideLine } from "react-icons/ri";
import { FaCrown } from "react-icons/fa6";
import { MdQuickreply } from "react-icons/md";

const fadeInAnimationVariants = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.15 * index,
    },
  }),
};

const sections = [
  {
    icon: <FaShippingFast className="text-5xl text-blue-500 mx-auto" />,
    title: "Why Settle for Slow When You Can Have Instant?",
    description:
      "FixChat delivers solutions at the speed of thought. Say goodbye to long waits and hello to lightning-fast IT problem-solving, designed to keep you moving forward.",
  },
  {
    icon: <GiDart className="text-5xl text-green-500 mx-auto" />,
    title: "Why Waste Time When You Can Be Precise?",
    description:
      "Every second counts. FixChat’s custom scripts are crafted for accuracy, ensuring you get the right solution, right now. It’s IT support without the guesswork.",
  },
  {
    icon: <RiGuideLine className="text-5xl text-purple-500 mx-auto" />,
    title: "Why Struggle Alone When You Can Have Expert Guidance?",
    description:
      "FixChat puts the power of professional IT support in your hands. With instant access to expert-level fixes, you’re never left figuring it out on your own.",
  },
  {
    icon: <RiGuideLine className="text-5xl text-yellow-500 mx-auto" />,
    title: "Why Complicate When You Can Simplify?",
    description:
      "FixChat turns complex IT issues into easy solutions. Our intuitive platform cuts through the noise, delivering only what you need—quick, clean, and simple.",
  },
  {
    icon: <MdQuickreply className="text-5xl text-red-500 mx-auto" />,
    title: "Why Just Manage When You Can Master?",
    description:
      "FixChat empowers you to take control of your IT problems. Elevate your support process with solutions that are powerful, precise, and always ready when you need them.",
  },
];

const ComponentName = () => {
  return (
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
      className="py-12 sm:py-16 lg:py-20"
    >
      <Container maxWidth="lg">
        <Typography
          variant="h2"
          component="h2"
          className="text-center text-4xl font-bold text-white mb-10 sm:text-5xl"
        >
          Why FixChat?
        </Typography>

        <div className="grid grid-cols-1 gap-y-8 md:grid-cols-2 lg:grid-cols-3 gap-x-8">
          {sections.map((section, index) => (
            <motion.div
              key={index}
              className="flex flex-col items-center justify-center p-8 bg-gray-800 rounded-lg"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.6 }}
              variants={fadeInAnimationVariants}
              initial="initial"
              whileInView="animate"
              viewport={{
                once: true,
              }}
              custom={index}
            >
              {section.icon}
              <Typography
                variant="h6"
                component="h3"
                className="mt-6 text-xl font-bold text-white text-center"
              >
                {section.title}
              </Typography>
              <Typography className="mt-4 text-base text-white/80 text-center">
                {section.description}
              </Typography>
            </motion.div>
          ))}
        </div>
      </Container>
    </motion.section>
  );
};

export default ComponentName;

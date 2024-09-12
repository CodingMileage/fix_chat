"use client";

import {
  ArrowPathIcon,
  CloudArrowUpIcon,
  FingerPrintIcon,
  LockClosedIcon,
} from "@heroicons/react/24/outline";
import { motion } from "framer-motion";
import { useState, useEffect, useRef } from "react";

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

const features = [
  {
    name: "Lightning-Fast Solutions",
    description:
      "Get immediate, expert guidance for any IT challenge. Simply ask, and FixChat delivers the fix—quickly, effortlessly, and accurately.",
    icon: CloudArrowUpIcon,
  },
  {
    name: "Precision Scripts",
    description:
      "Receive custom-tailored scripts that do the work for you. Designed to tackle your specific issue with pinpoint accuracy, FixChat’s solutions save time and get you back on track faster.",
    icon: LockClosedIcon,
  },
  {
    name: "Expert-Level Support",
    description:
      "Unlock the power of professional-grade IT support. With FixChat, you have access to solutions crafted for the highest standards, giving you the confidence to solve any problem.",
    icon: ArrowPathIcon,
  },
  {
    name: "About FixChat",
    description:
      "At FixChat, we’re redefining IT support with cutting-edge technology and relentless focus on speed and simplicity. Our mission is to empower you with powerful solutions that make troubleshooting effortless.",
    icon: FingerPrintIcon,
  },
];

export default function Example() {
  const [isInView, setIsInView] = useState(false);
  const sectionRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect(); // Stop observing once it's in view
        }
      },
      {
        threshold: 0.1, // Trigger when 10% of the element is visible
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <motion.div
      ref={sectionRef}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 1.5, ease: "easeOut" }}
      className="py-24 sm:py-32"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-indigo-600"></h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            What Is FixChat
          </p>
          <p className="mt-6 text-lg leading-8 text-white/70">
            Meet FixChat, the groundbreaking platform designed to transform the
            way you solve IT problems. Whether you’re a seasoned IT professional
            or part of a dynamic support team, FixChat delivers powerful,
            precise solutions instantly.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
            {features.map((feature, index) => (
              <motion.div
                variants={fadeInAnimationVariants}
                initial="initial"
                whileInView="animate"
                viewport={{
                  once: true,
                }}
                custom={index}
                key={feature.name}
                className="relative pl-16"
              >
                <dt className="text-base font-semibold leading-7 text-white">
                  <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600">
                    <feature.icon
                      aria-hidden="true"
                      className="h-6 w-6 text-white"
                    />
                  </div>
                  {feature.name}
                </dt>
                <dd className="mt-2 text-base leading-7 text-white/70">
                  {feature.description}
                </dd>
              </motion.div>
            ))}
          </dl>
        </div>
      </div>
    </motion.div>
  );
}

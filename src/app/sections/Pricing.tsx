"use client";

import { motion } from "framer-motion";
import { features } from "process";
import { FaCheck } from "react-icons/fa6";
import { twMerge } from "tailwind-merge";

const tiers = [
  {
    title: "Free",
    monthlyPrice: 0,
    buttonText: "Sign up now",
    popular: false,
    inverse: false,
    features: ["24/7 Support", "Unlimited AI support", "4GB Storage"],
  },
  {
    title: "Premium",
    monthlyPrice: 15,
    buttonText: "Start here",
    popular: true,
    inverse: true,
    features: [
      "24/7 Support",
      "Unlimited AI support",
      "8GB Storage",
      "Priority Que",
      "Expert",
    ],
  },
];

export default function Pricing() {
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
      className="py-24"
    >
      <div className="container">
        <h2 className="section-title mt-5">Pricing</h2>
        <p className="section-description">
          Free for forever. Upgrade for unlimited AI assistance and more
          exclusive features.
        </p>
        <div className="flex flex-col gap-6 items-center mt-10 lg:flex-row lg:items-end lg:justify-center">
          {tiers.map(
            ({
              title,
              monthlyPrice,
              buttonText,
              popular,
              inverse,
              features,
            }) => (
              <div
                className={twMerge(
                  "p-10 border bg-slate-200 text-black border-[#d55dfa] md:w-1/2 rounded-3xl shadow-[0_7px_14px_#d55dfa] max-w-xs w-full md:max-w-lg",
                  inverse === true && "border-black bg-black text-white"
                )}
              >
                <div className="flex justify-between">
                  <h3
                    className={twMerge(
                      "text-lg font-bold text-black",
                      inverse === true && "text-white/60"
                    )}
                  >
                    {title}
                  </h3>
                  {popular === true && (
                    <div className="inline-flex text-sm px-4 py-1.5 rounded-xl border border-white/20">
                      <span className="bg-[linear-gradient(to_right,#DD7DDF,#E1CD86,#BBCB92,#71C2EF,#3BFFFF,#DD7DDF)] text-transparent bg-clip-text font-medium">
                        Popular
                      </span>
                    </div>
                  )}
                </div>
                <div className="flex items-baseline gap-1 mt-[30px]">
                  <span className="text-4xl font-bold tracking-tighter leading-none">
                    ${monthlyPrice}
                  </span>
                  <span
                    className={twMerge(
                      "tracking-tight font-bold text-black",
                      inverse === true && "text-white"
                    )}
                  >
                    /month
                  </span>
                </div>
                <button
                  className={twMerge(
                    "btn btn-primary bg-black w-full mt-[30px] md:w-64",
                    inverse === true && "bg-white"
                  )}
                >
                  {buttonText}
                </button>

                <ul className="flex flex-col gap-5 mt-8">
                  {features.map((feature) => (
                    <li className="text-sm flex items-center gap-4">
                      <FaCheck />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )
          )}
        </div>
      </div>
    </motion.section>
  );
}

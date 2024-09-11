"use client";

import productImage from "@/assets/product-image.png";
import Image from "next/image";
import pyramidImage from "@/assets/pyramid.png";
import tubeImage from "@/assets/tube.png";
import { motion } from "framer-motion";

export default function Product() {
  return (
    <section className="py-24 overflow-x-hidden">
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        // whileInView={{ y: 0, opacity: 1 }}
        transition={{
          duration: 5,
          ease: "easeOut",
          type: "spring",
          stiffness: 260,
          damping: 20,
          delayChildren: 2,
          staggerChildren: 2,
        }}
        // viewport={{ once: true, amount: 0.2 }}
        className="container mx-auto px-4"
      >
        <div className="max-w-[540px] mx-auto text-center">
          <div className="text-3xl font-extrabold">Boost your productivity</div>
          <h2 className="section-title mt-5 text-4xl font-bold">
            A more effective way of dealing with technical issues.
          </h2>
          <p className="section-description mt-5 text-lg">
            Our AI-infused technical support will effortlessly turn your
            problems into solutions.
          </p>
        </div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2 }}
          className="relative mt-10"
        >
          {/* <Image
            src={productImage}
            alt="Product showing technical support"
            layout="responsive"
          /> */}
          <Image
            src={pyramidImage}
            alt="Decorative pyramid"
            height={262}
            width={262}
            className="hidden md:block absolute -right-36 -top-32"
          />
          <Image
            src={tubeImage}
            alt="Decorative tube"
            height={248}
            className="hidden md:block absolute bottom-24 -left-36"
          />
        </motion.div>

        <div className="flex justify-center py-36">
          <div className="font-bold text-3xl tracking-tighter bg-gradient-to-b from-white to-[#7108b3] text-transparent bg-clip-text">
            What FixChat Offers
          </div>
        </div>
      </motion.div>
    </section>
  );
}

import { Button } from "@mui/material";
import { FaArrowRight } from "react-icons/fa";
import { FaCog } from "react-icons/fa";
import Image from "next/image";
import cogImage from "@/assets/cog.png";
import cylinderImage from "@/assets/cylinder.png";

//bg-[radial-gradient(ellipse_200%_100%_at_bottom_left,#530373,#000000_66%)]

export default function Hero() {
  return (
    <section className="pt-8 pb-20 md:pt-5 md:pb-10 overflow-hidden backdrop-blur-sm">
      <div className="container">
        <div className="md:flex items-center">
          <div className="md:w-[478px]">
            <div className="text-sm inline-flex border border-[#222]/10 px-3 py-1 rounded-lg tracking-tight">
              Dive into the better side of IT
            </div>
            <h1 className="text-5xl font-bold tracking-tighter bg-gradient-to-b from-white to-[#7108b3] text-transparent bg-clip-text mt-6">
              Pathway to productivity
            </h1>
            <p className="text-xl tracking-tight mt-6">
              Ever have a technical issue and had to wait in line? With FixChat,
              that issue is no more.
            </p>
            <div className="flex gap-1 items-center mt-[30px]">
              <button className="btn btn-primary hover:bg-white/80">
                Try for free
              </button>
              <button className="btn btn-text gap-1">
                <span>Learn more</span>
                <FaArrowRight />
              </button>
            </div>
          </div>
          <div className="mt-20 md:mt-0 md:h-[648px] md:flex-1 relative">
            <Image
              src={cogImage}
              className="md:absolute h-full md:w-auto md:max-w-none md:-left-6"
            />
            <Image
              src={cylinderImage}
              width={220}
              height={220}
              className="hidden md:block -top-8 -left-32 md:absolute"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

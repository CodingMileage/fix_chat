"use client";
import { useState } from "react";
import { LaptopMinimal, LocateOff, ImageIcon } from "lucide-react";

import FlipCard from "@/animata/card/flip-card";
import WaveReveal from "@/animata/text/wave-reveal";
import { cn } from "@/lib/utils";

interface SwapCardProps {
  firstImage?: string;
  secondImage?: string;
  thirdImage?: string;
  firstImageClass?: string;
  secondImageClass?: string;
  thirdImageClass?: string;
  firsttitle?: string;
  secondtitle?: string;
  thirdtitle?: string;
  firstdescription?: string;
  seconddescritpion?: string;
  thirddescription?: string;
  story?: string;
}

export default function SwapCard({
  firstImage = "https://images.unsplash.com/photo-1537498425277-c283d32ef9db?q=80&w=878&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  secondImage = "https://images.unsplash.com/photo-1531297484001-80022131f5a1?q=80&w=1120&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  thirdImage = "https://images.unsplash.com/photo-1531297484001-80022131f5a1?q=80&w=1120&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  firstImageClass,
  secondImageClass,
  thirdImageClass,
  firstdescription = "first description",
  seconddescritpion = "second description",
  thirddescription = "third description",
  firsttitle = "first title",
  secondtitle = "second title",
  thirdtitle = "third title",
  story = "Story",
}: SwapCardProps) {
  const [visibleCard, setVisibleCard] = useState(1);

  const handleSwap = () => {
    setVisibleCard((prev) => (prev === 3 ? 1 : prev + 1));
  };

  return (
    <div className="h-[50%] w-96 rounded-md bg-gray-100 p-4">
      <div className="flex h-full w-full gap-4 overflow-hidden">
        <button onClick={handleSwap} className="m-auto h-12 w-14 border-2 p-3">
          {visibleCard === 1 ? (
            <LaptopMinimal color="black" />
          ) : visibleCard === 2 ? (
            <LocateOff color="black" />
          ) : (
            <ImageIcon color="black" />
          )}
        </button>
        <div className="relative h-80 w-80 overflow-hidden bg-none transition-transform duration-700 ease-in-out">
          {/* First Card */}
          <div
            className={cn(
              "absolute flex h-full w-full items-center justify-center transition-transform duration-700 ease-in-out",
              visibleCard === 1
                ? "translate-y-0 transform"
                : "-translate-y-full transform",
              firstImageClass
            )}
          >
            <FlipCard
              className="h-72"
              title={firsttitle}
              description={firstdescription}
              image={firstImage}
            />
          </div>

          {/* Second Card */}
          <div
            className={cn(
              "absolute flex h-full w-full items-center justify-center transition-transform duration-700 ease-in-out",
              visibleCard === 2
                ? "translate-y-0 transform"
                : "-translate-y-full transform",
              secondImageClass
            )}
          >
            <FlipCard
              className="h-72"
              title={secondtitle}
              description={seconddescritpion}
              image={secondImage}
            />
          </div>

          {/* Third Card */}
          <div
            className={cn(
              "absolute flex h-full w-full items-center justify-center transition-transform duration-700 ease-in-out",
              visibleCard === 3
                ? "translate-y-0 transform"
                : "-translate-y-full transform",
              thirdImageClass
            )}
          >
            <FlipCard
              className="h-72"
              title={thirdtitle}
              description={thirddescription}
              image={thirdImage}
            />
          </div>
        </div>
      </div>
      <div className="mt-4 font-bold text-black">
        <WaveReveal text={story} className="md:text-md text-md" />
      </div>
    </div>
  );
}

import { HoverEffect } from "@/components/ui/card-hover-effect";

export function CardHoverEffectDemo() {
  return (
    <div className="max-w-5xl mx-auto px-8">
      <HoverEffect items={projects} />
    </div>
  );
}
export const projects = [
  {
    title: "Why Settle for Slow When You Can Have Instant?",
    description:
      "FixChat delivers solutions at the speed of thought. Say goodbye to long waits and hello to lightning-fast IT problem-solving, designed to keep you moving forward.",
    link: "https://stripe.com",
  },
  {
    title: "Why Waste Time When You Can Be Precise?",
    description:
      "Every second counts. FixChat’s custom scripts are crafted for accuracy, ensuring you get the right solution, right now. It’s IT support without the guesswork.",
    link: "https://netflix.com",
  },
  {
    title: "Why Struggle Alone When You Can Have Expert Guidance?",
    description:
      "FixChat puts the power of professional IT support in your hands. With instant access to expert-level fixes, you’re never left figuring it out on your own.",
    link: "https://google.com",
  },
  {
    title: "Why Complicate When You Can Simplify?",
    description:
      "FixChat turns complex IT issues into easy solutions. Our intuitive platform cuts through the noise, delivering only what you need—quick, clean, and simple.",
    link: "https://google.com",
  },
  {
    title: "Why Just Manage When You Can Master?",
    description:
      "FixChat empowers you to take control of your IT problems. Elevate your support process with solutions that are powerful, precise, and always ready when you need them.",
    link: "https://google.com",
  },
];

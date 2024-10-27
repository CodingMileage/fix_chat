import * as React from "react";

import Pricing from "../sections/Pricing";
import { InfiniteMovingCardsDemo } from "../components/MovingCards";
import Footer from "../components/Footer";

import { TextParallaxContentExample } from "../sections/Feature";
import { AuroraBackgroundDemo } from "../components/AuroraBg";
import CTA from "../components/CTA";
import WhatIsFCSection from "../components/FeatureSection";
import WhyFC from "../sections/Why";

export default async function Home() {
  return (
    <main>
      <AuroraBackgroundDemo />
      <WhatIsFCSection />
      <TextParallaxContentExample />
      <WhyFC />
      <InfiniteMovingCardsDemo />

      <Pricing />

      <CTA />
      {/* <Footer /> */}
    </main>
  );
}

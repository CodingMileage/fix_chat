import * as React from "react";
import Button from "@mui/material/Button";
import {
  Container,
  Typography,
  Box,
  Card,
  CardContent,
  Fab,
} from "@mui/material";
import ChatIcon from "@mui/icons-material/Chat";
import { auth } from "@/auth";
import Welcome from "../components/Welcome";
import Link from "next/link";
import FirstPost from "./test/page";
import Hero from "../sections/Hero";
import NavBar from "../sections/NavBar";
import Header from "../sections/Header";
import LogoTicker from "../sections/LogoTicker";
import Product from "../sections/Product";
import Pricing from "../sections/Pricing";
import { TypewriterEffectSmoothDemo } from "../components/Typewriter";
import { FocusCardsDemo } from "../components/FocusCard";
import { InfiniteMovingCardsDemo } from "../components/MovingCards";
import { PlaceholdersAndVanishInputDemo } from "../components/PlaceVanish";
import { AppleCardsCarouselDemo } from "../components/AppleCards";
import Footer from "../components/Footer";
import { motion } from "framer-motion";
import { LayoutGridDemo } from "../components/LayoutGrid";
import TextRotate from "../components/TextRotate";
import ParticleSwarmLoader from "../components/SwarmLoader";
import WhatIsFC from "../components/WhatIsFC";
import ProductFeatures from "@/components/animata/hero/product-features";
import WaveReveal from "@/components/animata/text/wave-reveal";
import { TextGenerateEffectDemo } from "../components/TextGenerate";
import { CardHoverEffectDemo } from "../components/HoverEffect";
import Example from "../components/FeatureSection";
import Heroo from "../sections/Heroo";
import { TextParallaxContentExample } from "../sections/Feature";
import ComponentName from "../sections/Why";
import { LampDemo } from "@/components/ui/lamp";
import { AuroraBackgroundDemo } from "../components/AuroraBg";

export default async function Home() {
  const session = await auth();

  return (
    <main>
      {/* <Welcome /> */}
      {/* <NavBar /> */}
      <Header />
      {/* <ProductFeatures /> */}
      {/* <Hero /> */}
      {/* <Heroo /> */}
      <AuroraBackgroundDemo />
      {/* <PlaceholdersAndVanishInputDemo /> */}
      <Example />
      <TextParallaxContentExample />
      <ComponentName />
      <InfiniteMovingCardsDemo />
      {/* <WhatIsFC /> */}
      {/* <CardHoverEffectDemo /> */}
      {/* <ParticleSwarmLoader /> */}
      {/* <LogoTicker /> */}
      {/* <Product /> */}
      <LayoutGridDemo />
      <FocusCardsDemo />
      <Pricing />
      {/* <TypewriterEffectSmoothDemo /> */}
      {/* <AppleCardsCarouselDemo /> */}
      <LampDemo />
      <Footer />
    </main>
  );
}

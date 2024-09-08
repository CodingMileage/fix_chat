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
import { motion } from "framer-motion";
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

export default async function Home() {
  const session = await auth();

  return (
    <main>
      {/* <Welcome /> */}
      {/* <NavBar /> */}
      <Header />
      <Hero />
      <LogoTicker />
      <Product />
      <Pricing />
      <TypewriterEffectSmoothDemo />
    </main>
  );
}

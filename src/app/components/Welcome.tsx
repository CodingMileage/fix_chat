"use client";

import { FlipWords } from "@/components/ui/flip-words";
import { Typography, Container, Box } from "@mui/material";
import { motion } from "framer-motion";

const words = ["Modern Solutions", "Help Instantly", "Better Alternatives"]

export default function Welcome() {
  return (
    <>
      <motion.div
        className="w-full h-screen flex items-center justify-center"
        //   whileHover={{ scale: 1.05 }}
        initial={{ x: -200, opacity: 0 }}
        //   whileInView={{ x: 0, opacity: 1 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <Container maxWidth="md">
          <Box className="p-8 rounded-3xl shadow-lg text-center bg-slate-700 bg-opacity-10 backdrop-blur-sm">
            <Typography
              variant="h2"
              component="h1"
              gutterBottom
              className="font-bold"
            >
              Welcome To Fix<span className="text-purple-600">Chat</span>
            </Typography>
            <Typography variant="h6" paragraph className="">
              Your go-to platform for instant messaging and real-time AI chat
              solutions.
            </Typography>
          </Box>
        </Container>
      </motion.div>

      <motion.div
        className="w-full h-screen flex items-center justify-center"
        //   whileHover={{ scale: 1.05 }}
        initial={{ x: -200, opacity: 0 }}
        //   whileInView={{ x: 0, opacity: 1 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <Container maxWidth="md">
          <Box className="p-8 rounded-3xl shadow-lg text-center bg-slate-700 bg-opacity-10 backdrop-blur-sm overflow-hidden">
            <Typography
              variant="h2"
              component="h1"
              gutterBottom
              className="font-bold"
            >
              Need<br />
              <FlipWords words={words} className="text-purple-600"/> <br />
            </Typography>
            <Typography variant="h4" paragraph className="font-bold">
              The Answer is Fix<span className="text-purple-600">Chat</span>. Always.
            </Typography>
          </Box>
        </Container>
      </motion.div>

      <motion.div
        className="w-full h-screen  flex items-center justify-center"
        //   whileHover={{ scale: 1.05 }}
        initial={{ x: -200, opacity: 0 }}
        //   whileInView={{ x: 0, opacity: 1 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <Container maxWidth="md">
          <Box className="p-8 rounded-3xl shadow-lg text-center bg-slate-700 bg-opacity-10 backdrop-blur-sm">
            <Typography
              variant="h2"
              component="h1"
              gutterBottom
              className="font-bold"
            >
              Our <span className="text-purple-600">Mission</span>
            </Typography>
            <Typography variant="h6" paragraph className="">
              Our mission is to revolutionize IT support by harnessing the power
              of artificial intelligence and its decentralized network of
              experts.
            </Typography>
          </Box>
        </Container>
      </motion.div>
    </>
  );
}

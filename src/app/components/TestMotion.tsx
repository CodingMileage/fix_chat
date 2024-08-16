"use client";

import { Typography, Container, Box } from "@mui/material";
import { motion } from "framer-motion";

export default function TestMotion() {
  return (
    <motion.div
      className="w-full h-screen  flex items-center justify-center"
      //   whileHover={{ scale: 1.05 }}
      initial={{ x: -200, opacity: 0 }}
      //   whileInView={{ x: 0, opacity: 1 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 1, ease: "easeOut" }}
    >
      <Container maxWidth="sm">
        <Box className="p-8 rounded-3xl shadow-lg text-center bg-slate-700 bg-opacity-10 backdrop-blur-sm">
          <Typography variant="h2" component="h1" gutterBottom className="">
            Our <span className="text-purple-600">Mission</span>
          </Typography>
          <Typography variant="h6" paragraph className="">
            Our mission is to revolutionize IT support by harnessing the power
            of artificial intelligence and its decentralized network of experts.
          </Typography>
        </Box>
      </Container>
    </motion.div>
  );
}

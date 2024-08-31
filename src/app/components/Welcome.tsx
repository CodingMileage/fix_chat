"use client";

import { FlipWords } from "@/components/ui/flip-words";
import { Typography, Container, Box, Grid, Button } from "@mui/material";
import { motion } from "framer-motion";
import { LampContainer, LampDemo } from "@/components/ui/lamp";

const words = ["Modern Solutions", "Help Instantly", "Better Alternatives"];

export default function Welcome() {
  return (
    <>

      <div className="rounded h-screen mt-14 bg-slate-800 bg-opacity-60 backdrop-blur-sm w-full flex items-center justify-center">
        <Container>
          <div className="p-16">
            <Typography variant="h4" className="font-extrabold">
              Fix<span className="text-purple-600">Chat</span>: The Future of IT Support
            </Typography>
            <div>
            </div>
            {/* <Typography variant="h6" className="font-bold">
                Meet FixChat, the groundbreaking platform designed to transform the way you solve IT problems. Whether you’re a seasoned IT professional or part of a dynamic support team, FixChat delivers powerful, precise solutions instantly.
            </Typography> */}
            {/* <div>
              <button className="p-4 m-4 bg-purple-600 rounded">Start Now</button>
            </div> */}
          </div>
          
        </Container>
          <Container className="flex items-center justify-center h-full">
            <img src="/images/logo.png" alt="Random Image" className=""/>
          </Container>
      </div>
      
      {/* <motion.div
        className="w-full h-screen flex items-center justify-center"
        initial={{ x: -200, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <Container maxWidth="lg">
          <Box className="p-8 rounded-3xl shadow-lg text-center bg-slate-800 bg-opacity-70 backdrop-blur-sm">
            <Typography variant="h2" component="h1" gutterBottom className="font-bold">
              Fix<span className="text-purple-600">Chat</span> 
            </Typography>

          </Box>
        </Container>
      </motion.div> */}

            <motion.div
        className="w-full min-h-screen flex items-center justify-center py-16"
        initial={{ x: -200, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
      <Container maxWidth="lg">
        <Box className="p-8 rounded-3xl shadow-xl text-center bg-slate-800 bg-opacity-80 backdrop-blur-sm overflow-hidden">
          <Typography
            variant="h2"
            component="h1"
            gutterBottom
            className="font-bold text-white"
          >
        Fix<span className="text-purple-600">Chat</span> Features
      </Typography>
      <Grid container spacing={6} className="pt-8">
        <Grid item xs={12} md={4} className="flex">
          <Box
            className="p-6 bg-slate-700 bg-opacity-40 rounded-lg hover:bg-opacity-50 transition duration-300 ease-in-out flex flex-col justify-between w-full"
            whileHover={{ scale: 1.05 }}
          >
            <Typography variant="h4" className="font-bold text-white">
              Lightning-Fast Solutions
            </Typography>
            <Typography
              variant="body1"
              paragraph
              className="mt-4 font-medium text-slate-300"
            >
              Get immediate, expert guidance for any IT challenge. Simply ask,
              and FixChat delivers the fix—quickly, effortlessly, and
              accurately.
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={12} md={4} className="flex">
          <Box
            className="p-6 bg-slate-700 bg-opacity-40 rounded-lg hover:bg-opacity-50 transition duration-300 ease-in-out flex flex-col justify-between w-full"
            whileHover={{ scale: 1.05 }}
          >
            <Typography variant="h4" className="font-bold text-white text-center">
              Precision Scripts
            </Typography>
            <Typography
              variant="body1"
              paragraph
              className="mt-4 font-medium text-slate-300"
            >
              Receive custom-tailored scripts that do the work for you. Designed
              to tackle your specific issue with pinpoint accuracy, FixChat’s
              solutions save time and get you back on track faster.
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={12} md={4} className="flex">
          <Box
            className="p-6 bg-slate-700 bg-opacity-40 rounded-lg hover:bg-opacity-50 transition duration-300 ease-in-out flex flex-col justify-between w-full"
            whileHover={{ scale: 1.05 }}
          >
            <Typography variant="h4" className="font-bold text-white">
              Expert-Level Support
            </Typography>
            <Typography
              variant="body1"
              paragraph
              className="mt-4 font-medium text-slate-300"
            >
              Unlock the power of professional-grade IT support. With FixChat,
              you have access to solutions crafted for the highest standards,
              giving you the confidence to solve any problem.
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Box>
  </Container>
      </motion.div>
      

      <motion.div
        className="w-full h-screen flex items-center justify-center"
        initial={{ x: -200, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <Container maxWidth="lg">
          <Box className="p-8 rounded-3xl shadow-lg text-center bg-slate-800 bg-opacity-70 backdrop-blur-sm overflow-hidden">
            <Typography variant="h2" component="h1" gutterBottom className="font-bold">
              Need <br />
              <FlipWords words={words} className="text-purple-600 text-center" /> <br />
            </Typography>
            <Typography variant="h4" paragraph className="font-bold">
              The Answer is Fix<span className="text-purple-600">Chat</span>. Always.
            </Typography>
          </Box>
        </Container>
      </motion.div>


      <motion.div
        className="w-full h-screen flex items-center justify-center"
        initial={{ x: -200, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <Container maxWidth="lg">
          <Box className="p-8 rounded-3xl shadow-lg text-center bg-slate-800 bg-opacity-70 backdrop-blur-sm">
            <Typography variant="h2" component="h1" gutterBottom className="font-bold">
              Our <span className="text-purple-600">Mission</span>
            </Typography>
            <Typography variant="h6" paragraph>
              Our mission is to revolutionize IT support by harnessing the power of artificial intelligence and its decentralized network of experts.
            </Typography>
          </Box>
        </Container>
      </motion.div>

      <motion.div
        className="w-full h-screen flex items-center justify-center"
        initial={{ x: -200, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <Container maxWidth="lg">
          <Box className="p-8 rounded-3xl shadow-lg text-center bg-slate-800 bg-opacity-70 backdrop-blur-sm">
            <Typography variant="h2" component="h1" gutterBottom className="font-bold">
              About Fix<span className="text-purple-600">Chat</span>
            </Typography>
            <Typography variant="h6" paragraph>
              At FixChat, we’re redefining IT support with cutting-edge technology and relentless focus on speed and simplicity. Our mission is to empower you with powerful solutions that make troubleshooting effortless.
            </Typography>
          </Box>
        </Container>
      </motion.div>

      <motion.div
        className="w-full h-screen flex items-center justify-center"
        initial={{ x: -200, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <Container maxWidth="lg">
          <Box className="p-8 rounded-3xl shadow-lg text-center bg-slate-800 bg-opacity-70 backdrop-blur-sm">
            <Typography variant="h2" component="h1" gutterBottom className="font-bold">
              Ready To Elevate your IT Experiance?
            </Typography>
            <Typography variant="h6" paragraph>
              Join the revolution of IT professionals who trust FixChat to supercharge their support process. Start using FixChat today and experience the future of IT solutions—fast, precise, and powerful.
            </Typography>
          </Box>
        </Container>
      </motion.div>
    </>
  );
}

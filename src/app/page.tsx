import Image from "next/image";
import * as React from "react";
import Button from "@mui/material/Button";
import ParticlesBackground from "./components/ParticlesBackground";
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
import TestMotion from "./components/TestMotion";
import Welcome from "./components/Welcome";
import Link from "next/link";

export async function User() {
  const session = await auth();

  return session?.user || null;
}

export default async function Home() {
  const session = await auth();

  return (
    <main>
      {/* <ParticlesBackground> */}
      {/* <Container className="p-40 text-center">
        <Box my={4}>
          <Typography
            className="text-center"
            variant="h2"
            component="h1"
            gutterBottom
          >
            Welcome to FixChat
          </Typography>
          <Typography variant="h6" component="h2" paragraph>
            Your go-to platform for instant messaging and real-time AI chat
            solutions.
          </Typography>
          
          {session?.user ? (
            ""
          ) : (
            <a href="/sign-in">
              <Button
                className="bg-purple-800 hover:bg-purple-900 rounded-3xl"
                variant="contained"
                color="primary"
                size="large"
              >
                Get Started
              </Button>
            </a>
          )}
        </Box>
      </Container> */}
      <Welcome />

      {/* <TestMotion /> */}

      {session?.user ? (
        <Fab
          style={{
            position: "fixed",
            bottom: "16px",
            right: "16px",
          }}
          className="bg-purple-800 hover:bg-purple-900"
          variant="extended"
          color="primary"
        >
          <ChatIcon />
        </Fab>
      ) : (
        ""
      )}

      {/* <Card variant="outlined" className="p-4 bg-purple-900">
          <div>About Us</div>
        </Card> */}
      {/* </ParticlesBackground> */}
    </main>
  );
}

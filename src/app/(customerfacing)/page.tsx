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

export default async function Home() {
  const session = await auth();

  return (
    <main>
      <Welcome />

      {/* {session?.user ? (
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
      )} */}
    </main>
  );
}

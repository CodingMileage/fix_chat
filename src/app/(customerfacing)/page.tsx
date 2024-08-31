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
      {/* <div className="flex flex-col p-4 m-4 bg-slate-800 backdrop-blur-sm bg-opacity-50">
        <div className="justify-between flex">
          <img src="https://loremflickr.com/200/200?random=1" alt="" />
          <h1 className="item-centered">FixChat</h1>
          <img src="https://loremflickr.com/200/200?random=1" alt="" />
        </div>
        <div className="justify-around flex space-between">
          <img src="https://loremflickr.com/200/200?random=1" alt="" />
          <Button variant="contained" color="primary">
            Start Here
          </Button>
          <img src="https://loremflickr.com/200/200?random=1" alt="" />
        </div>
      </div> */}
      <Welcome />
    </main>
  );
}

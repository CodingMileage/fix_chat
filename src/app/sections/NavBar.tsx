"use client";

import { NavButton } from "@/components/Nav";
import { auth } from "@/config/firebase";
// import { SignOutButtonLogo } from "./SignOutButton";
import { useAuth } from "@/context/AuthContext";
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { SignOutButtonLogo } from "../components/SignOutButton";

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  const { user } = useAuth();
  const router = useRouter();

  const toggleNav = () => {
    setIsOpen(!isOpen);
  };

  const handleSignIn = async () => {
    const provider = new GoogleAuthProvider();
    try {
      await signInWithPopup(auth, provider);
      router.refresh(); // Redirect to homepage after sign-in
    } catch (error) {
      console.error("Sign in error:", error);
    }
  };

  return (
    <div className="relative">
      <div className="flex justify-between items-center bg-slate-800 backdrop-blur-sm bg-opacity-25 fixed top-0 w-full z-50 p-2 md:p-4">
        {/* 2KConnect Logo */}
        <div className="flex items-center">
          <NavButton href="/">
            <h1 className="font-extrabold text-left text-xl md:text-2xl">
              2K<span className="text-red-600">Connect</span>
            </h1>
          </NavButton>
        </div>

        {/* Toggle Button for Mobile View */}
        <button className="md:hidden text-white" onClick={toggleNav}>
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>

        {/* Right-Aligned Navigation Items */}
        <div
          className={`fixed top-0 right-0 mt-12 md:mt-0 md:flex md:items-center md:space-x-4 md:static md:bg-transparent ${
            isOpen ? "block" : "hidden"
          } md:block`}
        >
          <NavButton href="/community">
            <h1 className="text-center p-2 text-sm md:text-base">Community</h1>
          </NavButton>

          <NavButton href="/newBuild">
            <h1 className="text-center p-2 text-sm md:text-base">Builder</h1>
          </NavButton>

          {/* <NavButton href="/badge">
            <h1 className="text-center p-2 text-sm md:text-base">Badges</h1>
          </NavButton> */}

          <NavButton href="/jumpshot">
            <h1 className="text-center p-2 text-sm md:text-base">Timing</h1>
          </NavButton>

          <NavButton href="/profile">
            <h1 className="text-center p-2 text-sm md:text-base">Profile</h1>
          </NavButton>

          <NavButton href="/nba">
            <h1 className="text-center p-2 text-sm md:text-base">NBA</h1>
          </NavButton>

          {user ? (
            <SignOutButtonLogo />
          ) : (
            <button
              onClick={handleSignIn}
              className="m-2 px-2 py-1 text-sm md:text-base hover:scale-110 duration-500 transition-all"
            >
              Sign In
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

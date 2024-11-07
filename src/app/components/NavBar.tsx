"use client";

import { NavButton } from "@/components/Nav";
import { auth } from "@/config/firebase";
import { SignOutButtonLogo } from "./SignOutButton";
import { useAuth } from "@/context/AuthContext";
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { useRouter } from "next/navigation";
import { useState, useEffect, useRef } from "react";
import Image from "next/image";

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  const { user } = useAuth();
  const router = useRouter();
  
  // Type navRef as HTMLDivElement
  const navRef = useRef<HTMLDivElement | null>(null);

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

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="relative">
      <div className="flex justify-between items-center bg-slate-800 backdrop-blur-sm bg-opacity-25 fixed top-0 w-full z-50 p-2 md:p-4">
        {/* Logo */}
        <div className="flex items-center">
          <NavButton href="/">
            <Image
              src="/images/logo2.png"
              width={90}
              height={90}
              alt="FixChat Logo"
            />
          </NavButton>
        </div>

        {/* Mobile Toggle Button */}
        <button
          className="md:hidden text-white"
          onClick={toggleNav}
          aria-label="Toggle navigation menu"
        >
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

        {/* Navigation Links */}
        <div
          ref={navRef}
          className={`fixed top-0 right-0 mt-12 md:mt-0 md:flex md:items-center md:space-x-4 md:static md:bg-transparent bg-slate-800 bg-opacity-90 p-4 md:p-0 rounded-lg transition-transform ${
            isOpen ? "block" : "hidden"
          } md:block`}
        >
          <NavButton href="/aiUtility">
            <h1 className="text-center p-2 text-lg md:text-base">AI Utility</h1>
          </NavButton>
          <NavButton href="/news">
            <h1 className="text-center p-2 text-lg md:text-base">News</h1>
          </NavButton>
          <NavButton href="/#">
            <h1 className="text-center p-2 text-lg md:text-base">Guides</h1>
          </NavButton>
          <NavButton href="/#">
            <h1 className="text-center p-2 text-lg md:text-base">Courses</h1>
          </NavButton>

          {user ? (
            <SignOutButtonLogo />
          ) : (
            <button
              onClick={handleSignIn}
              className="m-2 px-2 py-1 text-sm md:text-base hover:scale-110 transition-transform duration-500"
              aria-label="Sign in with Google"
            >
              Sign In
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

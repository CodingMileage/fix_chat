"use client";

import React, { useState } from "react";
import Image from "next/image";
import { IoIosMenu, IoMdClose } from "react-icons/io";
import { auth } from "@/config/firebase";
import { useAuth } from "@/context/AuthContext";
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { useRouter } from "next/navigation";
import { SignOutButtonn, SignOutButtonLogo } from "../components/SignOutButton";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { user } = useAuth();
  const router = useRouter();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
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

  console.log(user);

  return (
    <header className="absolute top-0 left-0 w-full z-50">
      <div className="py-2 backdrop-blur-md">
        <div className="container mx-auto">
          <div className="flex items-center justify-between">
            <h1 className="font-extrabold text-center text-3xl p-2">
              {/* <a href="/">
                Fix<span className="text-purple-600">Chat</span>
              </a> */}
              <a href="/">
                <Image
                  src="/images/logo2.png"
                  width={115}
                  height={115}
                  alt="FixChat"
                ></Image>
              </a>
            </h1>
            <div className="md:hidden">
              <button onClick={toggleMenu} aria-label="Toggle menu">
                {isMenuOpen ? <IoMdClose size={30} /> : <IoIosMenu size={30} />}
              </button>
            </div>
            <nav className="hidden md:flex gap-6 items-center">
              <a href="/">Home</a>
              <a href="/aiUtility">AI Utility</a>
              <a href="/news">News</a>
              <a href="#">Guides</a>
              <a href="#">Courses</a>
              {user ? (
                <>
                  <DropdownMenu>
                    <DropdownMenuTrigger>Account</DropdownMenuTrigger>
                    <DropdownMenuContent>
                      <DropdownMenuLabel>{user.displayName}</DropdownMenuLabel>
                      <DropdownMenuSeparator />
                      <DropdownMenuItem>
                        <a href="/dashboard">Profile</a>
                      </DropdownMenuItem>
                      <DropdownMenuItem>Billing</DropdownMenuItem>
                      <DropdownMenuItem>Team</DropdownMenuItem>
                      <DropdownMenuItem>
                        {" "}
                        <SignOutButtonn />
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </>
              ) : (
                <button
                  onClick={handleSignIn}
                  className="bg-white text-black px-4 py-2 rounded font-medium inline-flex justify-center tracking-tighter"
                >
                  Sign In
                </button>
              )}
            </nav>
          </div>
        </div>
      </div>

      {/* Mobile menu overlay */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 bg-black/60 z-30"
          onClick={toggleMenu}
          aria-hidden="true"
        />
      )}

      {/* Mobile menu */}
      <div
        className={`fixed top-0 right-0 w-4/5 h-full bg-slate-700 z-40 transform ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 ease-in-out`}
        aria-hidden={!isMenuOpen}
      >
        <div className="flex justify-end p-4">
          <button onClick={toggleMenu} aria-label="Close menu">
            <IoMdClose size={30} />
          </button>
        </div>
        <nav className="flex flex-col items-center mt-8 space-y-4">
          <a
            href="/"
            className="text-lg font-semibold text-white hover:text-purple-600 py-2"
            onClick={toggleMenu}
          >
            Home
          </a>
          <a
            href="/aiUtility"
            className="text-lg font-semibold text-white hover:text-purple-600 py-2"
            onClick={toggleMenu}
          >
            AI Utility
          </a>
          <a
            href="/news"
            className="text-lg font-semibold text-white hover:text-purple-600 py-2"
            onClick={toggleMenu}
          >
            News
          </a>
          <a
            href="#"
            className="text-lg font-semibold text-white hover:text-purple-600 py-2"
            onClick={toggleMenu}
          >
            Guides
          </a>
          <a
            href="#"
            className="text-lg font-semibold text-white hover:text-purple-600 py-2"
            onClick={toggleMenu}
          >
            Courses
          </a>
          {user ? (
            <>
              <DropdownMenu>
                <DropdownMenuTrigger>Open</DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuLabel>My Account</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>Profile</DropdownMenuItem>
                  <DropdownMenuItem>Billing</DropdownMenuItem>
                  <DropdownMenuItem>Team</DropdownMenuItem>
                  <DropdownMenuItem>Subscription</DropdownMenuItem>
                </DropdownMenuContent>
                <SignOutButtonLogo />
              </DropdownMenu>
            </>
          ) : (
            <button
              onClick={handleSignIn}
              className="bg-white text-black px-4 py-2 rounded font-medium inline-flex justify-center tracking-tighter"
            >
              Sign In
            </button>
          )}
        </nav>
      </div>
    </header>
  );
}

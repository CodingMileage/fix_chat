"use client";

import React, { useState } from "react";
import Image from "next/image";
import { IoIosMenu, IoMdClose } from "react-icons/io";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

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
              <a href="#">News</a>
              <a href="#">Guides</a>
              <a href="#">Courses</a>
              <button className="bg-white text-black px-4 py-2 rounded font-medium inline-flex justify-center tracking-tighter">
                Try for free
              </button>
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
            href="#"
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
          <button
            className="bg-white text-black px-6 py-3 rounded font-medium mt-4"
            onClick={toggleMenu}
          >
            Try for free
          </button>
        </nav>
      </div>
    </header>
  );
}

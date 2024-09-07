import { FaArrowRight } from "react-icons/fa";
import Image from "next/image";
import { IoIosMenu } from "react-icons/io";

export default function Header() {
  return (
    <header className="sticky top-0 backdrop-blur-md z-20">
      <div className="flex justify-center items-center py-3 bg-black text-white text-sm gap-3">
        <p className="text-white/60 hidden md:block">
          Streamline your IT Experiance
        </p>
        <div className="inline-flex gap-1 items-center">
          <p>Get started for free</p>
          <div className="p-2">
            <FaArrowRight />
          </div>
        </div>
      </div>

      <div className="py-5">
        <div className="container">
          <div className="flex items-center justify-between">
            <h1 className="font-extrabold text-center text-3xl p-2">
              Fix<span className="text-purple-600">Chat</span>
            </h1>
            <div className="md:hidden">
              <IoIosMenu size={30} />
            </div>
            <nav className="hidden md:flex gap-6 items-center">
              <a href="#">Home</a>
              <a href="#">AI Utility</a>
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
    </header>
  );
}

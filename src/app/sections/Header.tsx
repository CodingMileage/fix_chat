import { FaArrowRight } from "react-icons/fa";
import Image from "next/image";
import { IoIosMenu } from "react-icons/io";

export default function Header() {
  return (
    <header className="absolute top-0 left-0 w-full z-50">
      <div className="py-2 backdrop-blur-md">
        <div className="container mx-auto">
          <div className="flex items-center justify-between">
            <h1 className="font-extrabold text-center text-3xl p-2">
              <a href="/">
                Fix<span className="text-purple-600">Chat</span>
              </a>
            </h1>
            <div className="md:hidden">
              <IoIosMenu size={30} />
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
    </header>
  );
}

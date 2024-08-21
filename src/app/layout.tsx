import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import ParticlesBackrgound from "./components/ParticlesBackground";
import { auth } from "@/auth";
import { Button, Fab } from "@mui/material";
import LogoutIcon from "@mui/icons-material/Logout";
import { SignOutButton, SignOutButtonLogo } from "./components/SignOutButton";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  User,
  CreditCard,
  Settings,
  Keyboard,
  Users,
  UserPlus,
  Mail,
  MessageSquare,
  PlusCircle,
  Plus,
  Github,
  LifeBuoy,
  Cloud,
  LogOut,
} from "lucide-react";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import AccountCircle from "@mui/icons-material/AccountCircle";
import Link from "next/link";
import LoginIcon from "@mui/icons-material/Login";
import { NavButton, NavLink } from "@/components/Nav";
import ChatIcon from "@mui/icons-material/Chat";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "FixChat",
  description: "",
};

export async function DropdownMenuDemo() {
  const session = await auth();
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button className="">
          <AccountCircle
            fontSize="large"
            className="m-3 hover:scale-110 duration-500 transition-all"
          />
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56 bg-black text-white">
        <DropdownMenuLabel className="text-center">
          {session?.user?.name}
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <NavButton href="/dashboard">
            <DropdownMenuItem className="hover:bg-gray-800">
              <div className="flex space-x-4 space-y-[2px]">
                <User />
                <span>Profile</span>
                {/* <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut> */}
              </div>
            </DropdownMenuItem>
          </NavButton>

          <NavButton href="/billing" className="flex ">
            <DropdownMenuItem className="hover:bg-gray-800">
              <div className="flex space-x-4 space-y-[2px]">
                <CreditCard className="" />
                <span>Billing</span>
                {/* <DropdownMenuShortcut>⌘B</DropdownMenuShortcut> */}
              </div>
            </DropdownMenuItem>
          </NavButton>

          <NavButton href="/settings" className="flex items-center p-2 w-full">
            <DropdownMenuItem className="hover:bg-gray-800">
              <div className="flex space-x-4">
                <Settings />
                <span>Settings</span>
                {/* <DropdownMenuShortcut>⌘S</DropdownMenuShortcut> */}
              </div>
            </DropdownMenuItem>
          </NavButton>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuItem className="hover:bg-gray-800">
          <a href="/support" className="flex items-center p-2 w-full">
            <LifeBuoy className="mr-2 h-4 w-4" />
            <span>Support</span>
          </a>
        </DropdownMenuItem>
        {/* <DropdownMenuSeparator />
        <DropdownMenuItem className="hover:bg-gray-800">
          <a href="/" className="flex items-center p-2 w-full">
            <LogOut className="mr-2 h-4 w-4" fontSize="large" />
            <span>Log out</span>
            <SignOutButton />
            <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
          </a>
        </DropdownMenuItem> */}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

// const SideBarIcon = ({ icon, text }) => {
//   return (
//     <button className="sidebar-icon group">
//       {icon}
//       <span className="sidebar-tooltip group-hover:scale-100">{text}</span>
//     </button>
//   );
// };

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await auth();
  return (
    <html lang="en">
      <body className={inter.className}>
        <ParticlesBackrgound>
          <div className="flex justify-between bg-slate-800 backdrop-blur-sm bg-opacity-25">
            <NavButton href="/">
              <h1 className="font-extrabold text-center text-3xl p-2">
                Fix<span className="text-purple-600">Chat</span>
              </h1>
            </NavButton>
            {/* <SideBarIcon text="Fire" icon={<LoginIcon />} /> */}
            <div>
              {session?.user ? (
                <>
                  <DropdownMenuDemo />

                  <SignOutButtonLogo />
                </>
              ) : (
                <Link href="/sign-in">
                  {/* <Button
                    className="bg-purple-800 hover:bg-purple-900 rounded-3xl m-3"
                    variant="contained"
                    color="primary"
                    size="large"
                  >
                    Get Started
                  </Button> */}
                  <LoginIcon className="m-3" fontSize="large" />
                </Link>
              )}
            </div>
          </div>
          {session?.user ? (
            <NavButton href="/">
              {/* <SideBarIcon icon={<ChatIcon />} text="uhh" /> */}
              <Fab
                style={{
                  position: "fixed",
                  bottom: "16px",
                  right: "16px",
                }}
                className="bg-purple-800 bg-opacity-45 backdrop-blur-sm hover:scale-105 hover:bg-purple-800 transition-all duration-200"
                variant="extended"
                color="primary"
              >
                <ChatIcon />
                {/* <SideBarIcon icon={<ChatIcon />} text="Profile" /> */}
              </Fab>
            </NavButton>
          ) : (
            ""
          )}
          {children}
        </ParticlesBackrgound>
      </body>
    </html>
  );
}

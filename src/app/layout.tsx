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
        <AccountCircle fontSize="large" className="m-3" />
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56 bg-black text-white">
        <DropdownMenuLabel className="text-center">
          {session?.user?.name}
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem className="hover:bg-gray-800">
            <a href="/dashboard" className="flex items-center p-2 w-full">
              <User className="mr-2 h-4 w-4" />
              <span>Profile</span>
              <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>
            </a>
          </DropdownMenuItem>
          <DropdownMenuItem className="hover:bg-gray-800">
            <a href="/billing" className="flex items-center p-2 w-full">
              <CreditCard className="mr-2 h-4 w-4" />
              <span>Billing</span>
              <DropdownMenuShortcut>⌘B</DropdownMenuShortcut>
            </a>
          </DropdownMenuItem>
          <DropdownMenuItem className="hover:bg-gray-800">
            <a href="/settings" className="flex items-center p-2 w-full">
              <Settings className="mr-2 h-4 w-4" />
              <span>Settings</span>
              <DropdownMenuShortcut>⌘S</DropdownMenuShortcut>
            </a>
          </DropdownMenuItem>
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
          <div className="flex justify-between p-2">
            <a href="/">
              <h1 className="font-extrabold text-center text-3xl p-2">
                FixChat
              </h1>
              {/* <img
              className="h-auto max-w-[150px] w-full"
              src="/images/logo.png"
              alt="FixChat Logo"
            /> */}
            </a>
            <div>
              {session?.user ? (
                <>
                  {/* <a href="/dashboard">
                    <Button
                      className="bg-purple-800 hover:bg-purple-900 rounded-3xl m-2"
                      variant="contained"
                      color="primary"
                      size="large"
                    >
                      Dashboard
                    </Button>
                  </a> */}

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
            {/* <img className="rounded-full" src={session?.user?.image} alt="" /> */}
          </div>
          {children}
        </ParticlesBackrgound>
      </body>
    </html>
  );
}

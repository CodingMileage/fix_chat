import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import ParticlesBackrgound from "./components/ParticlesBackground";
import { auth } from "@/auth";
import { Button, Fab } from "@mui/material";
import LogoutIcon from "@mui/icons-material/Logout";
import SignOutButton from "./components/SignOutButton";
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

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "FixChat",
  description: "",
};

export function DropdownMenuDemo() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <AccountCircle />
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56 bg-black text-white">
        <DropdownMenuLabel>My Account</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem className="hover:bg-gray-800">
            <User className="mr-2 h-4 w-4" />
            <a href="/dashboard" className="">
              <span>Profile</span>
            </a>
            <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>
          </DropdownMenuItem>
          <DropdownMenuItem className="hover:bg-gray-800">
            <CreditCard className="mr-2 h-4 w-4" />
            <span>Billing</span>
            <DropdownMenuShortcut>⌘B</DropdownMenuShortcut>
          </DropdownMenuItem>
          <DropdownMenuItem className="hover:bg-gray-800">
            <Settings className="mr-2 h-4 w-4" />
            <span>Settings</span>
            <DropdownMenuShortcut>⌘S</DropdownMenuShortcut>
          </DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuSub>
            <DropdownMenuSubTrigger>
              <UserPlus className="mr-2 h-4 w-4" />
              <span>Invite users</span>
            </DropdownMenuSubTrigger>
            <DropdownMenuPortal>
              <DropdownMenuSubContent>
                <DropdownMenuItem className="hover:bg-gray-800">
                  <Mail className="mr-2 h-4 w-4" />
                  <span>Email</span>
                </DropdownMenuItem>
                <DropdownMenuItem className="hover:bg-gray-800">
                  <MessageSquare className="mr-2 h-4 w-4" />
                  <span>Message</span>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem className="hover:bg-gray-800">
                  <PlusCircle className="mr-2 h-4 w-4" />
                  <span>More...</span>
                </DropdownMenuItem>
              </DropdownMenuSubContent>
            </DropdownMenuPortal>
          </DropdownMenuSub>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuItem className="hover:bg-gray-800">
          <LifeBuoy className="mr-2 h-4 w-4" />
          <span>Support</span>
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem className="hover:bg-gray-800">
          <LogOut className="mr-2 h-4 w-4" />
          <span>Log out</span>
          <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
        </DropdownMenuItem>
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

                  <SignOutButton />
                </>
              ) : (
                ""
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

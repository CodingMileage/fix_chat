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
  return (
    <html lang="en">
      <body className={inter.className}>
        <ParticlesBackrgound>{children}</ParticlesBackrgound>
      </body>
    </html>
  );
}

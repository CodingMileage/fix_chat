import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import ParticlesBackrgound from "./components/ParticlesBackground";

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

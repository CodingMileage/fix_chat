import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import ParticlesBackrgound from "./components/ParticlesBackground";
import { auth } from "@/auth";
import { Button, Fab } from "@mui/material";
import LogoutIcon from "@mui/icons-material/Logout";
import SignOutButton from "./components/SignOutButton";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "FixChat",
  description: "",
};

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
                  <a href="/dashboard">
                    <Button
                      className="bg-purple-800 hover:bg-purple-900 rounded-3xl m-2"
                      variant="contained"
                      color="primary"
                      size="large"
                    >
                      Dashboard
                    </Button>
                  </a>
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

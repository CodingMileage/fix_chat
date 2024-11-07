import { Nav, NavLink } from "../../components/Nav";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import Header from "../sections/Header";
import { AuthProvider } from "@/context/AuthContext";

export const dynamic = "force-dynamic";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <AuthProvider>
      {/* <Header /> */}
      <NavBar />
      <div className="bg-gradient-to-b from-[#0e021a] to-[#1c0633] min-h-screen flex flex-col">
        {children}
        {/* <Footer /> */}
      </div>
    </AuthProvider>
  );
}

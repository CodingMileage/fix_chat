import { Nav, NavLink } from "../../components/Nav";
import Footer from "../components/Footer";
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
      <div className="bg-gradient-to-b from-[#0e021a] to-[#1c0633] min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
      </div>
    </AuthProvider>
  );
}

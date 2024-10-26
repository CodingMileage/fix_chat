import { Nav, NavLink } from "../../components/Nav";
import Header from "../sections/Header";
import { AuthProvider } from "@/context/AuthContext";

export const dynamic = "force-dynamic";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <AuthProvider>
        <div>
          <div className="bg-gradient-to-b from-[#0e021a] to-[#1c0633]">
            <Header />
            {children}
          </div>
        </div>
      </AuthProvider>
    </>
  );
}

import { Nav, NavLink } from "../../components/Nav";
import Footer from "../components/Footer";
import Header from "../sections/Header";

export const dynamic = "force-dynamic";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      {/* <AuthProvider> */}
      <div>
        <div className="bg-gradient-to-b from-[#0e021a] to-[#1c0633]">
          <Header />
          {children}
          <Footer />
        </div>
      </div>
      {/* </AuthProvider> */}
    </>
  );
}

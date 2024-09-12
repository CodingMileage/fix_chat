import { Nav, NavLink } from "../../components/Nav";

export const dynamic = "force-dynamic";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <div>
        <div className="bg-gradient-to-b from-[#0e021a] to-[#1c0633]">
          {children}
        </div>
      </div>
    </>
  );
}

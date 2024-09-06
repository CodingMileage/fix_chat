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
        {/* <Nav>
          <NavLink href="/">
            <h1 className="font-extrabold text-3xl">Home</h1>
          </NavLink>
          <NavLink href="/dashboard">
            <h1 className="font-extrabold text-3xl">Dashboard</h1>
          </NavLink>
        </Nav> */}
        <div className="">{children}</div>
      </div>
    </>
  );
}

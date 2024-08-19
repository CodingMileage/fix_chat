import { Nav, NavLink } from "../../components/Nav";

export const dynamic = "force-dynamic";

export default function AdminLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <div className="custom-container">
        <Nav>
          <NavLink href="/admin">
            <h1 className="font-extrabold text-3xl">Dashboard</h1>
          </NavLink>
          <NavLink href="/admin/users">
            <h1 className="font-extrabold text-3xl">Users</h1>
          </NavLink>
        </Nav>
        <div className="containter my-6">{children}</div>
      </div>
    </>
  );
}

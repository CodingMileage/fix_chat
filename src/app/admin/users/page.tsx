import db from "@/db/db";
import { PageHeader } from "../_components/pageHeader";
import { formatNumber, formatCurrency } from "@/lib/formaters";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
} from "@radix-ui/react-dropdown-menu";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { MoreVertical } from "lucide-react";
// import { getData } from "../page";

function getUsers() {
  return db.user.findMany({
    select: {
      id: true,
      email: true,
      premium: true,
    },
    orderBy: { createdAt: "desc" },
  });
}

export default async function AdminUserPage() {
  // const [user] = await Promise.all([getData()]);
  const userCount = await db.user.count();

  const premiumCount = await db.user.count({
    where: {
      premium: true,
    },
  });

  return (
    <>
      <div className="m-4 p-4 ">
        <PageHeader>Customers ({userCount})</PageHeader>
        <UsersTable />
      </div>
    </>
  );
}

async function UsersTable() {
  const users = await getUsers();

  if (users.length === 0) return <p>No customers found</p>;

  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Email</TableHead>
          <TableHead className="text-center">Premium</TableHead>
          <TableHead className="w-0">
            <span className="sr-only">Actions</span>
          </TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {users.map((user) => (
          <TableRow key={user.id}>
            <TableCell>{user.email}</TableCell>
            <TableCell className="text-center">
              {user.premium ? "Yes" : "No"}
            </TableCell>

            <TableCell className="text-center">
              <DropdownMenu>
                <DropdownMenuTrigger>
                  <MoreVertical />
                  <span className="sr-only">Actions</span>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  {/* <DeleteDropDownItem id={user.id} /> */}
                </DropdownMenuContent>
              </DropdownMenu>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}

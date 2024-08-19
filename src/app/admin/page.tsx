import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import db from "@/db/db";

export async function getData() {
  const userCount = await db.user.count();

  const premiumCount = await db.user.count({
    where: {
      premium: true,
    },
  });

  return {
    userCount,
    premiumCount,
  };
}

export default async function AdminDashboard() {
  const [user] = await Promise.all([getData()]);
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <DashboardCard
          users={user.userCount}
          premium={user.premiumCount}
          body="text"
        />
      </div>
    </>
  );
}

type DashboardProps = {
  users: number;
  premium: boolean;
  body: string;
};

function DashboardCard({ users, premium, body }: DashboardProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>You have {users} total users</CardTitle>
        {/* <CardDescription>{premium}</CardDescription> */}
      </CardHeader>
      <CardContent>
        <h2>You have {premium} premium users</h2>
      </CardContent>
    </Card>
  );
}

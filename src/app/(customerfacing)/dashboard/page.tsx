import { auth } from "@/auth";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

export default async function Dashboard() {
  const session = await auth();
  const userName = session?.user?.name || "User";
  const currentPlan = session?.user ? "Free" : "Premium";

  return (
    <div className="flex flex-col items-center justify-center min-h-screen ">
      <Card className="bg-slate-800 shadow-lg max-w-md w-full">
        <CardHeader className="text-center border-b border-gray-700">
          <h1 className="text-4xl font-bold text-white">
            Welcome, {userName}!
          </h1>
        </CardHeader>
        <CardContent className="p-6">
          <div className="text-center">
            <p className="text-xl text-gray-300">Your current plan:</p>
            <h2 className="text-2xl font-semibold text-white mt-2">
              {currentPlan}
            </h2>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

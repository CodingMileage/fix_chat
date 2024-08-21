import { auth } from "@/auth";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

export default async function Billing() {
  const session = await auth();
  const userName = session?.user?.name;

  return (
    <div className="rounded-3xl bg-slate-800 bg-opacity-30 backdrop-blur-[3px] m-20">
      <div className="flex flex-col items-center justify-center min-h-screen ">
        <Card className="bg-slate-800 bg-opacity-10 backdrop-blur-sm shadow-lg max-w-md w-full">
          <CardHeader className="text-center border-b border-gray-700">
            <h1 className="text-4xl font-bold text-white">
              Welcome, {userName}!
            </h1>
          </CardHeader>
        </Card>
      </div>
    </div>
  );
}

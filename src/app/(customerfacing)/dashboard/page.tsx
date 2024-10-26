// import { auth } from "@/auth";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { useAuth } from "@/context/AuthContext";

export default async function Dashboard() {
  // const session = await auth();
  // const userName = session?.user?.name;
  // const upgraded = session?.user?.premium;
  // const planName = upgraded ? "Premium" : "Basic";
  const { user } = useAuth();

  return (
    <div className="rounded-3xl bg-slate-700 bg-opacity-10 backdrop-blur-sm m-20">
      <div className="flex flex-col items-center justify-center min-h-screen ">
        <Card className="bg-slate-800 bg-opacity-10 backdrop-blur-sm shadow-lg max-w-md w-full">
          <CardHeader className="text-center border-b border-gray-700">
            <h1 className="text-4xl font-bold text-white">
              Welcome, {user.displayName}!
            </h1>
            {/* {upgraded && (
              <p className="text-sm text-gray-300">Upgraded to Premium</p>
            )} */}
          </CardHeader>
          <CardContent className="p-6">
            <div className="text-center">
              <p className="text-xl text-gray-300">Your current plan:</p>
              {/* <h2 className="text-2xl font-semibold text-white mt-2">
                {planName}
              </h2> */}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

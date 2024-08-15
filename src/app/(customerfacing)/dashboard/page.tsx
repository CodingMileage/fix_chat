import { auth } from "@/auth";

export default async function Dashboard() {
  const session = await auth();
  return (
    <>
      <h1>Hi {session?.user?.name}</h1>
      <h1>Current Plan: {session?.user ? "Free" : "Premium"}</h1>
    </>
  );
}

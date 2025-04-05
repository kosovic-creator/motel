/* eslint-disable @typescript-eslint/no-unused-vars */
import { SignOut } from "@/components/sign-out";
import { auth } from "@/lib/auth";
// import { Home } from "lucide-react";
import { redirect } from "next/navigation";
import Home from "@/app/(root)/home/page";

const Page = async () => {
  const session = await auth();
  console.log ('SESIJA JE  ',session?.user?.name);
  // if (!session) redirect("/sign-in");

  return (
    <>
    {/* //   <div className="bg-gray-100 rounded-lg p-4 text-center mb-6">
    //     <p className="text-gray-600">Signed in as:</p>
    //     <p className="font-medium">{session.user?.email}</p>
    //   </div> */}

      <Home />
    </>
  );
};

export default Page;

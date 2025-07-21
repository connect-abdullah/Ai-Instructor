import { SignIn } from "@clerk/nextjs";
import { currentUser } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

const SignInPage = async () => {
  const user = await currentUser();
  
  if (user) {
    redirect("/");
  }

  return (
    <main className="flex items-center justify-center">
      <SignIn />
    </main>
  );
};

export default SignInPage;
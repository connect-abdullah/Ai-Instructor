import Image from "next/image";
import Link from "next/link";
import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import NavItems from "./NavItems";

const Navbar = () => {
  return (
    <nav className="navbar">
      <Link href="/">
        <div className="flex items-center gap-2.5 cursor-pointer">
          <Image 
            src="/images/logo.svg" 
            alt="logo" 
            width={56} 
            height={50}
            className="max-sm:w-8 max-sm:h-8" 
          />
        </div>
      </Link>

      <div className="flex items-center gap-8 max-sm:gap-2">
        <NavItems />
        <SignedOut>
          <SignInButton mode="modal">
            <button className="btn-signin max-sm:px-2 max-sm:py-1 max-sm:text-[8px]">
              Sign In
            </button>
          </SignInButton>
        </SignedOut>
        <SignedIn>
          <UserButton afterSignOutUrl="/" />
        </SignedIn>
      </div>
    </nav>
  );
};

export default Navbar;

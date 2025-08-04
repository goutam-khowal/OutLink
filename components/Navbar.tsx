import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import { Button } from "@/components/ui/button";
import SearchInput from "./SearchInput";
import NavItems from "./NavItems";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="fixed w-full bg-white z-50 shadow-sm">
      <div className="flex items-center max-w-6xl justify-between h-14 mx-auto px-3">
        <div className="flex items-center gap-2">
          <h1 className="font-bold text-xl text-blue-500">
            <Link href={"/"}>
              <i className="ri-donut-chart-fill"></i>ut
              <span className="font-bold text-xl text-gray-700">Link</span>
            </Link>
          </h1>

          <div className="hidden md:block">
            <SearchInput />
          </div>
        </div>

        <div className="flex items-center gap-x-5">
          <div className="hidden md:block">
            <NavItems />
          </div>
          <div className="flex gap-x-2">
            <SignedOut>
              <SignInButton>
                <Button>Sign in</Button>
              </SignInButton>
            </SignedOut>
            <SignedIn>
              <UserButton />
            </SignedIn>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

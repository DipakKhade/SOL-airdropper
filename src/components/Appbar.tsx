"use client";
import { signIn, signOut, useSession } from "next-auth/react";
import { Button } from "./ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import Link from "next/link";
import { CloudSunIcon } from "lucide-react";

export default function Apppbar() {
  const session = useSession();

  return (
    <>
       <header className="px-4 lg:px-6 h-14 flex items-center">
        <Link href="/" className="flex items-center justify-center" prefetch={false}>
          <CloudSunIcon className="h-6 w-6 text-blue-600" />
          <div className="hidden md:block text-bold lg:text-xl px-3">Air Drop</div>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6 pt-4">
          <Link href="#features" className="text-sm font-medium hover:underline underline-offset-4 pt-2" prefetch={false}>
            Features
          </Link>
          <Link href="#faq" className="text-sm font-medium hover:underline underline-offset-4 pt-2" prefetch={false}>
            FAQ
          </Link>
          <Link href="https://dipakkhade-dev.vercel.app/contact" className="text-sm font-medium hover:underline underline-offset-4 pt-2" prefetch={false}>
            About
          </Link>
          {session.data?.user ? (
            <div className="flex space-x-2">
              <Avatar>
                <AvatarImage
                  src={session.data.user.image as string}
                  alt="img"
                />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
              <Button onClick={() => signOut()}>sign out</Button>
            </div>
          ) : (
            <Button onClick={() => signIn("google")}>sign in</Button>
          )}
        </nav>
      </header>
     
    </>
  );
}

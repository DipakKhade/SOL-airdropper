"use client";
import { signIn, signOut, useSession } from "next-auth/react";
import { Button } from "./ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";

export default function Apppbar() {
  const session = useSession();
  console.log(session);

  return (
    <>
      <nav className="flex justify-between border border-slate-400 h-16">
        <div className="pt-2 text-3xl">SOL AirDropper</div>
        <div className="pr-2 pt-2">
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
        </div>
      </nav>
    </>
  );
}

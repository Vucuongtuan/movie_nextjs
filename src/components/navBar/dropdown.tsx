"use client";
import React, { useCallback } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Image from "next/image";
import { signOut, useSession } from "next-auth/react";
import { toast } from "../ui/use-toast";

export default function Dropdown() {
  const { data: session, status } = useSession();
  const drop = () => (
    <>
      {status === "authenticated" ? (
        <div className=" w-[40px]  h-[40px] rounded-full overflow-hidden  cursor-pointer">
          <Image
            src={(session.user && session?.user.image) ?? "/user.jpg"}
            alt={"user"}
            width={150}
            height={150}
            className="w-full h-full "
          />
        </div>
      ) : null}
    </>
  );
  const handleLogOut = useCallback(async () => {
    await signOut();
    toast({
      title: "Đăng xuất thành công",
    });
  }, []);
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>{drop()}</DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuLabel>
          {session && session.user && session.user.name}
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem>Team</DropdownMenuItem>
        <DropdownMenuItem onClick={handleLogOut}>Đăng xuất</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

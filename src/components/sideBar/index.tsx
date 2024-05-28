"use client";
import { RootState } from "@/lib/redux";
import { changeAction } from "@/lib/redux/sideBarReducer";
import { signOut, useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button } from "../ui/button";
import { useToast } from "../ui/use-toast";
import Cookies from "js-cookie";
import LinkRouter from "./linkRouter";
export default function SideBar({ action }: { action: boolean }) {
  return (
    <div
      className={`w-1/6 h-full max-w-[300px] fixed top-0 left-0 border-r-2 border-[rgba(255, 255, 255, 0.6576681698069853)]  transition-all duration-500 hidden md:block ${
        action ? ` w-[5%] min-md:max-lg:min-w-[50px] ` : ""
      }`}
    >
      <div className="w-full h-1/6 px-2  overflow-hidden">
        <div className="flex justify-center items-center py-4 transition-all duration-200 overflow-hidden">
          <Image
            src={"/logo-512x512.png"}
            alt={"TC Phim"}
            height={512}
            width={512}
            className={`h-full  pl-2 ${action ? "w-full" : "w-1/2"}`}
          />
          <span className={`xl:text-5xl md:text-2xl ${action ? "hidden" : ""}`}>
            PHIM
          </span>
        </div>
      </div>
      <LinkRouter action={action} />
    </div>
  );
}

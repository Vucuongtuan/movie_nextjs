"use client";
import Link from "next/link";
import React from "react";
import { useSelector } from "react-redux";
import { usePathname } from "next/navigation";
export default function NavMenu() {
  const pathName = usePathname();

  const page = useSelector((state: any) => state.page.value);
  return (
    <nav className="h-full w-full pt-2 flex space-x-4 px-4 text-xl  min-[200px]:max-md:w-full">
      <li>
        <Link
          href="/"
          className={`${
            pathName === "/"
              ? "text-xl border-b-[3px] group  border-red-600"
              : "text-sm text-[#989898]"
          }`}
        >
          Phim bộ
        </Link>
      </li>
      <li>
        <Link
          href="/phim-le"
          className={`${
            pathName === "/phim-le"
              ? "text-xl border-b-2 border-red-600"
              : "text-sm text-[#989898]"
          }`}
        >
          Phim lẻ
        </Link>
      </li>
      <li>
        {" "}
        <Link
          href="/hoat-hinh"
          className={`${
            pathName === "/hoat-hinh"
              ? "text-xl border-b-2 border-red-600"
              : "text-sm text-[#989898]"
          }`}
        >
          Hoạt hình
        </Link>
      </li>
      <li>
        {" "}
        <Link
          href="/loc-phim"
          className={`${
            pathName === "/loc-phim"
              ? "text-xl border-b-2 border-red-600"
              : "text-sm text-[#989898]"
          }`}
        >
          Lọc phim
        </Link>
      </li>
    </nav>
  );
}

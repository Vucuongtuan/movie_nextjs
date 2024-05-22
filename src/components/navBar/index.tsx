import Link from "next/link";
import React from "react";
import { useSelector } from "react-redux";
import { ModeToggle } from "../ModeToggle";
import { usePathname } from "next/navigation";
import Search from "./search";
import Image from "next/image";
import Dropdown from "./dropdown";

export default function NavBar() {
  const pathName = usePathname();
  const page = useSelector((state: any) => state.page.value);
  return (
    <header className="w-full h-full flex mb-2  pt-3 min-[200px]:max-md:flex-col-reverse min-[200px]:max-md:mb-3">
      <div className="w-1/2 h-full flex min-[200px]:max-md:w-full ">
        <nav className="h-full w-full flex space-x-4 px-4 text-xl  min-[200px]:max-md:w-full">
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
      </div>
      <div className=" h-full flex-grow  flex justify-end px-4 min-[200px]:max-md:w-full">
        <div className="logo w-1/3 hidden min-[200px]:max-md:block">
          TC Phim
        </div>
        <div className="w-1/3 ">
          <Search />
        </div>
        <ModeToggle />
        <Dropdown />
      </div>
    </header>
  );
}

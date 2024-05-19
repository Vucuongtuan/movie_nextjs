import Link from "next/link";
import React from "react";
import { useSelector } from "react-redux";
import { ModeToggle } from "../ModeToggle";
import { usePathname } from "next/navigation";
import Search from "./search";

export default function NavBar() {
  const pathName = usePathname();

  const page = useSelector((state: any) => state.page.value);
  return (
    <header className="w-full h-full flex mb-2  pt-3 min-[200px]:max-md:flex-col-reverse min-[200px]:max-md:mb-3">
      <div className="w-3/4 h-full min-[200px]:max-md:w-full">
        <nav className="h-full w-1/3 flex space-x-4 px-4 text-xl  min-[200px]:max-md:w-full">
          <li>
            <Link
              href="/"
              className={`${
                pathName === "/"
                  ? "text-xl border-b-2 border-red-600"
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
              href="/the-loai"
              className={`${
                pathName === "/the-loai"
                  ? "text-xl border-b-2 border-red-600"
                  : "text-sm text-[#989898]"
              }`}
            >
              Thể loại
            </Link>
          </li>
        </nav>
      </div>
      <div className="w-1/4 h-full flex justify-end px-4 min-[200px]:max-md:w-full">
        <div className="logo w-1/3 hidden min-[200px]:max-md:block">
          TC Phim
        </div>
        <Search />

        <ModeToggle />
      </div>
    </header>
  );
}

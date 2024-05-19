"use client";
import { RootState } from "@/lib/redux";
import { changeAction } from "@/lib/redux/sideBarReducer";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

export default function SideBar({ action }: { action: boolean }) {
  const dispatch = useDispatch();
  const pathName = usePathname();
  const handleActionSidebar = () => {
    dispatch(changeAction(!action));
  };

  return (
    <div
      className={`w-1/6 h-full fixed top-0 left-0 border-r-2 border-[rgba(255, 255, 255, 0.6576681698069853)]  transition-all duration-500 hidden md:block ${
        action ? ` w-[5%] ` : ""
      }`}
    >
      <div className="w-full h-1/6">asd</div>
      <ul className="h-4/6 w-full px-2 text-xl font-semibold space-y-4">
        <li
          className={`w-full  p-2  rounded-md ${
            pathName === "/" ? "bg-red-600" : null
          }`}
        >
          <Link href="/" className=" w-full flex items-center overflow-hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6 mx-2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
              />
            </svg>
            {action ? <></> : <span>Trang chủ</span>}
          </Link>
        </li>
        <li
          className={`w-full  p-2  rounded-md ${
            pathName === "/search" ? "bg-red-600" : null
          }`}
        >
          <Link
            href="/search"
            className=" w-full flex items-center overflow-hidden"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6 mx-2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
              />
            </svg>
            {action ? <></> : <span> Tìm kiếm</span>}
          </Link>
        </li>
        <li
          className={`w-full  p-2  rounded-md ${
            pathName === "/danh-sach" ? "bg-red-600" : null
          }`}
        >
          <Link
            href="/danh-sach"
            className=" w-full flex items-center overflow-hidden"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6 mx-2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 0 0 2.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 0 0-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75 2.25 2.25 0 0 0-.1-.664m-5.8 0A2.251 2.251 0 0 1 13.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25ZM6.75 12h.008v.008H6.75V12Zm0 3h.008v.008H6.75V15Zm0 3h.008v.008H6.75V18Z"
              />
            </svg>{" "}
            {action ? <></> : <span> Danh sách</span>}
          </Link>
        </li>
      </ul>
      <div className="w-full h-1/6 flex justify-center items-end p-4 transition-all duration-200">
        {" "}
        <div
          className={`h-[30px] w-full flex   ${
            action ? " justify-center" : "justify-end"
          }`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-8 h-8 cursor-pointer  rounded-full  hover:bg-[#DB3F41] "
            onClick={handleActionSidebar}
          >
            {" "}
            {action ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m12.75 15 3-3m0 0-3-3m3 3h-7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m11.25 9-3 3m0 0 3 3m-3-3h7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
              />
            )}
          </svg>
        </div>
      </div>
    </div>
  );
}

"use client";
import { AuroraBackground } from "@/components/ui/aurora-background";
import { Button } from "@/components/ui/button";
import { useSession, signIn, signOut } from "next-auth/react";
import { useToast } from "@/components/ui/use-toast";
import Link from "next/link";
import React, { useCallback, useState } from "react";
import { Login, LoginFacebook, sendOtp } from "@/api/auth.api";
import { useDispatch, useSelector } from "react-redux";
import { auth_login, auth_logout } from "@/lib/redux/auth";
import { RootState } from "@/lib/redux";
import { useRouter } from "next/navigation";

export default function FormSignup() {
  const { toast } = useToast();
  const dispatch = useDispatch();
  const router = useRouter();
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [changEmail, setChangEmail] = useState<string>("");
  const handleSubmit = useCallback(async (e: any) => {
    e.preventDefault();
    try {
      const values = e.target;
      const res = await Login(values.tk.value, values.mk.value);

      toast({
        title: values.tk.value + " | " + values.mk.value,
        description: JSON.stringify(res),
      });
    } catch (err) {
      toast({
        title: "Không thể đăng nhập, kiểm tra lại tk và mk",
        variant: "destructive",
      });
    }
  }, []);

  const { data: session, status } = useSession();

  const handleSendOtp = useCallback(async (e: any) => {
    e.preventDefault();
    // if(changEmail.length )
    // const res =  await sendOtp()
  }, []);
  return (
    <>
      <form action="" className="mt-4 text-lg" onSubmit={handleSubmit}>
        <label htmlFor="Tên đăng nhập">Tên đăng nhập</label>
        <p>
          <input
            type="text"
            name="name"
            className="py-2 px-2 my-2 w-full outline-none rounded-lg"
          />
        </p>
        <label htmlFor="Email">Email</label>
        <p>
          <input
            type="email"
            name="email"
            className="py-2 px-2 my-2 w-full outline-none rounded-lg"
          />
        </p>
        <label htmlFor="Mật khẩu">Mật khẩu</label>
        <p className=" relative">
          <input
            name="password"
            type={!showPassword ? "password" : "text"}
            className="py-2 px-2 my-2 w-full outline-none rounded-lg"
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            onClick={() => setShowPassword(!showPassword)}
            className="w-6 h-6 absolute top-5 right-3 cursor-pointer"
          >
            {showPassword ? (
              <>
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                />
              </>
            ) : (
              <>
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.98 8.223A10.477 10.477 0 0 0 1.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.451 10.451 0 0 1 12 4.5c4.756 0 8.773 3.162 10.065 7.498a10.522 10.522 0 0 1-4.293 5.774M6.228 6.228 3 3m3.228 3.228 3.65 3.65m7.894 7.894L21 21m-3.228-3.228-3.65-3.65m0 0a3 3 0 1 0-4.243-4.243m4.242 4.242L9.88 9.88"
                />
              </>
            )}
          </svg>
        </p>
        <label htmlFor="OTP">OTP</label>
        <p className="flexs">
          <input
            type="text"
            name="otp"
            className="py-2 px-2 my-2 w-2/3 outline-none rounded-lg"
          />
          <button
            onClick={(e) => handleSendOtp(e)}
            className="px-4 py-1 border-2 rounded-lg  mx-4"
          >
            Lấy otp
          </button>
        </p>
        <button
          type="submit"
          className="px-4 py-1 border-2 rounded-lg w-full font-bold my-2 dark:bg-black bg-white"
        >
          Đăng ký
        </button>
      </form>
    </>
  );
}

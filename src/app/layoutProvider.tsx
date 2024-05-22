"use client";
import NavBar from "@/components/navBar";
import SideBar from "@/components/sideBar";
import store, { AppStore, RootState } from "@/lib/redux";
import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import { Provider, useDispatch, useSelector } from "react-redux";
import Transition from "./transition";
import { ThemeProvider } from "@/components/theme-provider";
import { usePathname } from "next/navigation";
import { Toaster } from "@/components/ui/toaster";
import { SessionProvider, useSession } from "next-auth/react";
import { useToast } from "@/components/ui/use-toast";
import { LoginFacebook } from "@/api/auth.api";
import { auth_login, auth_logout } from "@/lib/redux/auth";

const ProviderLayout = ({ children }: { children: React.ReactNode }) => {
  const storeRef = useRef<AppStore>(store());
  return (
    <SessionProvider>
      <Provider store={storeRef.current}>{children}</Provider>
    </SessionProvider>
  );
};

export default function LayoutProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ProviderLayout>
      <LayoutWithProvider>{children}</LayoutWithProvider>
    </ProviderLayout>
  );
}

const LayoutWithProvider = ({ children }: { children: React.ReactNode }) => {
  const action = useSelector(
    (state: RootState) => state.actionSideBar.action
  ) as boolean;
  const pathName = usePathname();
  const { toast } = useToast();
  const { data: session, status } = useSession();
  const dispatch = useDispatch();
  useLayoutEffect(() => {
    const auth = async () => {
      if (status === "loading") {
        return;
      }

      if (status === "unauthenticated") {
        toast({
          title: "Không thể đăng nhập, vui lòng thử lại sau",
        });
        return;
      }

      if (status === "authenticated" && session?.user) {
        const res = await LoginFacebook(
          session?.user?.email ?? "",
          session?.user?.name ?? ""
        );
        if (res.status === "success") {
          toast({
            title: "Đăng nhập thành công",
            description: `Xin chào ${session.user.name}`,
          });
          dispatch(auth_login(res.data));
        } else {
          dispatch(auth_logout());
          toast({
            title: "Đăng xuất thành công",
          });
        }
      }
    };

    auth();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [status]);
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
      <div className="w-full h-full  bg-[#f8fafc] dark:bg-[#1c1c1e]">
        <SideBar action={action} />
        <div
          className={` h-full float-right transition-all duration-500 w-full ${
            action ? "w-[100%] md:w-[95%]" : "w-[100%] md:w-[83.333333%] "
          }   `}
          // style={action ? { width: "95%" } : { width: "83.333333%" }}
        >
          <NavBar />
          <Transition>{children}</Transition>
        </div>
      </div>{" "}
      <Toaster />
    </ThemeProvider>
  );
};

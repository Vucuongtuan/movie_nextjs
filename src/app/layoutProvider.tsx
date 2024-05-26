"use client";
import SideBar from "@/components/sideBar";
import store, { AppStore, RootState } from "@/lib/redux";
import React, { useRef } from "react";
import { Provider, useSelector } from "react-redux";
import Transition from "./transition";

import { Toaster } from "@/components/ui/toaster";
import { SessionProvider, useSession } from "next-auth/react";
import NavBar from "@/components/navBar";

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

  return (
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
        <Toaster />
      </div>
    </div>
  );
};

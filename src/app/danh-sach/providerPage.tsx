"use client";
import React, {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
import ListMoviePage from "./page";
import { useRouter } from "next/navigation";
import NotFound from "./notFound";
import { Skeleton } from "@/components/ui/skeleton";
export default function ProviderPage({ children }: { children: ReactNode }) {
  const [loading, setLoading] = useState<boolean>(true);
  const [id, setId] = useState<any>("");
  const router = useRouter();
  useEffect(() => {
    const id =
      typeof window !== "undefined"
        ? JSON.parse(localStorage.getItem("profileUser") ?? "")
        : "";
    if (id) {
      setId(id);
      setLoading(false);
    } else {
      setId(null);
      setLoading(false);
    }
  }, []);
  if (id === null) {
    return <NotFound />;
  }
  if (loading) {
    return (
      <main className="w-full h-[91vh] px-2">
        <Skeleton className="h-full w-full rounded-md" />
      </main>
    );
  }
  return (
    <>
      <ListMoviePage id={id} />
    </>
  );
}

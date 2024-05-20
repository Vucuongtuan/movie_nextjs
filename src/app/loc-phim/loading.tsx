import { Skeleton } from "@/components/ui/skeleton";
import React from "react";

export default function LoadingLoc() {
  const item: number = 24;
  return (
    <div className="w-full h-[2000px] ">
      <section className="w-full h-full grid gap-4 xl:grid-cols-5 ">
        {Array(item)
          .fill(0)
          .map((_, index) => (
            <div
              key={index + 1}
              className="h-[484px] w-[288px] shadow-xl rounded-md overflow-hidden"
            >
              <Skeleton className="w-full h-full" />
            </div>
          ))}
      </section>
    </div>
  );
}

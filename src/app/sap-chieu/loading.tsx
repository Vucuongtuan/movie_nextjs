import { Skeleton } from "@/components/ui/skeleton";
import React from "react";

export default function Loading() {
  return (
    <main className="px-2 ">
      <section className="w-full h-full grid gap-4 xl:grid-cols-5  lg:grid-cols-4 md:grid-cols-3 min-[200px]:max-md:grid-cols-3">
        {Array(24)
          .fill(0)
          .map((_, index) => (
            <Skeleton
              className="w-full  h-[484px] rounded-md overflow-hidden relative min-[200px]:max-md:h-[280px]"
              key={index}
            />
          ))}
      </section>
    </main>
  );
}

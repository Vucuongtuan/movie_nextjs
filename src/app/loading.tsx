import { Skeleton } from "@/components/ui/skeleton";
import React from "react";

export default function loading() {
  return (
    <div className="h-[91vh] w-full ">
      <div className="px-2 w-full h-full">
        <Skeleton className="w-full h-full" />
      </div>
    </div>
  );
}

import { getMovieSapChieu } from "@/api/movie.api";
import React from "react";
import Transition from "../transition";
import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";
import Image from "next/image";
import PaginationLoc from "@/components/pagination/pagination";
import PaginationLayout from "./paginationLayout";

export default async function SapChieuPage({
  searchParams,
}: {
  searchParams: { page: string };
}) {
  const res = await getMovieSapChieu(searchParams.page || "1");

  return (
    <main className="w-full h-auto min-h-[90vh] px-2">
      <section className="w-full h-full grid gap-4 xl:grid-cols-5  lg:grid-cols-4 md:grid-cols-3 min-[200px]:max-md:grid-cols-3">
        {res.data.items.map((item: any, index: number) => (
          <Transition key={item._id} index={index}>
            <Card className="h-[484px] rounded-md overflow-hidden relative min-[200px]:max-md:h-[280px]">
              <CardContent className="h-full  w-full flex flex-col aspect-square items-center justify-center ">
                <Link href={"/details/" + item.slug} className="w-full h-full">
                  <Image
                    src={process.env.BASE_IMAGE_URL + item.thumb_url}
                    alt={item.name}
                    width={175}
                    height={270}
                    loading="lazy"
                    className="w-full h-5/6"
                  />
                  <span className="h-1/6  w-full p-1 text-md font-semibold min-[200px]:max-md:text-[0.8rem]">
                    {item.name}
                  </span>
                </Link>
              </CardContent>
              <div className="h-6 text-sm w-full flex justify-between pt-1 px-1 absolute top-0 right-0 dark:text-white font-[500] min-[200px]:max-md:text-[0.5rem]">
                {item.episode_current.length > 8 ? (
                  <span className="bg-white dark:bg-[#1f1f1f] h-full rounded-full px-2">
                    {item.episode_current.slice(0, 8)}
                  </span>
                ) : (
                  <span className="bg-white dark:bg-[#1f1f1f] h-full rounded-full px-2">
                    {item.episode_current}
                  </span>
                )}

                <span className="bg-white dark:bg-[#1f1f1f] h-full rounded-full px-2">
                  {item.lang} / {item.year}
                </span>
              </div>
            </Card>
          </Transition>
        ))}
      </section>
      <section>
        <PaginationLayout
          totalPage={res.data.params.pagination.totalItemsPerPage}
        />
      </section>
    </main>
  );
}

import { getMovieByOption } from "@/api/movie.api";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default async function LocMovieType({
  params,
  searchParams,
}: {
  params: { type: string };
  searchParams: {
    country: string;
    category: string;
    year: string;
    page: string;
  };
}) {
  const res = await getMovieByOption(
    params.type,
    searchParams.category,
    searchParams.country,
    searchParams.year,
    searchParams.page
  );
  const data = res.data.items;
  return (
    <div className="w-full h-auto min-h-[700px]  ">
      <section className="w-full h-full grid gap-4 xl:grid-cols-5 ">
        {data.map((item: any) => (
          <Card
            className="h-[404px] rounded-md overflow-hidden relative"
            key={item._id}
          >
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
                <span className="h-1/6  w-full p-1 text-md font-semibold">
                  {item.name}
                </span>
              </Link>
            </CardContent>
            <div className="h-6 text-sm w-full flex justify-between pt-1 px-1 absolute top-0 right-0 dark:text-white font-[500]">
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
        ))}
      </section>
    </div>
  );
}

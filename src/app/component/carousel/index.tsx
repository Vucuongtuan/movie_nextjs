import * as React from "react";

import { Card, CardContent, CardTitle } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { IMovieData } from "@/types/movie.types";
import Image from "next/image";
import Link from "next/link";

export default function CarouselSize({ data }: { data: any }) {
  return (
    <Carousel
      opts={{
        align: "start",
      }}
      className="w-full h-full px-2 carousel_custom "
    >
      <CarouselContent>
        {data &&
          data.data.items &&
          data.data.items.map((item: IMovieData, index: number) => (
            <CarouselItem
              key={index}
              className="basis-1/3 min-[200px]:max-md:basis-1/3 lg:basis-1/5 xl:basis-1/6 sm:basis-1/3 md:basis-1/4 mb:basis:1/2   group"
            >
              <div className=" h-full">
                <Card
                  className="h-full  rounded-md overflow-hidden relative "
                  key={item._id}
                >
                  <CardContent className="h-full  w-full flex flex-col aspect-square items-center justify-center ">
                    <Link
                      href={"/details/" + item.slug}
                      className="w-full h-full"
                    >
                      <Image
                        src={process.env.BASE_IMAGE_URL + item.thumb_url}
                        alt={item.name}
                        width={256}
                        height={384}
                        // placeholder="blur"
                        loading="lazy"
                        className="w-full h-5/6 min-[200px]:max-md:h-[82%]"
                      />
                      <div className="h-1/6  w-full p-1 text-md font-semibold min-[200px]:max-md:text-[0.7rem] min-[200px]:max-md:h-[18%]">
                        <span> {item.name}</span>
                      </div>
                    </Link>
                  </CardContent>
                  <div className="h-6 text-sm w-full flex justify-between md:pt-1 md:px-1 absolute top-0 right-0 a dark:text-white font-[500] min-[200px]:max-md: min-[200px]:max-md:text-[0.5rem]">
                    {item.episode_current.length > 8 ? (
                      <span className="bg-white dark:bg-[#1f1f1f] h-full rounded-full px-1 font-[0.6rem]">
                        {item.episode_current.slice(0, 8)}
                      </span>
                    ) : (
                      <span className="bg-white dark:bg-[#1f1f1f] h-full rounded-full px-2">
                        {item.episode_current}
                      </span>
                    )}

                    <span className="bg-white dark:bg-[#1f1f1f] h-full rounded-full px-2">
                      <span className="max-md:hidden">{item.lang}/</span>
                      {item.year}
                    </span>
                  </div>
                </Card>
              </div>
            </CarouselItem>
          ))}
      </CarouselContent>
      <CarouselPrevious className=" absolute" />
      <CarouselNext />
    </Carousel>
  );
}

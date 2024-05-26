import React from "react";

import { IMovieData } from "@/types/movie.types";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";
import Link from "next/link";

export default function CarouselSlide({ data }: { data: any }) {
  return (
    <>
      <Carousel className="w-full h-full slideShow rounded-md">
        <CarouselContent>
          {data.items.map((item: IMovieData, index: number) => (
            <CarouselItem key={item._id}>
              <Link href={`/details/${item.slug}`}>
                <div className="p-1">
                  <Card>
                    <CardContent className="flex w-full aspect-square items-center justify-center p-6 rounded-md relative ">
                      <Image
                        src={process.env.BASE_IMAGE_URL + item.poster_url}
                        alt={item.name}
                        width={476}
                        height={267}
                        sizes="100vw"
                        loading="lazy"
                        className="h-full w-full object-cover object-top rounded-md transition-all duration-500"
                      />
                      <div
                        className="absolute h-full   top-0 left-0 bg-gradient-to-r  from-[rgba(0,0,0,0.8453432398349965)] via-[rgba(0,0,0,0.6576681698069853)] to-transparent"
                        style={{ width: "100%" }}
                      >
                        <div
                          className="w-1/2 h-full  flex flex-col justify-end       py-6 ml-5 "
                          style={{ width: "50%" }}
                        >
                          <p>
                            <h3 className="text-4xl font-bold text-white">
                              {item.name}
                            </h3>
                          </p>
                          <p>
                            <label
                              className="text-lg text-white"
                              htmlFor={item.origin_name}
                            >
                              {item.origin_name}
                            </label>
                          </p>
                          <p className="text-[#909090]">
                            <span className="">{item.episode_current}</span>
                            {"  | "}
                            <span className="">{item.time}</span>
                            {"  | "}
                            <span className="">{item.year}</span>
                            {"  | "}
                            <span className="">{item.lang}</span>
                          </p>{" "}
                          <p className="text-[#909090]">
                            {item.country.map((country) => (
                              <span key={country.id}>
                                Quốc gia : {country.name}
                              </span>
                            ))}
                          </p>
                          <p className="flex flex-wrap mt-2 text-[#909090]">
                            {item.category.map((category) => (
                              <Link
                                href={`/the-loai/${category.slug}`}
                                key={category.id}
                                className="w-auto h-auto min-w-[80px] mr-2 mb-2 px-2 min-h-[20px] text-center rounded-full border border-[#909090]"
                              >
                                {category.name}
                              </Link>
                            ))}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </Link>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="left-[93%] top-[95%] min-[200px]:max-lg:left-[83%] min-[200px]:max-lg:top-[92%]" />
        <CarouselNext className=" top-[95%] min-[200px]:max-lg:top-[92%]" />
      </Carousel>
    </>
  );
}

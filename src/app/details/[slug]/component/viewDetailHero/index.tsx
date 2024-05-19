"use client";
import { useToast } from "@/components/ui/use-toast";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

export default function ViewDetailsHero({
  data,
  url,
}: {
  data: any;
  url: string | undefined;
}) {
  const { toast } = useToast();
  const [onTrailer, setOnTrailer] = useState<boolean>(false);
  const trailerFrame = (): any => {
    return (
      <iframe
        width="auto"
        height="500"
        src={data.item.trailer_url
          .replace("https://www.youtube.com", "https://www.youtube.com/embed")
          .replace("/watch?v=", "/")}
        title={data.item.name}
        allow="autoplay"
        className="w-full h-full object-cover rounded-md"
      ></iframe>
    );
  };

  return (
    <div className="h-auto w-full relative">
      <section
        className={`w-full ${
          onTrailer ? "h-[500px]" : "h-[470px]"
        } transition-all duration-500  flex relative my-2 `}
      >
        {onTrailer ? (
          data.item.trailer_url.length > 1 ? (
            trailerFrame()
          ) : (
            <>
              <Image
                src={url + data.item.poster_url}
                alt={data.item.name}
                height={900}
                width={1200}
                className="h-full w-full  object-cover object-center rounded-md "
              />
            </>
          )
        ) : (
          <>
            <div className="w-full h-full relative">
              <Image
                src={url + data.item.poster_url}
                alt={data.item.name}
                height={900}
                width={1200}
                className="h-full w-full  object-cover object-top rounded-md brightness-50"
              />{" "}
              <div className=" absolute w-full z-10 h-1/6 bottom-0 bg-gradient-to-t from-[rgb(255,255,255)] via-[rgba(255,255,255,0.69)] to-[rgba(0,0,0,0)] dark:from-[rgb(0,0,0)] dark:via-[rgba(0,0,0,0.69)] dark:to-[rgba(0,0,0,0)]"></div>
            </div>
            <div className="absolute h-full w-full flex justify-center items-center group  z-9 ">
              <div className="h-32 w-32">
                {" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className=" w-32 h-32 group-hover:text-green-500 cursor-pointer"
                  onClick={() => setOnTrailer(true)}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15.91 11.672a.375.375 0 0 1 0 .656l-5.603 3.113a.375.375 0 0 1-.557-.328V8.887c0-.286.307-.466.557-.327l5.603 3.112Z"
                  />
                </svg>
              </div>
            </div>
          </>
        )}
      </section>
      <section
        className={`h-[400px] w-full px-4 flex min-[200px]:max-lg:flex-col  transition-all absolute  duration-500 z-50 ${
          onTrailer ? "mt-0" : "-mt-36"
        }`}
      >
        <div className="w-[18%] h-full xl:[w-18%] lg:w-[18%] lg:max-xl:w-[22%] md:w-[30%] min-[200px]:max-lg:m-auto min-[200px]:max-lg:w-[60%]">
          <Image
            src={url + data.item.thumb_url}
            alt={data.item.name}
            width={200}
            height={400}
            className="w-full h-[85%] rounded-md"
          />
          <div className="h-[15%]  w-full ">
            <Link
              href={`/phim/${data.item.slug}/${
                data.item.episodes[0].server_data[0].slug === "full"
                  ? "full"
                  : `tap-1`
              }`}
              className=" w-full h-[100%] py-2 bg-red-500 rounded-md hover:bg-red-600"
            >
              <button className="w-full h-[100%]">Xem phim</button>
            </Link>
          </div>
        </div>
        <div className="w-[70%] px-2 h-full min-[200px]:max-lg:w-full">
          <h2 className="text-5xl font-bold text-red-600 dark:text-white min-[200px]:max-lg:text-4xl">
            {data.item.name}
          </h2>
          <p>
            <label
              className="text-lg dark:text-white font-semibold"
              htmlFor={data.item.origin_name}
            >
              {data.item.origin_name}
            </label>
          </p>
          <p className="dark:text-white font-semibold">
            <span className="border-r-2 border-col-white">
              {data.item.episode_current}
            </span>
            {"  | "}
            <span className="border-r-2 border-col-white">
              {data.item.time}
            </span>
            {"  | "}
            <span className="border-r-2 border-col-white">
              {data.item.year}
            </span>
            {"  | "}
            <span className="border-r-2 border-col-white">
              {data.item.lang}
            </span>
          </p>{" "}
          <p className="dark:text-white font-semibold">
            {data.item.country.map((country: any) => (
              <span key={country.id}>Quốc gia : {country.name}</span>
            ))}
          </p>
          <p className="flex flex-wrap mt-2 dark:text-white font-semibold">
            {data.item.category.map((category: any) => (
              <Link
                href={`/the-loai/${category.slug}`}
                key={category.id}
                className="w-auto h-auto min-w-[80px] mr-2 mb-2 px-2 min-h-[20px] text-center rounded-full border border-[#909090]"
              >
                {category.name}
              </Link>
            ))}
          </p>
          <p>
            {" "}
            <span className="">
              Đạo diễn :{" "}
              {data.item?.director.map((director: any) => director).join(", ")}{" "}
            </span>
          </p>
          <p>
            <span className="">
              Diễn viên :{" "}
              {data.item?.actor &&
                data.item?.actor.map((actor: any) => actor).join(", ")}{" "}
            </span>
          </p>
          <p className="mt-1">
            {" "}
            <div
              className=" "
              dangerouslySetInnerHTML={{ __html: data.item.content }}
            ></div>
          </p>
        </div>
      </section>
    </div>
  );
}

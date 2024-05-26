import { getDetailMovie } from "@/api/movie.api";
import ViewMovie from "@/app/component/viewMovie";
import { Skeleton } from "@/components/ui/skeleton";
import { IMovieData, IMovieTap } from "@/types/movie.types";
import Link from "next/link";
import React, { Suspense } from "react";

export default async function Phim({
  params,
}: {
  params: { slug: string; tap: string };
}) {
  const res = await getDetailMovie(params.slug);
  const tap = params.tap ? parseInt(params.tap.split("-")[1]?.trim()) : 1;
  const tapMovie = res.data.item.episodes[0].server_data;
  const tapResult = () => {
    if (params.tap === "full") {
      return tapMovie[0];
    } else if (params.tap.includes("tap")) {
      for (let i = 0; i < tapMovie.length; i++) {
        if (parseInt(tapMovie[i].name) === tap) {
          return tapMovie[i];
        }
      }
    }
  };

  return (
    <>
      <div className="w-3/4 h-full min-[200px]:max-lg:w-full ">
        <div className="h-[500px] w-full min-[200px]:max-md:h-[400px] min-md:max-lg:h-[450px] xl:h-[550px]">
          <Suspense
            fallback={<Skeleton className="h-full w-full rounded-md" />}
          >
            <ViewMovie link={tapResult()} />
          </Suspense>
        </div>
        <div className="w-full h-[200px]  mt-2">
          <h1 className="text-4xl font-semibold min-[200px]:max-md:text-3xl">
            {res.data.item.name} |{" "}
            {params.tap === "full" ? "Full" : `Tập ${tap}`}
          </h1>
          <p>
            <label
              className="text-lg dark:text-white font-semibold"
              htmlFor={res.data.item.origin_name}
            >
              {res.data.item.origin_name}
            </label>
          </p>
          <p className="dark:text-white font-semibold">
            <span className="">{res.data.item.episode_current}</span>
            {"  | "}
            <span className="">{res.data.item.time}</span>
            {"  | "}
            <span className="">{res.data.item.year}</span>
            {"  | "}
            <span className="">{res.data.item.lang}</span>
          </p>{" "}
          <p className="dark:text-white font-semibold">
            {res.data.item.country.map((country: any) => (
              <span key={country.id}>Quốc gia : {country.name}</span>
            ))}
          </p>
          <p className="flex flex-wrap mt-2 dark:text-white font-semibold">
            {res.data.item.category.map((category: any) => (
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
              {res.data.item?.director
                .map((director: any) => director)
                .join(", ")}{" "}
            </span>
          </p>
          <p>
            <span className="">
              Diễn viên :{" "}
              {res.data.item?.actor &&
                res.data.item?.actor.map((actor: any) => actor).join(", ")}{" "}
            </span>
          </p>
          <p className="mt-1">
            {" "}
            <div
              className=" "
              dangerouslySetInnerHTML={{ __html: res.data.item.content }}
            ></div>
          </p>
        </div>
      </div>
    </>
  );
}

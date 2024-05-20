import Image from "next/image";
import { getMovie } from "@/api/movie.api";
import React, { Suspense } from "react";
import CarouselSlide from "./component/carouselSlide";

const ListMovie = React.lazy(() => import("./component/listMovie"));
export default async function Home() {
  const [newMovie, newHanUpdate, newTrungUpdate, newLeUpdate] =
    await Promise.all([
      getMovie({
        type: "phim-moi-cap-nhat",
        country: "",
        year: new Date().getFullYear().toString(),
        category: "",
        page: 1,
      }),
      getMovie({
        type: "phim-bo",
        country: "han-quoc",
        year: new Date().getFullYear().toString(),
        category: "",
        page: 1,
      }),
      getMovie({
        type: "phim-bo",
        country: "trung-quoc",
        year: new Date().getFullYear().toString(),
        category: "",
        page: 1,
      }),
      getMovie({
        type: "phim-bo",
        country: "au-my",
        year: new Date().getFullYear().toString(),
        category: "",
        page: 1,
      }),
    ]);

  return (
    <main className="  h-auto mt-2">
      <section className="w-full h-[400px] flex px-2 sm:h-[400px] lg:h-[500px] min-[200px]:max-md:h-[300px]">
        <div className="w-full h-full ">
          <CarouselSlide data={newMovie.data} />
        </div>
      </section>
      <Suspense fallback={<>Loading ....</>}>
        <ListMovie name="Phim hàn quốc" data={newHanUpdate} />
      </Suspense>{" "}
      <Suspense fallback={<>Loading ....</>}>
        <ListMovie name="Phim trung quốc" data={newTrungUpdate} />{" "}
      </Suspense>{" "}
      <Suspense fallback={<>Loading ....</>}>
        <ListMovie name="Phim âu mỹ" data={newLeUpdate} />{" "}
      </Suspense>
    </main>
  );
}

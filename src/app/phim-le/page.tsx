import Image from "next/image";
import { getMovie } from "@/api/movie.api";
import React, { Suspense } from "react";
import CarouselSlide from "../component/carouselSlide";
import { Metadata } from "next";

const ListMovie = React.lazy(() => import("../component/listMovie"));

export default async function PhimLe() {
  const [
    newHanUpdate,
    newTrungUpdate,
    newLeUpdate,
    newhaiUpdate,
    newVienTuong,
    newKinhDiUpdate,
  ] = await Promise.all([
    getMovie({
      type: "phim-le",
      country: "",
      year: new Date().getFullYear().toString(),
      category: "",
      page: "1",
    }),
    getMovie({
      type: "phim-le",
      country: "",
      year: new Date().getFullYear().toString(),
      category: "hanh-dong",
      page: "1",
    }),
    getMovie({
      type: "phim-le",
      country: "",
      year: new Date().getFullYear().toString(),
      category: "tinh-cam",
      page: "1",
    }),
    getMovie({
      type: "phim-le",
      country: "",
      year: new Date().getFullYear().toString(),
      category: "hai-huoc",
      page: "1",
    }),
    getMovie({
      type: "phim-le",
      country: "",
      year: new Date().getFullYear().toString(),
      category: "vien-tuong",
      page: "1",
    }),
    getMovie({
      type: "phim-le",
      country: "",
      year: new Date().getFullYear().toString(),
      category: "kinh-di",
      page: "1",
    }),
  ]);

  return (
    <main className="h-auto mt-2">
      <section className="w-full  h-[400px] flex px-2 xl:h-[500px] 2xl:h-[600px]  sm:h-[400px] lg:h-[500px] min-[200px]:max-md:h-[200px]">
        <div className="w-full h-full ">
          <CarouselSlide data={newHanUpdate.data} />
        </div>
      </section>
      <Suspense fallback={<>Loading ....</>}>
        <ListMovie
          name="Phim hành động"
          data={newTrungUpdate}
          slug={{ type: "phim-le", country: "", category: "hanh-dong" }}
        />{" "}
      </Suspense>{" "}
      <Suspense fallback={<>Loading ....</>}>
        <ListMovie
          name="Phim tình cảm"
          data={newLeUpdate}
          slug={{ type: "phim-le", country: "", category: "tinh-cam" }}
        />{" "}
      </Suspense>
      <Suspense fallback={<>Loading ....</>}>
        <ListMovie
          name="Phim hài hước"
          data={newhaiUpdate}
          slug={{ type: "phim-le", country: "", category: "hai-huoc" }}
        />{" "}
      </Suspense>
      <Suspense fallback={<>Loading ....</>}>
        <ListMovie
          name="Phim viễn tưởng"
          data={newVienTuong}
          slug={{ type: "phim-le", country: "", category: "vien-tuong" }}
        />{" "}
      </Suspense>
      <Suspense fallback={<>Loading ....</>}>
        <ListMovie
          name="Phim kinh dị"
          data={newKinhDiUpdate}
          slug={{ type: "phim-le", country: "", category: "kinh-di" }}
        />{" "}
      </Suspense>
    </main>
  );
}

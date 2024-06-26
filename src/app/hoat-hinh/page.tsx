import Image from "next/image";
import { getMovie } from "@/api/movie.api";
import React, { Suspense } from "react";
import CarouselSlide from "../component/carouselSlide";
import Link from "next/link";

const ListMovie = React.lazy(() => import("../component/listMovie"));
export default async function Cartoon() {
  const [
    newHanUpdate,
    newTrungUpdate,
    newLeUpdate,
    newhaiUpdate,
    newVienTuong,
  ] = await Promise.all([
    getMovie({
      type: "hoat-hinh",
      country: "",
      year: new Date().getFullYear().toString(),
      category: "",
      page: "1",
    }),
    getMovie({
      type: "hoat-hinh",
      country: "",
      year: new Date().getFullYear().toString(),
      category: "hanh-dong",
      page: "1",
    }),
    getMovie({
      type: "hoat-hinh",
      country: "",
      year: new Date().getFullYear().toString(),
      category: "tinh-cam",
      page: "1",
    }),
    getMovie({
      type: "hoat-hinh",
      country: "",
      year: new Date().getFullYear().toString(),
      category: "hai-huoc",
      page: "1",
    }),
    getMovie({
      type: "hoat-hinh",
      country: "",
      year: new Date().getFullYear().toString(),
      category: "vien-tuong",
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
          slug={{ type: "hoat-hinh", country: "", category: "hanh-dong" }}
        />{" "}
      </Suspense>{" "}
      <Suspense fallback={<>Loading ....</>}>
        <ListMovie
          name="Phim tình cảm"
          data={newLeUpdate}
          slug={{ type: "hoat-hinh", country: "", category: "tinh-cam" }}
        />{" "}
      </Suspense>
      <Suspense fallback={<>Loading ....</>}>
        <ListMovie
          name="Phim hài hước"
          data={newhaiUpdate}
          slug={{ type: "hoat-hinh", country: "", category: "hai-huoc" }}
        />{" "}
      </Suspense>
      <Suspense fallback={<>Loading ....</>}>
        <ListMovie
          name="Phim viễn tưởng"
          data={newVienTuong}
          slug={{ type: "hoat-hinh", country: "", category: "vien-tuong" }}
        />{" "}
      </Suspense>
      <section className="w-full flex justify-center py-8">
        <Link
          href={
            "/loc-phim/hoat-hinh?sort_field=modified.time&category=&country=&year=2024&page=1"
          }
          className="bg-red-400 p-2 rounded-md font-semibold"
        >
          Xem thêm
        </Link>
      </section>
    </main>
  );
}

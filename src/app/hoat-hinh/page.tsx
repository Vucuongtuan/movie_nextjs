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
      page: 1,
    }),
    getMovie({
      type: "hoat-hinh",
      country: "",
      year: new Date().getFullYear().toString(),
      category: "hanh-dong",
      page: 1,
    }),
    getMovie({
      type: "hoat-hinh",
      country: "",
      year: new Date().getFullYear().toString(),
      category: "tinh-cam",
      page: 1,
    }),
    getMovie({
      type: "hoat-hinh",
      country: "",
      year: new Date().getFullYear().toString(),
      category: "hai-huoc",
      page: 1,
    }),
    getMovie({
      type: "hoat-hinh",
      country: "",
      year: new Date().getFullYear().toString(),
      category: "vien-tuong",
      page: 1,
    }),
  ]);

  return (
    <main className="h-auto mt-4">
      <section className="w-full h-[400px] flex p-2 sm:h-[400px] lg:h-[500px]">
        <div className="w-full h-full ">
          <CarouselSlide data={newHanUpdate.data} />
        </div>
      </section>
      <Suspense fallback={<>Loading ....</>}>
        <ListMovie name="Phim hành động" data={newTrungUpdate} />{" "}
      </Suspense>{" "}
      <Suspense fallback={<>Loading ....</>}>
        <ListMovie name="Phim tình cảm" data={newLeUpdate} />{" "}
      </Suspense>
      <Suspense fallback={<>Loading ....</>}>
        <ListMovie name="Phim hài hước" data={newhaiUpdate} />{" "}
      </Suspense>
      <Suspense fallback={<>Loading ....</>}>
        <ListMovie name="Phim viễn tưởng" data={newVienTuong} />{" "}
      </Suspense>
      <section className="w-full flex justify-center py-8">
        <Link
          href={"/danh-sach/hoat-hinh"}
          className="bg-red-400 p-2 rounded-md font-semibold"
        >
          Xem thêm
        </Link>
      </section>
    </main>
  );
}

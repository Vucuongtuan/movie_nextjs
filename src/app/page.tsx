import { getMovie } from "@/api/movie.api";
import React, { Suspense } from "react";
import CarouselSlide from "./component/carouselSlide";
import { Metadata } from "next";
import { Skeleton } from "@/components/ui/skeleton";

const ListMovie = React.lazy(() => import("./component/listMovie"));

export const metadata: Metadata = {
  title: "TC Phim | Phim mới | Trực tuyến | Phim hay | Phim chiếu rạp",
  description: "TC Phim - Đem đến cho mọi người những bộ phim mới và phổ biến ",
  openGraph: {
    title: "TC Phim | Phim mới | Trực tuyến | Phim hay | Phim chiếu rạp",
    description:
      "TC Phim - Đem đến cho mọi người những bộ phim mới và phổ biến ",
    images: [
      {
        url: "/logoFull.png",
      },
    ],
  },
};

export default async function Home() {
  const [
    newMovie,
    newHanUpdate,
    newTrungUpdate,
    newLeUpdate,
    newBoThaiLan,
    newBoNhatBan,
  ] = await Promise.all([
    getMovie({
      type: "phim-moi-cap-nhat",
      country: "",
      year: new Date().getFullYear().toString(),
      category: "",
      page: "1",
    }),
    getMovie({
      type: "phim-bo",
      country: "han-quoc",
      year: new Date().getFullYear().toString(),
      category: "",
      page: "1",
    }),
    getMovie({
      type: "phim-bo",
      country: "trung-quoc",
      year: new Date().getFullYear().toString(),
      category: "",
      page: "1",
    }),
    getMovie({
      type: "phim-bo",
      country: "au-my",
      year: new Date().getFullYear().toString(),
      category: "",
      page: "1",
    }),
    getMovie({
      type: "phim-bo",
      country: "thai-lan",
      year: new Date().getFullYear().toString(),
      category: "",
      page: "1",
    }),
    getMovie({
      type: "phim-bo",
      country: "nhat-ban",
      year: new Date().getFullYear().toString(),
      category: "",
      page: "1",
    }),
  ]);

  return (
    <main className="  h-auto mt-2">
      <Suspense
        fallback={
          <Skeleton className="w-full  h-[400px] flex mx-2 sm:h-[400px] lg:h-[500px] min-[200px]:max-md:h-[300px]" />
        }
      >
        <section className="w-full  h-[400px] flex px-2 xl:h-[500px] 2xl:h-[600px]  sm:h-[400px] lg:h-[500px] min-[200px]:max-md:h-[200px]">
          <div className="w-full h-full ">
            <CarouselSlide data={newMovie.data} />
          </div>
        </section>
      </Suspense>
      <Suspense fallback={<>Loading ....</>}>
        <ListMovie
          name="Phim Hàn Quốc"
          data={newHanUpdate}
          slug={{ type: "phim-bo", country: "han-quoc", category: "" }}
        />
      </Suspense>{" "}
      <Suspense fallback={<>Loading ....</>}>
        <ListMovie
          name="Phim Trung Quốc"
          data={newTrungUpdate}
          slug={{ type: "phim-bo", country: "trung-quoc", category: "" }}
        />{" "}
      </Suspense>{" "}
      <Suspense fallback={<>Loading ....</>}>
        <ListMovie
          name="Phim Âu Mỹ"
          data={newLeUpdate}
          slug={{ type: "phim-bo", country: "au-my", category: "" }}
        />{" "}
      </Suspense>
      <Suspense fallback={<>Loading ....</>}>
        <ListMovie
          name="Phim Thái Lan"
          data={newBoThaiLan}
          slug={{ type: "phim-bo", country: "thai-lan", category: "" }}
        />{" "}
      </Suspense>
      <Suspense fallback={<>Loading ....</>}>
        <ListMovie
          name="Phim Nhật Bản"
          data={newBoNhatBan}
          slug={{ type: "phim-bo", country: "nhat-ban", category: "" }}
        />
      </Suspense>
    </main>
  );
}

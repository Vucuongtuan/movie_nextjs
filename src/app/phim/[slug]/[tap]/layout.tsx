import { getDetailMovie } from "@/api/movie.api";
import { IMovieTap } from "@/types/movie.types";
import Link from "next/link";

export default async function PhimLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: { slug: string; tap: string };
}>) {
  const res = await getDetailMovie(params.slug);
  const tap = params.tap ? parseInt(params.tap.split("-")[1]?.trim()) : 1;
  const tapMovie = res.data.item.episodes[0].server_data;
  return (
    <main className="p-2 h-auto  w-full ">
      {" "}
      <div className="w-full h-full flex min-[200px]:max-lg:flex-col min-[200px]:max-lg:h-[900px]">
        {children}
        <div className="w-full h-auto min-h-[90px] hidden min-[200px]:max-lg:block ">
          <div className="h-full w-full p-2  grid grid-cols-6 gap-3 overflow-y-scroll  ">
            {tapMovie.map((item: IMovieTap) => (
              <Link
                href={`/phim/${res.data.item.slug}/tap-${item.slug}`}
                key={item.slug}
                className={`text-center rounded-md ${
                  tap.toString() === item.slug ? "bg-red-600 text-white" : ""
                }`}
              >
                Tập {item.name}
              </Link>
            ))}
          </div>
        </div>
        <div className="w-1/4 h-[500px] overflow-y-scroll rounded-md border-2 ml-2  min-[200px]:max-lg:hidden">
          <div className="min-h-[100px] h-auto w-full p-2  grid grid-cols-4     ">
            {tapMovie.map((item: IMovieTap) => (
              <Link
                href={`/phim/${res.data.item.slug}/tap-${item.slug}`}
                key={item.slug}
                className={`text-center rounded-md h-8 w-16 ${
                  tap.toString() === item.slug ? "bg-red-600 text-white" : ""
                }`}
              >
                Tập {item.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}

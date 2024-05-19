import React from "react";
import ViewDetailsHero from "./component/viewDetailHero";
import { getDetailMovie } from "@/api/movie.api";

export default async function DetailMovie({
  params,
}: {
  params: { slug: string };
}) {
  const data = await getDetailMovie(params.slug);

  return (
    <main className="w-full h-auto min-h-[500px] px-2">
      <ViewDetailsHero data={data.data} url={process.env.BASE_IMAGE_URL} />
      <section className="">
        
      </section>
    </main>
  );
}

import React from "react";
import ViewDetailsHero from "./component/viewDetailHero";
import { getDetailMovie } from "@/api/movie.api";
import { cookies } from "next/headers";

export default async function DetailMovie({
  params,
}: {
  params: { slug: string };
}) {
  const data = await getDetailMovie(params.slug);
  const token = cookies().get("token")?.value;
  return (
    <main className="w-full h-auto min-h-[500px] px-2">
      <ViewDetailsHero
        data={data.data}
        url={process.env.BASE_IMAGE_URL}
        token={token}
      />
      <section className=""></section>
    </main>
  );
}

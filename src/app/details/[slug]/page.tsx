import React from "react";
import ViewDetailsHero from "./component/viewDetailHero";
import { getDetailMovie } from "@/api/movie.api";
import { cookies } from "next/headers";
import { Metadata, ResolvingMetadata } from "next";
type Props = {
  params: { slug: string };
};

export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const { slug } = params;
  const product = await getDetailMovie(slug);
  const previousImages = (await parent).openGraph?.images || [];
  const image = process.env.BASE_IMAGE_URL + product?.data.item.poster_url;
  return {
    title: product?.data.seoOnPage.titleHead,
    description: product?.data.seoOnPage.descriptionHead,
    openGraph: {
      title: `${product?.data.seoOnPage.titleHead}`,
      description: product?.data.seoOnPage.descriptionHead,
      images: [{ url: image, width: 800, height: 600 }, ...previousImages],
    },
  };
}
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

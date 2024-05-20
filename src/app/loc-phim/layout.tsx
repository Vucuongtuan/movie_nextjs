import { getListOption, getMovie, getMovieByOption } from "@/api/movie.api";
import FormLoc from "./form";
import PaginationLoc from "./pagination";

export default async function LocLayout({
  children,
  params,
  searchParams,
}: Readonly<{
  children: React.ReactNode;
  params: { type: string };
  searchParams: {
    type: string;
    category: string;
    country: string;
    year: string;
    page: string;
  };
}>) {
  const [category, country] = await Promise.all([
    getListOption("the-loai"),
    getListOption("quoc-gia"),
  ]);

  return (
    <main className="w-full h-auto px-2">
      <FormLoc category={category.data.items} country={country.data.items} />
      {children}
      <section className="w-full h-[100px] py-8 px-6">
        <PaginationLoc params={params.type} />
      </section>
    </main>
  );
}

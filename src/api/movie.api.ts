import { IMovieProps } from "@/types/movie.types";

export const getMovie = async ({
  type,
  country,
  year,
  category,
  page,
}: IMovieProps) => {
  const res = await fetch(
    `${process.env.BASE_URL_API}/v1/api/danh-sach/${type}?sort_field=modified.time&category=${category}&country=${country}&year=${year}&page=${page}`,
    {
      method: "GET",
      next: { revalidate: 10 },
    }
  );

  const data = await res.json();
  return data;
};
export const getDetailMovie = async (slug: string) => {
  const res = await fetch(`${process.env.BASE_URL_API}/v1/api/phim/${slug}`, {
    method: "GET",
  });
  const data = await res.json();
  return data;
};
export const getMovieSearch = async (keyword: string, page: number) => {
  const res = await fetch(
    `https://ophim1.com/v1/api/tim-kiem?keyword=${keyword}&page=${page}`,
    { method: "GET" }
  );
  const data = await res.json();
  return data;
};

export const getMovieByOption = async (
  type: string,
  category: string,
  country: string,
  year: string,
  page: string
) => {
  const res = await fetch(
    `https://ophim1.com/v1/api/danh-sach/${type}?sort_field=modified.time&category=${category}&country=${country}&year=${year}&page=${page}`
  );
  const data = await res.json();
  return data;
};
export const getListOption = async (name: string) => {
  const res = await fetch(`https://ophim1.com/v1/api/${name}`, {
    method: "GET",
    next: { revalidate: 5 },
  });
  const data = await res.json();
  return data;
};

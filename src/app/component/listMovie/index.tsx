import React from "react";
import CarouselSize from "../carousel";

interface IListMovieProps {
  name: string;
  data: any;
}
export default function ListMovie({ name, data }: IListMovieProps) {
  return (
    <section className="w-full h-[460px] xl:h-auto sm:h-[380px] md:h-[400px] min-[200px]:max-md:h-[300px]  xs:bg-black  my-3">
      <h3 className="text-3xl font-semibold p-2  text-black dark:text-white">
        {name}
      </h3>
      <div className="h-[85%] my-2">
        <CarouselSize data={data} />
      </div>
    </section>
  );
}

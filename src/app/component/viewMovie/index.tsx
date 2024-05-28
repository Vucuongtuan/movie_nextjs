"use client";
import React from "react";
import VideoPlayer from "./video";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/lib/redux";
import { actionScreen } from "@/lib/redux/fullScreen";

interface IViewMovieProps {
  name: string;
  slug: string;
  filename: string;
  link_embed: string;
  link_m3u8: string;
}
export default function ViewMovie({ link }: { link: IViewMovieProps }) {
  const [serverLink, setServerLink] = React.useState<boolean>(false);
  const serverResult = () => {
    if (serverLink === false) {
      return (
        <iframe
          width="560"
          height="315"
          src={link.link_embed}
          title="Embedded Video"
          frameBorder="0"
          allowFullScreen
          className="w-full h-full rounded-sm"
        ></iframe>
      );
    } else {
      return <VideoPlayer videoUrl={link.link_m3u8} />;
    }
  };
  return (
    <section className="h-full mb-2">
      <div className="h-[90%] w-full">{serverResult()}</div>
      <div className="flex justify-between items-center h-[10%] my-1">
        <div className="text-[#989898] w-[60%]">
          <span>Nếu serve không có ip hãy f5 lại trang hoặc </span>
          <span
            className=" cursor-pointer hover:text-red-500 underline"
            onClick={() => window.location.reload()}
          >
            tải lại
          </span>
        </div>
        <div className="flex-grow flex justify-end">
          <button
            disabled={serverLink === false}
            onClick={() => setServerLink(false)}
            className={`px-4 py-1 mt-1 border-2 ml-2 rounded-md hover:bg-red-500 min-[200px]:max-md:px-2 min-[200px]:max-md:py-1 min-[200px]:max-md:text-sm ${
              serverLink === false ? " cursor-not-allowed bg-slate-500" : ""
            }`}
          >
            Server 1
          </button>
          <button
            disabled={serverLink === true}
            onClick={() => setServerLink(true)}
            className={`px-4 py-1 mt-1 border-2 ml-2 rounded-md hover:bg-red-500 min-[200px]:max-md:px-2 min-[200px]:max-md:py-1 min-[200px]:max-md:text-sm ${
              serverLink === true ? " cursor-not-allowed bg-slate-500" : ""
            }`}
          >
            Server 2
          </button>
        </div>
      </div>
    </section>
  );
}

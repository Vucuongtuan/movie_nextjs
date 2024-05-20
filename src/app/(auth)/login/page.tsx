import { FlipWords } from "@/components/ui/flip-words";
import React from "react";

export default function Login() {
  return (
    <main className="w-full h-[91vh] px-2 ">
      <section className="w-full h-full flex justify-center  items-center">
        <div className="w-[700px] h-[500px] px-4 rounded-md shadow-lg ">
          <h1 className="text-5xl py-2  font-bold">Đăng nhập</h1>
          <span className="text-[#989898] text-2xl font-medium">
            Trải nghiệm xem phim
            <FlipWords
              words={["Vui", "Đỉnh", "Chất", "Tuyệt"]}
              className="w-[80px]"
            />
            cùng với TC Phim
          </span>
          <form action="">
            <label htmlFor="Tên đăng nhập">Tên đăng nhập</label>
          </form>
        </div>
      </section>
    </main>
  );
}

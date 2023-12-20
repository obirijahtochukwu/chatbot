import { pagination } from "@/utils/types";
import React from "react";
import { Icons } from "./icons";

export default function Pagination({
  currentPage,
  totalPages,
  setCurrentPage,
}: pagination) {
  return (
    <section className="flex justify-end">
      <div className="w-fit h-16 justify-center items-center gap-2 flex text-primary text-lg font-medium">
        <Icons.arrow className="w-6 h-6 rotate-180"></Icons.arrow>
        <div className="">Page</div>
        <div className="h-16 w-32 px-px py-5 rounded-md border border-zinc-800 justify-center items-center gap-6 flex">
          <input
            type="text"
            value={currentPage}
            onChange={(e: any) => setCurrentPage(e.target.value)}
            className="text-center w-10 border-none font-extrabold focus:outline-none"
          />
          <Icons.arrow className="w-6 h-6 rotate-90 "></Icons.arrow>
        </div>
        <div className="">of {totalPages}</div>
        <Icons.arrow className="w-6 h-6"></Icons.arrow>
      </div>
    </section>
  );
}

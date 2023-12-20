"use client";
import React, { useState } from "react";
import Pagination from "../ui/pagination";
import { Icons } from "../ui/icons";
import { useDispatch, useSelector } from "react-redux";
import { story } from "@/utils/types";
import { useRouter } from "next/navigation";

export default function Conversations() {
  const dispatch = useDispatch();
  const { stories } = useSelector((state: any) => state.context.chatbot);
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(stories?.length / 4);
  const router = useRouter();

  return (
    <article className="flex justify-between">
      <main className="w-full max-w-[900px]">
        <div className="flex justify-between items-center">
          <div className="text-primary text-2xl font-medium">Conversations</div>
          <div className="text-gray-600 text-base font-medium flex items-center cursor-pointer">
            View all <Icons.arrow className="" />
          </div>
        </div>
        <section className="flex gap-7 mb-12 flex-col mt-7">
          {stories?.map(
            ({ name, type, interactions }: story, idx: number) =>
              idx < currentPage * 4 &&
              idx > currentPage * 4 - 5 && (
                <main
                  onClick={() => router.push(`/story/${idx}`)}
                  className="text-black cursor-pointer text-base font-medium grid grid-cols-5 justify-between items-center"
                >
                  <div className="opacity-70">{name}</div>
                  <div className="opacity-70">{type}</div>
                  <div className="opacity-70">
                    {interactions?.length} interactions
                  </div>
                  <div className="opacity-70 duration-200 hover:shadow ml-auto hover:bg-red-100 px-4 py-2.5 rounded-lg justify-center items-center w-fit gap-2 flex">
                    Delete story
                  </div>
                  <div className="w-24 text-secondary px-4 py-2.5 bg-secondary bg-opacity-10 rounded-lg justify-center ml-auto items-center gap-2 flex">
                    Edit
                  </div>
                </main>
              )
          )}
        </section>

        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          setCurrentPage={setCurrentPage}
        />
      </main>
      <div className="w-40 h-14 px-5 py-5 rounded-sm border text-center mt-11 text-secondary text-base border-secondary justify-center cursor-pointer items-center flex font-mulish">
        New Story
      </div>
    </article>
  );
}

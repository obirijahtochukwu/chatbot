"use client";
import React, { useEffect, useState } from "react";
import Pagination from "../ui/pagination";
import { Icons } from "../ui/icons";
import { useDispatch, useSelector } from "react-redux";
import { story } from "@/utils/types";
import { useParams, useRouter } from "next/navigation";
import { ToastContainer } from "react-toastify";
import StoryTemplate from "../ui/story-template";
import CreateStory from "../ui/create-story";

export default function Conversations() {
  const dispatch = useDispatch();
  const params = useParams();
  const chatbots = useSelector((state: any) => state.context.chatbots);
  const [modal, setModal] = useState(false);
  const [isModal, setIsModal] = useState(false);
  const [template, setTemplate] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const { stories } = chatbots?.find(
    (story: any, idx: any) => idx === +params.slug
  );
  const totalPages = Math.ceil(stories?.length / 4);
  const router = useRouter();

  useEffect(() => {
    if (template) {
      setIsModal(true);
    }
  }, [modal]);

  const props = { modal, setModal, template, setTemplate, isModal, setIsModal };

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
            ({ name, template, interactions }: story, idx: number) =>
              idx < currentPage * 4 &&
              idx > currentPage * 4 - 5 && (
                <main
                  key={idx}
                  onClick={() => router.push(`/story/${params.slug}/${idx}`)}
                  className="text-black cursor-pointer text-base font-medium grid grid-cols-5 justify-between items-center"
                >
                  <div className="opacity-70 capitalize">{name}</div>
                  <div className="opacity-70 capitalize">{template}</div>
                  <div className="opacity-70">
                    {interactions?.length} interactions
                  </div>
                  <div className="opacity-70 duration-200 hover:shadow ml-auto hover:bg-opacity-10 hover:bg-red-600 px-4 py-2.5 rounded-lg justify-center hover:text-red-600 items-center w-fit gap-2 flex">
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
      <div
        onClick={() => setModal(true)}
        className="w-40 h-14 px-5 py-5 rounded-sm border text-center mt-11 text-secondary text-base border-secondary justify-center cursor-pointer items-center flex font-mulish"
      >
        New Story
      </div>

      {/*------ modals &  more ------*/}
      <ToastContainer />
      <StoryTemplate {...props} />
      <CreateStory {...props} />
    </article>
  );
}

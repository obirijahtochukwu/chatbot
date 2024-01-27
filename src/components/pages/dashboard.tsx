"use client";
import React, { useState } from "react";
import Pagination from "../ui/pagination";
import { useRouter } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import { addChatbot } from "@/redux/slice";
import { Toast } from "../ui/toast";
import CreateBot from "../ui/create-bot";
import { chatbot } from "@/utils/types";
import { uid } from "@/utils/constants";

export default function Dashboard() {
  const [modal, setModal] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const chatbots = useSelector((state: any) => state.context.chatbots);
  const totalPages = Math.ceil(chatbots.length / 4);

  const { toast, ToastContainer } = Toast();

  const dispatch = useDispatch();
  const router = useRouter();

  const props = { modal, setModal };

  return (
    <article className="flex justify-between">
      <main className="w-full max-w-[900px] max-2xl:max-w-[990px]">
        <div className="text-primary text-2xl font-medium">Chatbots</div>
        <section className="flex gap-7 mb-12 flex-col mt-7">
          {chatbots.map(
            (chatbot: chatbot, idx: number) =>
              idx < currentPage * 4 &&
              idx > currentPage * 4 - 5 && (
                <main
                  key={idx}
                  onClick={() => {
                    dispatch(addChatbot(chatbot));
                    router.push(`/dashboard/${idx}/conversations`);
                  }}
                  className="text-black cursor-pointer text-base font-medium flex justify-between items-center"
                >
                  <div className="flex gap-4 items-center">
                    <img
                      className="w-14 h-14 rounded-full"
                      src="/media/dashboard/dashboard-1.svg"
                    />
                    <div className="opacity-70 capitalize">{chatbot.name}</div>
                  </div>
                  <div className="opacity-70">{chatbot.date}</div>
                  <div className="opacity-70">{chatbot.percent}</div>
                  <div className="opacity-70 duration-200 hover:shadow hover:bg-red-600 hover:text-red-600 hover:bg-opacity-10 px-4 py-2.5 rounded-lg justify-center items-center gap-2 flex">
                    Delete bot
                  </div>
                  <div className="w-24 text-secondary px-4 py-2.5 bg-secondary bg-opacity-10 rounded-lg justify-center items-center gap-2 flex">
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
        Create Chatbot
      </div>

      {/*------ modals &  more ------*/}
      <ToastContainer />
      <CreateBot {...props} />
    </article>
  );
}

const interactions = [
  {
    id: `${uid()}`,
    name: "bot",
    messages: [{ text: "Hi How canhh I help you?" }],
    component: "Component B",
  },
  {
    id: `${uid()}`,
    name: "user",
    messages: [
      { text: "What time is the next event?" },
      { text: "When will be holded the event?" },
      { text: "When is the next event?" },
      { text: "When" },
    ],
    component: "Component C",
  },
  // {
  //   id: `${uid()}`,
  //   name: "bot",
  //   messages: [{ text: "Hi How canhh I help you?" }],
  //   component: "Component A",
  // },
  // {
  //   id: `${uid()}`,
  //   name: "user",
  //   messages: [
  //     { text: "What time is the next event?" },
  //     { text: "When will be holded the event?" },
  //     { text: "When is the next event?" },
  //     { text: "When" },
  //   ],
  //   component: "Component F",
  // },
];

export const stories = [
  { name: "Story A", template: "Q&R", interactions },
  // { name: "Story B", type: "Q&A", interactions },
  // { name: "Story C", type: "Rule", interactions },
  { name: "Story D", template: "Custom", interactions: [] },
  // { name: "Story E", type: "Q&A", interactions },
  { name: "Story F", template: "Rule", interactions: [] },
];

// const chatbots = [
//   { name: "Chatbot A", date: "Jan 16, 2023", percent: "80%", stories },
//   // { name: "Chatbot B", date: "Jan 16, 2023", percent: "0%", stories },
//   // { name: "Chatbot C", date: "Jan 16, 2023", percent: "100%", stories },
//   // { name: "Chatbot D", date: "Jan 16, 2023", percent: "0%", stories },
//   // { name: "Chatbot E", date: "Jan 16, 2023", percent: "80%", stories },
//   // { name: "Chatbot F", date: "Jan 16, 2023", percent: "0%", stories },
// ];

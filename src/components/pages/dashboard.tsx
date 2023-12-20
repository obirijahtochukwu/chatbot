"use client";
import React, { useState } from "react";
import Pagination from "../ui/pagination";
import { useRouter } from "next/navigation";
import { useDispatch } from "react-redux";
import { addChatbot } from "@/redux/slice";

export default function Dashboard() {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(chatbots.length / 4);

  const dispatch = useDispatch();
  const router = useRouter();

  return (
    <article className="flex justify-between">
      <main className="w-full max-w-[900px] max-2xl:max-w-[990px]">
        <div className="text-primary text-2xl font-medium">Chatbots</div>
        <section className="flex gap-7 mb-12 flex-col mt-7">
          {chatbots.map(
            (chatbot, idx) =>
              idx < currentPage * 4 &&
              idx > currentPage * 4 - 5 && (
                <main
                  onClick={() => {
                    dispatch(addChatbot(chatbot));
                    router.push("/dashboard/conversations");
                  }}
                  className="text-black cursor-pointer text-base font-medium flex justify-between items-center"
                >
                  <div className="flex gap-4 items-center">
                    <img
                      className="w-14 h-14 rounded-full"
                      src="/media/dashboard/dashboard-1.svg"
                    />
                    <div className="opacity-70">{chatbot.name}</div>
                  </div>
                  <div className="opacity-70">{chatbot.date}</div>
                  <div className="opacity-70">{chatbot.percent}</div>
                  <div className="opacity-70 duration-200 hover:shadow hover:bg-red-100 px-4 py-2.5 rounded-lg justify-center items-center gap-2 flex">
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
      <div className="w-40 h-14 px-5 py-5 rounded-sm border text-center mt-11 text-secondary text-base border-secondary justify-center cursor-pointer items-center flex font-mulish">
        Create Chatbot
      </div>
    </article>
  );
}

const interactions = [
  { name: "bot", messages: ["Hi How can I help you?"] },
  {
    name: "user",
    messages: [
      "What time is the next event?",
      "When will be holded the event?",
      "When is the next event?",
      "When",
    ],
  },
];

const stories = [
  { name: "Story A", type: "Custom", interactions },
  { name: "Story B", type: "Q&A", interactions },
  { name: "Story C", type: "Rule", interactions },
  { name: "Story D", type: "Custom", interactions },
  { name: "Story E", type: "Q&A", interactions },
  { name: "Story F", type: "Rule", interactions },
];

const chatbots = [
  { name: "Chatbot A", date: "Jan 16, 2023", percent: "80%", stories },
  { name: "Chatbot B", date: "Jan 16, 2023", percent: "0%", stories },
  { name: "Chatbot C", date: "Jan 16, 2023", percent: "100%", stories },
  { name: "Chatbot D", date: "Jan 16, 2023", percent: "0%", stories },
  { name: "Chatbot E", date: "Jan 16, 2023", percent: "80%", stories },
  { name: "Chatbot F", date: "Jan 16, 2023", percent: "0%", stories },
];

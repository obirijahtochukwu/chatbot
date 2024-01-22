import React, { useEffect, useRef, useState } from "react";
import { Toast } from "./toast";
import { createChatbot } from "@/redux/slice";
import { formattedDate } from "@/utils/constants";
import { chatbot } from "@/utils/types";
import { useDispatch } from "react-redux";

export default function StoryTemplate({
  modal,
  setModal,
  setTemplate,
}: {
  modal: boolean;
  setModal: React.Dispatch<boolean>;
  setTemplate: React.Dispatch<string>;
}) {
  const { toast, ToastContainer } = Toast();

  const handleSubmit = (e: any, name: string) => {
    e.preventDefault();
    setTemplate(name);
    setModal(false);
  };

  const templates = [
    { name: "Q&R", img: "" },
    { name: "Rule", img: "" },
    { name: "custom", img: "" },
  ];

  const ref = useRef<HTMLInputElement>(null);
  useEffect(() => {
    const closeModal = (event: any) => {
      if (ref.current && !ref.current.contains(event.target)) {
        setModal(false);
      }
    };
    document.addEventListener("mousedown", closeModal);
  }, [ref]);

  return (
    <main
      className={`fixed top-0 left-0 h-screen w-screen flex justify-center items-center ${
        modal ? "z-10 visible" : "z-[-1] invisible"
      }`}
    >
      <ToastContainer />
      <div
        className={`h-full absolute top-0 left-0 w-full backdrop-blur-[10px] duration-300 ${
          modal ? "z-[5] visible" : "z-[-1] invisible"
        }`}
      />
      <section
        ref={ref}
        className={`px-6 h-fit z-10 py-5 w-96 duration-200 bg-white rounded-[5px] relative flex flex-col gap-3 pt-3 pb-8 shadow-lg ${
          modal ? "mt-0 opacity-100" : "mt-10 opacity-0"
        }`}
      >
        <div
          onClick={() => setModal(false)}
          className="text-primary cursor-pointer text-md absolute right-3 top-3"
        >
          X
        </div>
        <header className="text-base font-semibold font-mulish text-secondary my-4">
          Create a Chatbot
        </header>
        <div className="flex gap-4">
          {templates.map(({ name }) => (
            <div
              key={name}
              onClick={(e: any) => handleSubmit(e, name)}
              className="w-48 p-3 rounded hover:bg-secondary cursor-pointer hover:bg-opacity-10 duration-300"
            >
              <div className="bg-neutral h-20 w-full rounded" />
              <div className="text-lg capitalize font-medium font-mulish text-secondary text-opacity-80 text-center mt-1">
                {name}
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}

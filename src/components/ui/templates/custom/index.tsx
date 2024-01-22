import { interaction, story } from "@/utils/types";
import React, { useState } from "react";
import { Interaction } from "./interactions";
// import AddUser from "./add-user";
import AddUser from "@/utils/add-user";
import AddBot from "@/utils/add-bot";

export const Custom = ({ story }: { story: story }) => {
  const [newMessage, setNewMessage] = useState(false);
  const [model, setModel] = useState("");

  const options = [
    { name: "bot", img: "/media/story/chatgpt robot.svg" },
    { name: "user", img: "/media/story/user icon.svg" },
  ];

  const props = { story, model, setModel };

  return (
    <>
      <main
        className={`${
          story.interactions.length < 2 ? "flex" : "hidden"
        } w-fit top-full left-[calc((100%-299px)/2)] gap-6 h-fit px-[41px] py-[25px] bg-white shadow`}
      >
        {options.map(({ name, img }: { name: string; img: string }) => {
          return (
            <div
              onClick={() => setModel(name)}
              className="w-[100px] flex justify-center items-center flex-col bg-neutral h-[100px] gap-1"
            >
              <img className="w-[35px] h-[56.40px]" src={img} />
              <div className="text-black capitalize text-md font-mulish leading-[18px]">
                {name}
              </div>
            </div>
          );
        })}
      </main>
      {story?.interactions.map(
        ({ id, name, messages }: interaction, idx: number) => {
          const props = { story, name, messages, idx, id };
          return <Interaction key={name} {...props} />;
        }
      )}
      <AddUser {...props} />
      <AddBot {...props} />
    </>
  );
};

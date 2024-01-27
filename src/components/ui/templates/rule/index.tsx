import { component_state, interaction, story } from "@/utils/types";
import React, { useState } from "react";
import { Interaction } from "./interactions";
import AddUser from "../custom/add-user-msg";
import AddBot from "../custom/add-bot-msg";

export const Rule = ({ story }: { story: story }) => {
  const [newMessage, setNewMessage] = useState(false);
  const [model, setModel] = useState("");
  const [component, setComponent] = useState<component_state>({
    state: false,
    value: "",
  });
  const options = [
    { name: "bot", img: "/media/story/chatgpt robot.svg" },
    { name: "user", img: "/media/story/user icon.svg" },
  ];

  const props = { story, model, setModel, component, setComponent };

  return (
    <>
      <main
        className={`${
          story?.interactions.length < 2 ? "flex" : "hidden"
        } w-fit top-full left-[calc((100%-299px)/2)] gap-6 h-fit px-[41px] py-[25px] bg-white shadow`}
      >
        {options.map(
          ({ name, img }: { name: string; img: string }, idx: number) => (
            <div
              key={idx}
              onClick={() => setModel(name)}
              className="w-[100px] flex justify-center items-center flex-col bg-neutral h-[100px] gap-1"
            >
              <img className="w-[35px] h-[56.40px]" src={img} />
              <div className="text-black capitalize text-md font-mulish leading-[18px]">
                {name}
              </div>
            </div>
          )
        )}
      </main>
      {story?.interactions.map((interaction: interaction, idx: number) => {
        const props = {
          story,
          idx,
          interaction,
        };
        return <Interaction key={idx} {...props} />;
      })}
      <AddUser {...props} />
      <AddBot {...props} />
    </>
  );
};

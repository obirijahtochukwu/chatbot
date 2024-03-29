import { component_state, interaction, story } from "@/utils/types";
import React, { useEffect, useState } from "react";
import { Interaction } from "./interactions";
import AddUser from "./add-user-msg";
import AddBot from "./add-bot-msg";
// import AddUser from "./add-user";

export const Custom = ({ story }: { story: story }) => {
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

  useEffect(() => {
    window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" });
  }, [story.interactions]);

  const props = { story, model, setModel, component, setComponent };

  return (
    <>
      <main
        className={`${
          story?.interactions.length < 2 ? "flex" : "hidden"
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

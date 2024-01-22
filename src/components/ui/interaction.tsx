import { component_state, interaction, story } from "@/utils/types";
import { useState } from "react";
import BotUser from "./bot-user";
import AddUser from "./add-user";
import AddBot from "./add-bot";

export const Interaction = ({
  story,
  name,
  messages,
}: { story: story } & interaction) => {
  const [newMessage, setNewMessage] = useState(false);
  const [model, setModel] = useState("");
  const [component, setComponent] = useState<component_state>({
    state: false,
    value: "Component A",
  });

  return (
    <main className="">
      <section className="w-60 mx-auto h-fit pt-[14px] px-4 pb-7 flex flex-col gap-5 bg-white rounded-[5px] shadow-lg">
        <div className="text-center text-primary text-md font-black font-mulish capitalize leading-[18px]">
          {name}
        </div>
        <div className="bg-neutral mx-auto w-[187px] h-fit min-h-[138px] px-6 py-4">
          {messages.map((text: string) => (
            <div className="font-mulish leading-[18px] font-normal text-primary text-md first-letter:uppercase">
              {text}
            </div>
          ))}
        </div>

        <div className="flex gap-2">
          <div className="px-8 py-3 cursor-pointer text-secondary bg-secondary bg-opacity-10 justify-center items-center gap-2.5 flex leading-[18px] text-md font-semibold font-mulish">
            Edit
          </div>
          <div className="px-8 py-3 cursor-pointer bg-red-600 bg-opacity-10 justify-center items-center gap-2.5 flex leading-[18px] text-md text-red-600  font-semibold font-mulish">
            Delete
          </div>
        </div>
      </section>
      <footer className="flex flex-col justify-center items-center">
        <div className="w-[0.50px] h-[57px] bg-primary" />
        <div
          onClick={() => setNewMessage(!newMessage)}
          className="w-[45px] cursor-pointer h-[45px] hover:shadow-lg duration-100 bg-white flex items-center justify-center rounded-[200px] text-primary relative text-xl shadow"
        >
          + {newMessage ? <BotUser setModel={setModel} /> : null}
        </div>
        <div className="w-[0.50px] h-[57px] bg-primary" />
      </footer>
      <AddUser
        model={model}
        setModel={setModel}
        component={component}
        setComponent={setComponent}
      />
      <AddBot
        model={model}
        setModel={setModel}
        component={component}
        setComponent={setComponent}
      />
    </main>
  );
};

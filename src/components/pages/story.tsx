"use client";
import { interaction, story } from "@/utils/types";
import { useParams } from "next/navigation";
import React, { useEffect, useLayoutEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Buttons } from "../ui/buttons";
import BotUser from "../ui/bot-user";
import { addActivePage } from "@/redux/slice";
import AddUser from "../ui/add-user";
import AddBot from "../ui/add-bot";
import TrainBot from "../ui/train-bot";
import { Params } from "next/dist/shared/lib/router/utils/route-matcher";

export default function Story() {
  const params: Params = useParams();
  const dispatch = useDispatch();
  const [trainBot, setTrainBot] = useState(false);
  const [activeTab, setActiveTab] = useState("Flow");
  const { chatbot } = useSelector((state: any) => state.context);
  const story = chatbot?.stories?.find(
    (story: any, idx: any) => idx == params.slug
  );

  useEffect(() => {
    localStorage.setItem("story_url", params?.slug);
  }, []);

  const props = { trainBot, setTrainBot };

  return (
    <article className="flex justify-between">
      <main className="w-full max-w-[900px]">
        <div className="flex items-center">
          <div className="text-primary text-[26.33px] font-medium">
            {chatbot?.name} / {story?.name}
          </div>
        </div>
        <div className="w-fit relative top-[-32px] mx-auto p-[2.5px] flex items-center h-fit rounded-[75px] mb-8 border border-secondary">
          {["Flow", "Install"].map((name: string) => (
            <div
              onClick={() => setActiveTab(name)}
              className={`w-[72px] h-[30px] px-[21px] py-[9px] cursor-pointer rounded-[75px] justify-center duration-200 items-center flex   text-[14.87px] ${
                activeTab === name
                  ? "bg-secondary text-white"
                  : "text-primary  hover:bg-blue-50"
              }`}
            >
              {name}
            </div>
          ))}
        </div>
        {activeTab == "Flow" ? (
          story?.interactions.map(({ name, messages }: interaction) => {
            const props = { name, messages };
            return <Interaction {...props} />;
          })
        ) : (
          <Install />
        )}
      </main>
      <Buttons.side onClick={() => setTrainBot(true)} title="Train Bot" />
      <TrainBot {...props} />
    </article>
  );
}

const Interaction = ({ name, messages }: interaction) => {
  const [newMessage, setNewMessage] = useState(false);
  const [model, setModel] = useState("");
  const [component, setComponent] = useState({
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

const Install = () => {
  const apps = [
    { name: "Open in Browser", logo: "/media/story/Open in Browser.svg" },
    { name: "WordPress", logo: "/media/story/WordPress.svg" },
    { name: "Facebook Messenger", logo: "/media/story/Facebook Messenger.svg" },
    { name: "Facebook", logo: "/media/story/Facebook Circled.svg" },
    { name: "WhatsApp", logo: "/media/story/WhatsApp.svg" },
  ];

  const [isModal, setIsModal] = useState("");

  return (
    <main className="w-[255px] flex-wrap gap-y-8 mx-auto flex gap-x-[15px]">
      {apps.reverse().map(({ logo, name }, idx) => {
        return (
          <App
            logo={logo}
            idx={idx}
            isModal={isModal}
            setIsModal={setIsModal}
            name={name}
          />
        );
      })}
    </main>
  );
};

const App = ({
  logo,
  idx,
  name,
  isModal,
  setIsModal,
}: {
  logo: string;
  idx: number;
  name: string;
  isModal: string;
  setIsModal: React.Dispatch<string>;
}) => {
  return (
    <main className="relative">
      <img
        src={logo}
        alt=""
        onClick={() => setIsModal(name)}
        key={idx}
        className="w-[75px] cursor-pointer h-[75px]"
      />
      <section
        className={`w-[452px] absolute top-full left-[calc((100%-452px)/2)] flex flex-col h-fit px-7 pt-[25px] pb-[65px] bg-white shadow-[0px_4px_35px_0px_rgba(0,0,0,0.15)] ${
          isModal == name ? "visible z-10" : " invisible -z-10"
        }`}
      >
        <div
          onClick={() => setIsModal("")}
          className="text-primary cursor-pointer text-md ml-auto relative right-[-12px]"
        >
          X
        </div>
        <img
          src={logo}
          alt=""
          key={idx}
          className="w-[75px] mx-auto h-[75px]"
        />

        <div className="flex mt-[37px] items-center justify-between">
          {name} installation
          <Buttons.primary checkbox={true} title="connect" />
        </div>
      </section>
    </main>
  );
};

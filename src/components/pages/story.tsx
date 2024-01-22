"use client";
import { component_state, interaction, story } from "@/utils/types";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Buttons } from "../ui/buttons";
import TrainBot from "../ui/train-bot";
import { Params } from "next/dist/shared/lib/router/utils/route-matcher";
import QAndR from "../ui/templates/qr";
import { Custom } from "../ui/templates/custom";

export default function Story() {
  const params: Params = useParams();
  const dispatch = useDispatch();
  const [trainBot, setTrainBot] = useState(false);
  const [activeTab, setActiveTab] = useState("Flow");
  const { chatbots } = useSelector((state: any) => state.context);
  const chatbot = chatbots?.find(
    (story: any, idx: any) => idx === +params.slug[0]
  );
  const story: story = chatbot?.stories?.find(
    (story: any, idx: any) => idx === +params.slug[1]
  );
  console.log(chatbot);

  useEffect(() => {
    //@ts-ignore
    localStorage.setItem("story_url", Number(params?.slug));
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
                activeTab == name
                  ? "bg-secondary text-white"
                  : "text-primary  hover:bg-blue-50"
              }`}
            >
              {name}
            </div>
          ))}
        </div>
        {activeTab === "Flow" ? (
          <>
            {story?.template == "Q&R" ? (
              <QAndR story={story} />
            ) : (
              <Custom story={story} />
            )}
          </>
        ) : (
          <Install />
        )}
      </main>
      <Buttons.side onClick={() => setTrainBot(true)} title="Train Bot" />
      <TrainBot {...props} />
    </article>
  );
}

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
          isModal === name ? "visible z-10" : " invisible -z-10"
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

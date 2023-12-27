import { Params } from "next/dist/shared/lib/router/utils/route-matcher";
import { useParams } from "next/navigation";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Icons } from "../ui/icons";
import { chat, component_state, msg } from "@/utils/types";
import AddUser from "../ui/add-user";
import { chat_history, headers } from "@/utils/constants";
import { Buttons } from "../ui/buttons";

export default function ChatHistory() {
  const params: Params = useParams();
  const { chatbot } = useSelector((state: any) => state.context);
  const story = chatbot?.stories?.find(
    (story: any, idx: any) => idx == params.slug
  );

  return (
    <main className="w-full">
      <div className="text-primary mb-5 font-body text-[26px] font-medium">
        {chatbot?.name} / {story?.name} / Train history
      </div>
      <BotDialog />
    </main>
  );
}

const BotDialog = () => {
  const [tab, setTab] = useState("expand");
  const [userId, setUserId] = useState(0);
  const [download, setDownload] = useState(false);
  const { chatbot } = useSelector((state: any) => state.context);

  const chats = [
    {
      name: "user",
      img: "/media/story/user icon.svg",
      msgs: [
        {
          text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
          component: "Component A",
          rating: 98,
        },
      ],
    },
    {
      name: "bot",
      img: "/media/story/chatgpt robot.svg",
      msgs: [
        {
          text: "Lorem ipsum dolor sit amet",
          component: "Component F",
          rating: 0,
        },
        {
          text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
          component: "Component A",
          rating: 0,
        },
      ],
    },
    {
      name: "user",
      img: "/media/story/user icon.svg",
      msgs: [
        {
          text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
          component: "Component F",
          rating: 85,
        },
        {
          text: "Lorem ipsum dolor sit amet",
          component: "Component A",
          rating: 45,
        },
      ],
    },
  ];

  const buttons = [
    {
      name: "download",
      icon: <Icons.download onClick={() => setDownload(true)} />,
    },
    {
      name: "expand",
      icon: (
        <Icons.expand
          onClick={() => setTab("expand")}
          color={tab == "expand" ? "#0177FB" : "#000"}
        />
      ),
    },
    {
      name: "minimize",
      icon: (
        <Icons.minimize
          onClick={() => setTab("minimize")}
          color={tab == "minimize" ? "#0177FB" : "#000"}
        />
      ),
    },
  ];

  const table = ["User", "Steps/Total time", "Start time"];

  const data = [
    {
      email: "user@gmail.com",
      steps_time: "15 / 05:35",
      start_time: "22/03/23, 10:05",
      chats,
    },
    {
      email: "user@gmail.com",
      steps_time: "15 / 05:35",
      start_time: "22/03/23, 10:05",
      chats,
    },
    {
      email: "user@gmail.com",
      steps_time: "15 / 05:35",
      start_time: "22/03/23, 10:05",
      chats,
    },
    {
      email: "user@gmail.com",
      steps_time: "15 / 05:35",
      start_time: "22/03/23, 10:05",
    },
  ];

  return (
    <div className={`w-full  flex flex-col gap-3 pt-4 pb-7`}>
      <header className="flex items-center gap-2.5">
        <img
          className="w-14 h-16 rounded-full"
          src="/media/dashboard/dashboard-1.svg"
        />
        <div className=" text-base font-body text-primary font-medium capitalize">
          {chatbot.name}
        </div>
      </header>
      <div className="flex justify-end items-center gap-2.5 mb-3">
        <div className="text-md font-mulish text-primary font-normal mr-auto">
          Chat History
        </div>
        {buttons.map(({ icon }, idx) => (
          <div key={idx} className="cursor-pointer relative">
            {icon}
            {idx == 0 && (
              <DownloadDialog setDownload={setDownload} download={download} />
            )}
          </div>
        ))}
      </div>
      {tab == "expand" ? (
        <main className="w-full flex min-h-[574px]  bg-neutral py-2 px-4 justify-between">
          <div className="w-6/12">
            <div className="mb-4 grid grid-cols-12">
              {table.map((title, idx) => {
                return (
                  <div
                    key={idx}
                    className={`text-md font-semibold font-mulish text-primary ${
                      idx == 2
                        ? "col-span-3"
                        : idx == 1
                        ? "col-span-5"
                        : "col-span-4"
                    }`}
                  >
                    {title}
                  </div>
                );
              })}
            </div>
            {data.map(({ email, steps_time, start_time }, idx) => {
              return (
                <div
                  key={idx}
                  onClick={() => setUserId(idx)}
                  className={`grid grid-cols-12 text-md font-normal leading-[18px] h-9 items-center px-2 rounded-full cursor-pointer duration-200 font-mulish  ${
                    userId == idx ? "bg-secondary text-white" : "text-primary"
                  }`}
                >
                  <div className="col-span-4">{email}</div>
                  <div className="col-span-5">{steps_time}</div>
                  <div className="col-span-3">{start_time}</div>
                </div>
              );
            })}
          </div>
          <div className="w-6/12 max-w-[520px]">
            <Chats chats={chats} />
          </div>
        </main>
      ) : (
        <main className="w-full flex flex-col gap-[15px] min-h-[395px]  bg-neutral py-2 px-4">
          <div className="grid gap-2 grid-cols-12">
            {headers.map((title, idx) => {
              return (
                <div
                  key={idx}
                  className={`text-md truncate font-semibold font-mulish text-primary col-span-2`}
                >
                  {title}
                </div>
              );
            })}
          </div>
          {[...chat_history, ...chat_history].map(
            ({ user, user_input, component, time, bot_req, bot_res }, idx) => {
              return (
                <div
                  key={idx}
                  className="grid grid-cols-12 gap-2 text-md font-normal leading-[18px] font-mulish text-primary"
                >
                  <div className="col-span-2">{user}</div>
                  <div className="col-span-2">{user_input}</div>
                  <div className="col-span-2 flex gap-1 items-center">
                    {component}
                    <Icons.arrow className=" rotate-90 cursor-pointer h-4 w-4" />
                  </div>
                  <div className="col-span-2">{time}</div>
                  <div className="col-span-2">{bot_req}</div>
                  <div className="col-span-2">{bot_res}</div>
                </div>
              );
            }
          )}
        </main>
      )}
    </div>
  );
};

const Chats = ({ chats }: { chats: chat[] }) => {
  return (
    <main className="w-full">
      <div className="text-md text-primary text-opacity-60 font-body text-center">
        9 Feb 2023
      </div>
      <section className="flex mt-[14px] flex-col text-start gap-6">
        {chats.map(({ name, msgs, img }, idx) => {
          const props = { name, msgs, img };
          return <Chat key={idx} {...props} />;
        })}
      </section>
    </main>
  );
};

const Chat = ({ name, msgs, img }: chat) => {
  const [model, setModel] = useState("");
  const [component, setComponent] = useState<component_state>({
    state: false,
    value: "",
  });

  const openModal = (component?: string) => {
    setModel("user");
    setComponent({ state: false, value: component });
  };

  return (
    <div className="flex gap-1.5 justify-center items-start">
      <AddUser
        model={model}
        setModel={setModel}
        component={component}
        setComponent={setComponent}
      />
      {name == "user" && (
        <img src={img} alt="" className="w-6 h-6 rounded-full" />
      )}
      <div className="flex flex-col gap-[6px]  ">
        {msgs.map(
          ({ text, rating, component }: { rating?: number | any } & msg) => (
            <div className="flex gap-[6px] ">
              <div
                className={`py-[14px] w-[300px] px-5 rounded-xl text-md font-normal tracking-[0.35px] font-body ${
                  name == "bot"
                    ? "text-primary bg-white"
                    : "bg-secondary text-white"
                }`}
              >
                {text}
              </div>
              {name == "user" && (
                <div className="flex cursor-pointer gap-[5px] items-center">
                  <div
                    className={`w-[15px] h-[15px] rounded-[50px] ${
                      rating < 50 ? "bg-red-500" : "bg-green-400"
                    }`}
                  />
                  <div
                    onClick={() => openModal(component)}
                    className=" font-body text-sm font-light text-primary tracking-[0.3px]"
                  >
                    {rating}% - {component}
                  </div>
                  <Icons.arrow className="w-4 h-4 rotate-90" />
                </div>
              )}
            </div>
          )
        )}
      </div>

      {name == "bot" && (
        <img src={img} alt="" className="w-6 h-6 rounded-full" />
      )}
    </div>
  );
};

const DownloadDialog = ({
  setDownload,
  download,
}: {
  download: boolean;
  setDownload: React.Dispatch<boolean>;
}) => {
  return (
    <main
      className={`w-[388px] flex-col absolute z-10 top-7 right-0 px-6 py-8 cursor-default bg-white shadow-[0px_4px_35px_5px_rgba(0,0,0,0.15)] ${
        download ? "flex" : "hidden"
      }`}
    >
      <div
        onClick={() => setDownload(false)}
        className="text-primary cursor-pointer absolute top-3 right-3 text-md"
      >
        X
      </div>
      <div className="text-md text-start text-primary font-mulish font-normal">
        Download chat history
      </div>
      <input
        type="text"
        placeholder="Type the number of months to download"
        autoFocus
        className="px-3 focus:outline-secondary duration-300 bg-neutral h-8 w-full flex items-center mb-5 mt-4 text-md font-mulish text-opacity-50 font-normal"
      />
      <div className="flex justify-end gap-2.5">
        {["Download", "Cancel"].map((name, idx) => (
          <Buttons.primary
            key={idx}
            onClick={() => setDownload(false)}
            classname={idx == 1 ? "!bg-rose-100 text-red-600" : ""}
            title={name}
          ></Buttons.primary>
        ))}
      </div>
    </main>
  );
};

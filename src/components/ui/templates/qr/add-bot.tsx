import { chatbot, interaction, msg, story } from "@/utils/types";
import { useEffect, useState } from "react";
import { Icons } from "../../icons";
import Msgs from "../../msgs";
import AddLink from "../../add-link";
import MsgInput from "../../msg-input";
import { useParams } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import { getChatbots } from "@/redux/slice";
import { addMsg } from "@/utils/functions";

export default function AddBot({
  story,
  model,
  setModel,
}: {
  story: story;
  model: string;
  setModel: React.Dispatch<string>;
}) {
  const [msgs, setMsgs] = useState<msg[]>(
    story?.interactions[0]?.messages || []
  );
  const dispatch = useDispatch();

  const [modal, setModal] = useState(false);
  const [inputVal, setInputVal] = useState("");
  const chatbots = useSelector((state: any) => state.context.chatbots);
  const params = useParams();
  const buttons = [{ icon: <Icons.share /> }, { name: "Submit" }];

  const handleSubmit = (id: number) => {
    if (id == 0) {
      setModal(true);
    } else {
      addMsg({ ...props });
      setModel("");
    }
  };

  const props = {
    name: "bot",
    modal,
    setModal,
    msgs,
    setMsgs,
    inputVal,
    setInputVal,
    chatbots,
    params,
    story,
    dispatch,
  };

  return (
    <main
      className={`fixed top-0 duration-300 left-0 h-screen w-screen flex justify-center bg-primary bg-opacity-[0.1] backdrop-blur-sm items-center ${
        model == "bot" ? "z-10 visible" : "z-[-1] invisible"
      }`}
    >
      <div
        className={`w-fit h-[473px] bg-white rounded-[5px] px-7 flex flex-col gap-3 pt-3 pb-8 shadow-lg `}
      >
        <div
          onClick={() => setModel("")}
          className="text-primary cursor-pointer text-md ml-auto relative right-[-16px]"
        >
          X
        </div>
        <div className="w-[100px] flex justify-center items-center mx-auto flex-col bg-neutral h-[100px] gap-1">
          <img className="w-11 h-11" src={"/media/story/chatgpt robot.svg"} />
          <div className="text-primary capitalize text-md font-mulish leading-[18px]">
            bot
          </div>
        </div>

        <section className="flex gap-2.5 items-end">
          <div className="flex gap-3 flex-col">
            <MsgInput {...props} />
            <Msgs {...props} />
            <footer className="flex gap-2.5 justify-end">
              {buttons.map(({ name, icon }, idx) => (
                <div
                  key={idx}
                  onClick={() => handleSubmit(idx)}
                  className={`w-fit h-8 p-[7px] justify-center items-center text-md font-mulish bg-secondary cursor-pointer bg-opacity-10 text-secondary ${
                    idx == 2 && msgs.length < 1 ? "hidden" : "flex"
                  }`}
                >
                  {name} {icon}
                </div>
              ))}
            </footer>
          </div>
        </section>
      </div>
      <AddLink {...props} />
    </main>
  );
}

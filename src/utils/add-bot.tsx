import { chatbot, interaction, msg, story } from "@/utils/types";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import { getChatbots } from "@/redux/slice";
import { addMsg, add_msg } from "@/utils/functions";
import { Icons } from "@/components/ui/icons";
import MsgInput from "@/components/ui/msg-input";
import Msgs from "@/components/ui/msgs";
import AddLink from "@/components/ui/add-link";

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
  const buttons = [{ icon: <Icons.share /> }, { name: "Delete" }];

  const closeModal = () => {
    add_msg({ ...props });
    setMsgs([]);
    setModel("");
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

  // useEffect(() => {
  //   if (model === "user") {
  //     add_msg({ ...props });
  //   }
  // }, [msgs]);

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
          onClick={() => closeModal()}
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
            <Msgs msgs={msgs} />

            <footer className="flex gap-2.5 justify-end">
              {buttons.map(({ name, icon }, id) => (
                <div
                  key={id}
                  onClick={() => (id == 0 ? setModal(true) : null)}
                  className={`w-fit h-8 p-[7px] justify-center items-center flex text-md font-mulish cursor-pointer ${
                    id == 1
                      ? "text-red-600 bg-rose-100"
                      : "bg-secondary bg-opacity-10 text-secondary"
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

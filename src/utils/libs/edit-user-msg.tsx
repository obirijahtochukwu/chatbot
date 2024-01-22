"use client";
import { useEffect, useState } from "react";
import { msg, story } from "@/utils/types";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "next/navigation";
import { addMsg, add_msg, edit_msg } from "@/utils/functions";
import { Icons } from "@/components/ui/icons";
import { GeneratePhrases } from "@/components/ui/generate-phrases";
import MsgInput from "@/components/ui/msg-input";
import Msgs from "@/components/ui/msgs";

export default function EditUserMsg({
  index,
  messages,
  story,
  model,
  setModel,
}: {
  index: number;
  messages: msg[];
  story: story;
  model: string;
  setModel: React.Dispatch<string>;
}) {
  const [initialRender, setInitialRender] = useState(true);
  const [generate, setGenerate] = useState(false);
  const [msgs, setMsgs] = useState<msg[]>(messages);
  const [modal, setModal] = useState(false);
  const [inputVal, setInputVal] = useState("");

  const dispatch = useDispatch();
  const chatbots = useSelector((state: any) => state.context.chatbots);
  const params = useParams();
  const buttons = [{ icon: <Icons.share /> }, { name: "Delete" }];

  const closeModal = () => {
    edit_msg({ ...props });
    setModel("");
  };

  const props = {
    index,
    name: `user`,
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
        model === "user" ? "z-10 visible" : "z-[-1] invisible"
      }`}
    >
      <div
        className={`w-fit h-[473px] bg-white rounded-[5px] px-7 flex flex-col gap-3 pt-3 pb-8 shadow-lg `}
      >
        <div
          onClick={closeModal}
          className="text-primary cursor-pointer text-md ml-auto relative right-[-16px]"
        >
          X
        </div>
        <div className="w-[100px] flex justify-center items-center mx-auto flex-col bg-neutral h-[100px] gap-1">
          <img className="w-11 h-11" src={"/media/story/user icon.svg"} />
          <div className="text-primary capitalize text-md font-mulish leading-[18px]">
            user
          </div>
        </div>
        {generate ? (
          <GeneratePhrases msgs={msgs} setGenerate={setGenerate} />
        ) : (
          <section className="flex gap-2.5 items-end">
            <div className="flex gap-3 flex-col">
              <MsgInput {...props} />
              <Msgs msgs={msgs} />
              <div className="flex gap-2.5 justify-end">
                {["Generate training phrases", "Delete"].map((name, id) => (
                  <div
                    key={id}
                    onClick={() => (id < 1 ? setGenerate(true) : null)}
                    className={`w-fit h-8 p-[7px] justify-center items-center flex text-md font-mulish cursor-pointer ${
                      id > 1
                        ? "text-red-600 bg-rose-100"
                        : "bg-secondary   bg-opacity-10 text-secondary"
                    }`}
                  >
                    {name}
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}
      </div>
    </main>
  );
}

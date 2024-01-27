"use client";
import { useEffect, useState } from "react";
import { GeneratePhrases } from "../../generate-phrases";
import Msgs from "../../msgs";
import MsgInput from "../../msg-input";
import { msg, story } from "@/utils/types";
import { useDispatch, useSelector } from "react-redux";
import { Icons } from "../../icons";
import { useParams } from "next/navigation";
import { addMsg } from "@/utils/functions";

export default function AddUser({
  story,
  model,
  setModel,
}: {
  story: story;
  model: string;
  setModel: React.Dispatch<string>;
}) {
  const [generate, setGenerate] = useState(false);
  const [msgs, setMsgs] = useState<msg[]>(
    story.interactions[1]?.messages || []
  );
  const dispatch = useDispatch();

  const [modal, setModal] = useState(false);
  const [inputVal, setInputVal] = useState("");
  const chatbots = useSelector((state: any) => state.context.chatbots);
  const params = useParams();

  const handleSubmit = (id: number) => {
    if (id == 0) {
      setGenerate(true);
    } else {
      addMsg({ ...props });
      setModel("");
    }
  };

  const props = {
    name: "user",
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
          onClick={() => setModel("")}
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
              <Msgs {...props} />
              <div className="flex gap-2.5 justify-end">
                {["Generate training phrases", "Submit"].map((name, id) => (
                  <div
                    key={id}
                    onClick={() => handleSubmit(id)}
                    className={`w-fit cursor-pointer h-8 p-[7px] justify-center items-center flex text-md font-mulish cursor-pointertext-red-600 bg-secondary bg-opacity-10 text-secondary`}
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

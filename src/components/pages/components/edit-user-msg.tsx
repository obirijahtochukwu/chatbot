"use client";
import { useEffect, useState } from "react";
import { component_state, interaction, msg, story } from "@/utils/types";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "next/navigation";
import { addMsg, add_msg, edit_msg } from "@/utils/functions";
import { Icons } from "@/components/ui/icons";
import { GeneratePhrases } from "@/components/ui/generate-phrases";
import MsgInput from "@/components/ui/msg-input";
import Msgs from "@/components/ui/msgs";
import SelectComponent from "@/components/ui/select-component";

export default function EditUserMsg({
  interaction,
  index,
  story,
  editModel,
  setEditModel,
  deleteMsg,
}: {
  interaction: interaction;
  index: number;
  story: story;
  editModel: string;
  setEditModel: React.Dispatch<string>;
  deleteMsg: any;
}) {
  const [generate, setGenerate] = useState(false);
  const [msgs, setMsgs] = useState<msg[]>(interaction.messages);
  const [modal, setModal] = useState(false);
  const [inputVal, setInputVal] = useState("");

  const dispatch = useDispatch();
  const chatbots = useSelector((state: any) => state.context.chatbots);
  const params = useParams();
  const buttons = [
    { name: "Generate training phrases" },
    { name: "Delete" },
    { name: "Submit" },
  ];
  const closeModal = () => {
    setEditModel("");
  };

  const props = {
    index,
    interaction,
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

  const handleSubmit = (id: number) => {
    if (id == 0) {
      setGenerate(true);
    } else if (id == 2 && msgs.length > 0) {
      edit_msg({ ...props });
      setEditModel("");
    } else {
      deleteMsg();
      setEditModel("");
    }
  };

  return (
    <main
      className={`fixed top-0 duration-300 left-0 h-screen w-screen flex justify-center bg-primary bg-opacity-[0.1] backdrop-blur-sm items-center ${
        editModel === interaction.component
          ? "z-10 visible"
          : "z-[-1] invisible"
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
              <div className="text-primary text-md font-normal font-body leading-[18px] mt-3">
                {interaction.component}
              </div>
              <MsgInput {...props} />
              <Msgs {...props} />
              <div className="flex gap-2.5 justify-end">
                {buttons.map(({ name }, id) => (
                  <div
                    key={id}
                    onClick={() => handleSubmit(id)}
                    className={`w-fit h-8 p-[7px] justify-center items-center flex text-md font-mulish ${
                      id == 2 && msgs.length < 1
                        ? "opacity-0 cursor-default"
                        : "cursor-pointer"
                    } ${
                      id == 1
                        ? "text-red-600 bg-rose-100"
                        : "bg-secondary bg-opacity-10 text-secondary"
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

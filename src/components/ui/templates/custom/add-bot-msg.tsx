import {
  chatbot,
  component_state,
  interaction,
  msg,
  story,
} from "@/utils/types";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import { add_msg } from "@/utils/functions";
import { Icons } from "@/components/ui/icons";
import MsgInput from "@/components/ui/msg-input";
import Msgs from "@/components/ui/msgs";
import AddLink from "@/components/ui/add-link";
import SelectComponent from "@/components/ui/select-component";
import { SelectFile } from "@/components/ui/select-file";

export default function AddBot({
  story,
  model,
  setModel,
  component,
  setComponent,
}: {
  story: story;
  model: string;
  setModel: React.Dispatch<string>;
  component?: component_state;
  setComponent: React.Dispatch<component_state>;
}) {
  const [msgs, setMsgs] = useState<msg[]>([]);
  const dispatch = useDispatch();

  const [modal, setModal] = useState(false);
  const [inputVal, setInputVal] = useState("");
  const chatbots = useSelector((state: any) => state.context.chatbots);
  const params = useParams();

  const buttons = [
    { icon: <Icons.picture />, fileType: "image/*" },
    { icon: <Icons.media />, fileType: "video/*" },
    { icon: <Icons.share /> },
    { name: "Components" },
    { name: "Submit" },
  ];

  const closeModal = () => {
    setModel("");
    setComponent({ ...component, value: "" });
  };

  const handleSubmit = (id: number) => {
    if (id == 2) {
      setModal(true);
    } else if (id == 3) {
      setComponent({ ...component, state: true });
    } else if (id == 4 && msgs.length > 0) {
      add_msg({ ...props });
      setMsgs([]);
      setModel("");
      setComponent({ ...component, value: "" });
    } else {
    }
  };

  const props = {
    component_name: component?.value,
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
    component,
    setComponent,
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
          onClick={() => closeModal()}
          className="text-primary cursor-pointer text-md ml-auto relative right-[-16px]"
        >
          X
        </div>
        <div className="w-[100px] flex justify-center items-center mx-auto flex-col bg-neutral h-[100px] gap-1">
          <img className="w-11 h-11" src={"/media/story/chatgpt robot.svg"} />
          <div className="text-primary capitalize text-md font-mulish leading-[18px]">
            add bot
          </div>
        </div>

        <section className="flex gap-2.5 items-end">
          {component?.state && (
            <SelectComponent
              component={component}
              setComponent={setComponent}
            />
          )}

          <div className="flex gap-3 flex-col">
            {component?.state || (
              <div className="text-primary text-md font-normal font-body leading-[18px] mt-3">
                {component?.value}
              </div>
            )}

            <MsgInput {...props} />
            <Msgs {...props} />

            <footer className="flex gap-2.5 justify-end">
              {buttons.map(({ name, icon, fileType }, id) => {
                const props = { id, icon, fileType, msgs, setMsgs };
                if (id < 2) {
                  return <SelectFile key={id} {...props} />;
                }
                return (
                  <div
                    key={id}
                    onClick={() => handleSubmit(id)}
                    className={`w-fit h-8 p-[7px] justify-center items-center flex text-md font-mulish bg-secondary bg-opacity-10 text-secondary ${
                      id == 4 && msgs.length < 1
                        ? "opacity-50 cursor-default"
                        : "cursor-pointer"
                    }`}
                  >
                    {name} {icon}
                  </div>
                );
              })}
            </footer>
          </div>
        </section>
      </div>
      <AddLink {...props} />
    </main>
  );
}

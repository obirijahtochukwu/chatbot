import { component_state, interaction, msg, story } from "@/utils/types";
import { useState } from "react";
import { useParams } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import { edit_msg } from "@/utils/functions";
import { Icons } from "@/components/ui/icons";
import MsgInput from "@/components/ui/msg-input";
import Msgs from "@/components/ui/msgs";
import AddLink from "@/components/ui/add-link";
import SelectComponent from "@/components/ui/select-component";
import { SelectFile } from "@/components/ui/select-file";

export default function EditBotMsg({
  index,
  interaction,
  story,
  editModel,
  setEditModel,
  deleteMsg,
  component,
  setComponent,
}: {
  index: number;
  interaction: interaction;
  story: story;
  editModel: string;
  setEditModel: React.Dispatch<string>;
  deleteMsg: any;
  component?: component_state;
  setComponent: React.Dispatch<component_state>;
}) {
  const [msgs, setMsgs] = useState<msg[]>(interaction?.messages);
  const [modal, setModal] = useState(false);
  const [inputVal, setInputVal] = useState("");

  const chatbots = useSelector((state: any) => state.context.chatbots);
  const params = useParams();
  const dispatch = useDispatch();

  const buttons = [
    { icon: <Icons.picture />, fileType: "image/*" },
    { icon: <Icons.media />, fileType: "video/*" },
    { icon: <Icons.share /> },
    { name: "Components" },
    { name: "Delete" },
    { name: "Submit" },
  ];

  const closeModal = () => {
    setEditModel("");
  };

  const handleSubmit = (id: number) => {
    if (id == 2) {
      setModal(true);
    } else if (id == 3) {
      setComponent({ ...component, state: true });
    } else if (id == 4) {
      deleteMsg();
      setEditModel("");
    } else if (id == 5 && msgs.length > 0) {
      //@ts-ignore
      edit_msg({ ...props });
      setEditModel("");
      // setComponent({ ...component, value: "" });
    } else {
    }
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
    component: component?.value,
  };

  return (
    <main
      className={`fixed top-0 duration-300 left-0 h-screen w-screen flex justify-center bg-primary bg-opacity-[0.1] backdrop-blur-sm items-center ${
        editModel == "bot" ? "z-10 visible" : "z-[-1] invisible"
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
                    className={`w-fit h-8 p-[7px] justify-center items-center flex text-md font-mulish cursor-pointer ${
                      id == 4
                        ? "text-red-600 bg-rose-100"
                        : "bg-secondary bg-opacity-10 text-secondary"
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

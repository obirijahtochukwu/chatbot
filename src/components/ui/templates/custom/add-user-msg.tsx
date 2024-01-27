import { useState } from "react";
import { component_state, msg, story } from "@/utils/types";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "next/navigation";
import { add_msg } from "@/utils/functions";
import { Icons } from "@/components/ui/icons";
import { GeneratePhrases } from "@/components/ui/generate-phrases";
import MsgInput from "@/components/ui/msg-input";
import Msgs from "@/components/ui/msgs";
import SelectComponent from "@/components/ui/select-component";

export default function AddUser({
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
  const [initialRender, setInitialRender] = useState(true);
  const [generate, setGenerate] = useState(false);
  const [msgs, setMsgs] = useState<msg[]>([]);
  const [modal, setModal] = useState(false);
  const [inputVal, setInputVal] = useState("");

  const dispatch = useDispatch();
  const chatbots = useSelector((state: any) => state.context.chatbots);
  const params = useParams();
  const buttons = [
    { name: "Generate training phrases" },
    { name: "Components" },
    { name: "Submit" },
  ];

  const closeModal = () => {
    setModel("");
  };

  const handleSubmit = (id: number) => {
    if (id == 0) {
      setGenerate(true);
    } else if (id == 1) {
      setComponent({ ...component, state: true });
    } else if (msgs.length > 0) {
      add_msg({ ...props });
      setMsgs([]);
      setModel("");
      setComponent({ ...component, value: "" });
    } else {
    }
  };

  const props = {
    component_name: component?.value,
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
            {component && (
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
              <div className="flex gap-2.5 justify-end">
                {buttons.map(({ name }, id) => (
                  <div
                    key={id}
                    onClick={() => handleSubmit(id)}
                    className={`w-fit h-8 p-[7px] justify-center items-center flex text-md font-mulish bg-secondary bg-opacity-10 text-secondary ${
                      id == 2 && msgs.length < 1
                        ? "opacity-70 cursor-default"
                        : "cursor-pointer"
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

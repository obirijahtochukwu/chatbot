import React, { useState } from "react";
import { GeneratePhrases } from "./generate-phrases";
import SelectComponent from "./select-component";
import { Icons } from "./icons";
import { useDropzone } from "react-dropzone";
import { FileInfo, story, component_state, msg } from "@/utils/types";
import { Buttons } from "./buttons";
import AddLink from "./add-link";
import { SelectFile } from "./select-file";
import Msgs from "./msgs";

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
  setComponent?: React.Dispatch<component_state> | any;
}) {
  const [msgs, setMsgs] = useState<msg[]>([
    { text: "What time is the next event?" },
    { text: "When will be the next event?" },
  ]);

  const [modal, setModal] = useState(false);
  const [inputVal, setInputVal] = useState("");
  const [generate, setGenerate] = useState(false);

  const buttons = [
    { icon: <Icons.picture />, fileType: "image/*" },
    { icon: <Icons.media />, fileType: "video/*" },
    { icon: <Icons.share /> },
    { name: "Components" },
    { name: "Delete" },
  ];

  const props = { modal, setModal, msgs, setMsgs, inputVal, setInputVal };

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
            <section className="flex justify-between">
              <input
                placeholder="Bot message"
                value={inputVal}
                onChange={(e) => setInputVal(e.target.value)}
                className="w-[341px] focus:outline-none text-primary text-opacity-50 text-md flex items-center pl-6 h-8 bg-neutral font-mulish"
              />
              <button
                disabled={!inputVal}
                onClick={() => {
                  if (inputVal) {
                    setMsgs([...msgs, { text: inputVal }]);
                    setInputVal("");
                  }
                }}
                className="w-[49px] h-8 p-[7px] bg-secondary bg-opacity-10 justify-center items-center text-secondary font-mulish gap-2.5 flex text-md border-none"
              >
                Save
              </button>
            </section>

            <Msgs msgs={msgs} />

            <footer className="flex gap-2.5 justify-end">
              {buttons.map(({ name, icon, fileType }, id) => {
                const props = { id, icon, fileType, msgs, setMsgs };
                if (id < 2) {
                  return <SelectFile {...props} />;
                }
                return (
                  <div
                    key={id}
                    onClick={() =>
                      id == 3
                        ? setComponent({ ...component, state: true })
                        : id == 2
                        ? setModal(true)
                        : null
                    }
                    className={`w-fit h-8 p-[7px] justify-center items-center flex text-md font-mulish cursor-pointer ${
                      id === 4
                        ? "text-red-600 bg-rose-100"
                        : component?.state && id === 3
                        ? "hidden"
                        : "bg-secondary   bg-opacity-10 text-secondary"
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

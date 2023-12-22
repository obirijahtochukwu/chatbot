"use client";
import React, { useState } from "react";
import { GeneratePhrases } from "./generate-phrases";
import SelectComponent from "./select-component";
import { Icons } from "./icons";
import { useDropzone } from "react-dropzone";
import { FileInfo, msg } from "@/utils/types";
import { Buttons } from "./buttons";

export default function AddBot({
  model,
  setModel,
}: {
  model: string;
  setModel: React.Dispatch<string>;
}) {
  const [component, setComponent] = useState({
    state: false,
    value: "Component A",
  });

  const [msgs, setMsgs] = useState([
    { text: "What time is the next event?" },
    { text: "When will be the next event?" },
  ]);

  const [inputVal, setInputVal] = useState("");
  const [generate, setGenerate] = useState(false);

  const buttons = [
    { icon: <Icons.picture />, fileType: "image/*" },
    { icon: <Icons.media />, fileType: "video/*" },
    { icon: <Icons.share /> },
    { name: "Components" },
    { name: "Delete" },
  ];

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
          className="text-primary cursor-pointer text-[15px] ml-auto relative right-[-16px]"
        >
          X
        </div>
        <div className="w-[100px] flex justify-center items-center mx-auto flex-col bg-neutral h-[100px] gap-1">
          <img className="w-11 h-11" src={"/media/story/chatgpt robot.svg"} />
          <div className="text-primary capitalize text-[15px] font-mulish leading-[18px]">
            bot
          </div>
        </div>

        <section className="flex gap-2.5 items-end">
          <SelectComponent component={component} setComponent={setComponent} />
          <div className="flex gap-3 flex-col">
            {component.state || (
              <div className="text-primary text-[15px] font-normal font-inter leading-[18px] mt-3">
                {component?.value}
              </div>
            )}
            <div className="flex justify-between">
              <input
                placeholder="Bot message"
                value={inputVal}
                onChange={(e) => setInputVal(e.target.value)}
                className="w-[341px] focus:outline-none text-primary text-opacity-50 text-[15px] flex items-center pl-6 h-8 bg-neutral font-mulish"
              />
              <button
                disabled={!inputVal}
                onClick={() => {
                  if (inputVal) {
                    setMsgs([...msgs, { text: inputVal }]);
                    setInputVal("");
                  }
                }}
                className="w-[49px] h-8 p-[7px] bg-secondary bg-opacity-10 justify-center items-center text-secondary font-mulish gap-2.5 flex text-[15px] border-none"
              >
                Save
              </button>
            </div>
            <div className="w-[400px] h-[175px] bg-neutral px-3 py-4">
              <div className="px-3 gap-2 flex flex-col overflow-auto h-full w-full custom-scrollbar">
                {msgs.map(({ text, file }: msg) => {
                  if (file?.name) {
                    return (
                      <div className="flex gap-2 items-start">
                        <input
                          id="vue-checkbox"
                          type="checkbox"
                          value=""
                          className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                        />
                        {file?.type.includes("image") ? (
                          <div className="">
                            <label className="font-mulish leading-0 mb-1 font-normal text-primary text-[15px] capitalize">
                              image
                            </label>
                            <img
                              src={URL.createObjectURL(file)}
                              className="w-[49px] h-8 bg-primary bg-opacity-25"
                            />
                          </div>
                        ) : (
                          <div className="">
                            <label className="font-mulish leading-0 mb-1 font-normal text-primary text-[15px] capitalize">
                              Video
                            </label>
                            <iframe
                              width="49"
                              height="32"
                              src={URL.createObjectURL(file)}
                              title="Youtube Player"
                              frameBorder="0"
                              allowFullScreen
                            />
                          </div>
                        )}
                      </div>
                    );
                  }
                  return (
                    <div className="flex items-center gap-2">
                      <input
                        id="vue-checkbox"
                        type="checkbox"
                        value=""
                        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                      />

                      <label className="font-mulish leading-[18px] font-normal text-primary text-[15px] first-letter:uppercase">
                        {text}
                      </label>
                    </div>
                  );
                })}
              </div>
            </div>
            <div className="flex gap-2.5 justify-end">
              {buttons.map(({ name, icon, fileType }, id) => {
                const props = { id, icon, fileType, msgs, setMsgs };

                if (id < 2) {
                  return <SelectFile {...props} />;
                }
                return (
                  <div
                    key={id}
                    onClick={() =>
                      id == 3 && setComponent({ ...component, state: true })
                    }
                    className={`w-fit h-8 p-[7px] justify-center items-center flex text-[15px] font-mulish cursor-pointer ${
                      id == 4
                        ? "text-red-600 bg-rose-100"
                        : component.state && id == 3
                        ? "hidden"
                        : "bg-secondary   bg-opacity-10 text-secondary"
                    }`}
                  >
                    {name} {icon}
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}

const SelectFile = ({
  id,
  icon,
  fileType,
  msgs,
  setMsgs,
}: {
  id: number;
  fileType: string;
  msgs: msg[];
  setMsgs: React.Dispatch<msg[]>;
}) => {
  const [file, setFile] = useState<Blob | MediaSource | any>([]);
  const { getRootProps, getInputProps } = useDropzone({
    maxFiles: 10,
    accept: {
      [fileType]: [],
      [fileType]: [],
    },
    onDrop: (acceptedFiles: FileInfo[]) => {
      if (acceptedFiles.length > 1)
        alert("You cannot bulk upload more than 10 files at a time");
      setMsgs([...msgs, { file: acceptedFiles[0] }]);
    },
  });

  return (
    <div
      {...getRootProps()}
      key={id}
      className={`w-fit h-8 p-[7px] justify-center items-center flex text-[15px] font-mulish cursor-pointer bg-secondary   bg-opacity-10 text-secondary
      }`}
    >
      <input type="text" className="h-0 w-0" {...getInputProps()} />
      {icon}
    </div>
  );
};

export const AddBotDialog = ({
  model,
  setModel,
}: {
  model: string;
  setModel: React.Dispatch<string>;
}) => {
  const [msgs, setMsgs] = useState([
    { text: "What time is the next event?" },
    { text: "When will be the next event?" },
  ]);

  const [inputVal, setInputVal] = useState("");
  const [generate, setGenerate] = useState(false);

  const buttons = [
    { icon: <Icons.picture />, fileType: "image/*" },
    { icon: <Icons.media />, fileType: "video/*" },
    { icon: <Icons.share /> },
    { name: "Delete" },
  ];

  return (
    <main
      className={`w-fit h-[473px] bg-white rounded-[5px] px-7 flex flex-col gap-3 pt-3 pb-8 shadow-lg ${
        model == "bot" ? "" : "hidden"
      }`}
    >
      <div
        onClick={() => setModel("")}
        className="text-primary cursor-pointer text-[15px] ml-auto relative right-[-16px]"
      >
        X
      </div>
      <div className="w-[100px] flex justify-center items-center mx-auto flex-col bg-neutral h-[100px] gap-1">
        <img className="w-11 h-11" src={"/media/story/chatgpt robot.svg"} />
        <div className="text-primary capitalize text-[15px] font-mulish leading-[18px]">
          bot
        </div>
      </div>

      <section className="flex gap-2.5 items-end">
        <div className="flex gap-3 flex-col">
          <div className="flex justify-between">
            <input
              placeholder="Bot message"
              value={inputVal}
              onChange={(e) => setInputVal(e.target.value)}
              className="w-[341px] focus:outline-none text-primary text-opacity-50 text-[15px] flex items-center pl-6 h-8 bg-neutral font-mulish"
            />

            <Buttons.primary
              disabled={!inputVal}
              title="Save"
              onClick={() => {
                if (inputVal) {
                  setMsgs([...msgs, { text: inputVal }]);
                  setInputVal("");
                }
              }}
            />
          </div>
          <div className="w-[400px] h-[175px] bg-neutral px-3 py-4">
            <div className="px-3 gap-2 flex flex-col overflow-auto h-full w-full custom-scrollbar">
              {msgs.map(({ text, file }: msg) => {
                if (file?.name) {
                  return (
                    <div className="flex gap-2 items-start">
                      <input
                        id="vue-checkbox"
                        type="checkbox"
                        value=""
                        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                      />
                      {file?.type.includes("image") ? (
                        <div className="">
                          <label className="font-mulish leading-0 mb-1 font-normal text-primary text-[15px] capitalize">
                            image
                          </label>
                          <img
                            src={URL.createObjectURL(file)}
                            className="w-[49px] h-8 bg-primary bg-opacity-25"
                          />
                        </div>
                      ) : (
                        <div className="">
                          <label className="font-mulish leading-0 mb-1 font-normal text-primary text-[15px] capitalize">
                            Video
                          </label>
                          <iframe
                            width="49"
                            height="32"
                            src={URL.createObjectURL(file)}
                            title="Youtube Player"
                            frameBorder="0"
                            allowFullScreen
                          />
                        </div>
                      )}
                    </div>
                  );
                }
                return (
                  <div className="flex items-center gap-2">
                    <input
                      id="vue-checkbox"
                      type="checkbox"
                      value=""
                      className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                    />

                    <label className="font-mulish leading-[18px] font-normal text-primary text-[15px] first-letter:uppercase">
                      {text}
                    </label>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="flex gap-2.5 justify-end">
            {buttons.map(({ name, icon, fileType }, id) => {
              const props = { id, icon, fileType, msgs, setMsgs };

              if (id < 2) {
                return <SelectFile {...props} />;
              }
              return (
                <Buttons.primary
                  key={id}
                  // onClick={() => id < 1 && setGenerate(true)}
                  icon={icon}
                  title={name}
                  classname={`${id == 3 && "!text-red-600 !bg-rose-100"}`}
                />
              );
            })}
          </div>
        </div>
      </section>
    </main>
  );
};

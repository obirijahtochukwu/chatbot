"use client";
import React, { useState } from "react";
import { GeneratePhrases } from "./generate-phrases";
import SelectComponent from "./select-component";
import { Buttons } from "./buttons";
import { component_state } from "@/utils/types";

export default function AddUser({
  model,
  setModel,
  component,
  setComponent,
}: {
  model: string;
  setModel: React.Dispatch<string>;
  component: component_state;
  setComponent: React.Dispatch<component_state>;
}) {
  const [msgs, setMsgs] = useState([
    "What time is the next event?",
    "When will be the next event?",
  ]);
  const [inputVal, setInputVal] = useState("");
  const [generate, setGenerate] = useState(false);

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
            <SelectComponent
              component={component}
              setComponent={setComponent}
            />
            <div className="flex gap-3 flex-col">
              {component.state || (
                <div className="text-primary text-md font-normal font-body leading-[18px] mt-3">
                  {component?.value}
                </div>
              )}
              <div className="flex justify-between">
                <input
                  placeholder="User message"
                  value={inputVal}
                  onChange={(e) => setInputVal(e.target.value)}
                  className="w-[341px] focus:outline-none text-primary text-opacity-50 text-md flex items-center pl-6 h-8 bg-neutral font-mulish"
                />
                <button
                  disabled={!inputVal}
                  onClick={() => {
                    if (inputVal) {
                      setMsgs([...msgs, inputVal]);
                      setInputVal("");
                    }
                  }}
                  className="w-[49px] h-8 p-[7px] bg-secondary bg-opacity-10 justify-center items-center text-secondary font-mulish gap-2.5 flex text-md border-none"
                >
                  Save
                </button>
              </div>
              <div className="w-[400px] h-[175px] bg-neutral px-3 py-4">
                <div className="px-3 gap-2 flex flex-col overflow-auto h-full w-full custom-scrollbar">
                  {msgs.map((text: string) => (
                    <div className="flex items-center gap-2">
                      <input
                        id="vue-checkbox"
                        type="checkbox"
                        value=""
                        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                      />

                      <label className="font-mulish leading-[18px] font-normal text-primary text-md first-letter:uppercase">
                        {text}
                      </label>
                    </div>
                  ))}
                </div>
              </div>
              <div className="flex gap-2.5 justify-end">
                {["Generate training phrases", "Components", "Delete"].map(
                  (name, id) => (
                    <div
                      key={id}
                      onClick={() =>
                        id === 1
                          ? setComponent({ ...component, state: true })
                          : id < 1
                          ? setGenerate(true)
                          : null
                      }
                      className={`w-fit h-8 p-[7px] justify-center items-center flex text-md font-mulish cursor-pointer ${
                        id === 2
                          ? "text-red-600 bg-rose-100"
                          : component.state && id === 1
                          ? "hidden"
                          : "bg-secondary   bg-opacity-10 text-secondary"
                      }`}
                    >
                      {name}
                    </div>
                  )
                )}
              </div>
            </div>
          </section>
        )}
      </div>
    </main>
  );
}

export const AddUserDialog = ({
  model,
  setModel,
}: {
  model: string;
  setModel: React.Dispatch<string>;
}) => {
  const [msgs, setMsgs] = useState([
    "What time is the next event?",
    "When will be the next event?",
  ]);

  const [inputVal, setInputVal] = useState("");
  const [generate, setGenerate] = useState(false);

  return (
    <main
      className={`w-fit h-[473px] bg-white rounded-[5px] px-7 flex flex-col gap-3 pt-3 pb-8 shadow-lg ${
        model === "user" ? "" : "hidden"
      }`}
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
            <div className="flex justify-between">
              <input
                placeholder="User message"
                value={inputVal}
                onChange={(e) => setInputVal(e.target.value)}
                className="w-[341px] focus:outline-none text-primary text-opacity-50 text-md flex items-center pl-6 h-8 bg-neutral font-mulish"
              />
              <Buttons.primary
                disabled={!inputVal}
                title="Save"
                onClick={() => {
                  if (inputVal) {
                    setMsgs([...msgs, inputVal]);
                    setInputVal("");
                  }
                }}
              />
            </div>
            <div className="w-[400px] h-[175px] bg-neutral px-3 py-4">
              <div className="px-3 gap-2 flex flex-col overflow-auto h-full w-full custom-scrollbar">
                {msgs.map((text: string) => (
                  <div className="flex items-center gap-2">
                    <input
                      id="vue-checkbox"
                      type="checkbox"
                      value=""
                      className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                    />

                    <label className="font-mulish leading-[18px] font-normal text-primary text-md first-letter:uppercase">
                      {text}
                    </label>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex gap-2.5 justify-end">
              {["Generate training phrases", "Delete"].map((name, id) => (
                <Buttons.primary
                  key={id}
                  onClick={() => id < 1 && setGenerate(true)}
                  title={name}
                  classname={`${id === 1 && "!text-red-600 !bg-rose-100"}`}
                />
              ))}
            </div>
          </div>
        </section>
      )}
    </main>
  );
};

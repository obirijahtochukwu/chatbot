import React, { useState } from "react";
import Title from "../ui/page-title";
import { Buttons } from "../ui/buttons";

export default function Settings() {
  const [isModal, setIsModal] = useState(false);
  const [keys, setKeys] = useState<string[]>([]);

  const props = { isModal, setIsModal, keys, setKeys };

  return (
    <div>
      <Title>Settings</Title>

      <main className="flex justify-between mx-auto w-full max-w-[400px] items-center">
        <div className="text-primary text-[15px] font-normal font-mulish">
          GPT-3 key
        </div>
        <Buttons.primary
          onClick={() => setIsModal(true)}
          classname="relative"
          title={"Add new"}
        >
          <Modal {...props} />
        </Buttons.primary>
      </main>

      <section className="flex w-full max-w-[400px] mx-auto flex-col gap-1">
        {keys?.map((key, idx) => (
          <div className="flex items-center gap-2">
            <div className=" bg-primary bg-opacity-40 rounded-full w-1.5 h-1.5"></div>
            <div className="text-primary text-opacity-80 uppercase text-base font-medium font-mulish">
              {key}
            </div>
          </div>
        ))}
      </section>
    </div>
  );
}

const Modal = ({
  isModal,
  setIsModal,
  keys,
  setKeys,
}: {
  isModal: boolean;
  setIsModal: React.Dispatch<boolean>;
  keys: string[];
  setKeys: React.Dispatch<string[]>;
}) => {
  const [inputVal, setInputVal] = useState("");
  return (
    <main
      className={`w-[452px] flex-col absolute z-10 top-[85px] right-0 h-[199px] px-7 cursor-default pt-12 pb-[66px] bg-white shadow-[0px_4px_35px_5px_rgba(0,0,0,0.15)] ${
        isModal ? "flex" : "hidden"
      }`}
    >
      <div
        onClick={() => setIsModal(false)}
        className="text-primary cursor-pointer absolute top-3 right-3 text-[15px] ml-auto"
      >
        X
      </div>

      <main className="flex text-primary text-[15px] font-normal font-mulish justify-between items-center">
        <div className="">GPT-3 key</div>
        <Buttons.primary
          disabled={!inputVal}
          onClick={() => {
            setKeys([...keys, inputVal]);
            setInputVal("");
          }}
          classname={!inputVal ? "cursor-default" : ""}
          title={"Add key"}
        />
      </main>
      <input
        value={inputVal}
        onChange={(e) => setInputVal(e.target.value)}
        placeholder="848-342-S32-23D"
        className="w-full h-[38px] flex items-center px-4 bg-neutral mt-5 focus:outline-none"
      />
    </main>
  );
};

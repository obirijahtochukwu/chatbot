import { uid } from "@/utils/constants";
import { msg } from "@/utils/types";
import React from "react";

export default function MsgInput({
  inputVal,
  setInputVal,
  msgs,
  setMsgs,
}: {
  inputVal: string;
  setInputVal: React.Dispatch<string>;
  msgs: msg[];
  setMsgs: React.Dispatch<msg[]>;
}) {
  const handleSubmit = (e: any) => {
    e.preventDefault();
    if (inputVal) {
      setMsgs([...msgs, { text: inputVal, id: `${uid()}` }]);
      setInputVal("");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex justify-between">
      <input
        autoFocus
        required
        placeholder="Bot message"
        value={inputVal}
        onChange={(e) => setInputVal(e.target.value)}
        className="w-[341px] focus:outline-none text-primary text-opacity-50 text-md flex items-center pl-6 h-8 bg-neutral font-mulish"
      />
      <button
        type="submit"
        className="w-[49px] h-8 p-[7px] bg-secondary bg-opacity-10 justify-center items-center text-secondary font-mulish gap-2.5 flex text-md border-none"
      >
        Save
      </button>
    </form>
  );
}

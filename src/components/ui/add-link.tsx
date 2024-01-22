import { msg } from "@/utils/types";
import React, { useState } from "react";

export default function AddLink({
  modal,
  setModal,
  msgs,
  setMsgs,
  inputVal,
  setInputVal,
}: {
  modal: boolean;
  setModal: React.Dispatch<boolean>;
  msgs: msg[];
  setMsgs: React.Dispatch<msg[]>;
  inputVal: string;
  setInputVal: React.Dispatch<string>;
}) {
  const [link, setLink] = useState("");
  const [name, setName] = useState("");

  const handleSubmit = (e: any) => {
    e.preventDefault();
    setInputVal(
      `${inputVal} <a style='color: #0177FB; text-decoration: underline' href="https://${link}" target="_blank">${name}</a>`
    );
    setName("");
    setLink("");
    setModal(false);
  };

  const cancel = () => {
    setModal(false);
  };

  return (
    <main
      className={`fixed top-0 duration-300 left-0 h-screen w-screen flex justify-center bg-primary bg-opacity-[0.1] backdrop-blur-sm items-center ${
        modal ? "z-10 visible" : "z-[-1] invisible"
      }`}
    >
      <form
        onSubmit={handleSubmit}
        className={`px-6 py-5 w-96 bg-white rounded-[5px] relative flex flex-col pt-3 pb-8 shadow-lg font-mulish `}
      >
        <div
          onClick={() => setModal(false)}
          className="text-primary cursor-pointer text-md absolute right-3 top-3"
        >
          X
        </div>{" "}
        <header className=" text-base font-semibold font-mulish text-secondary my-4">
          Add link
        </header>
        <div className="text-sm text-primary text-opacity-70 mb-1 leading-none">
          Text to display*
        </div>
        <input
          type={"text"}
          required
          autoFocus
          placeholder={"ex:google,amazon,apple.."}
          value={name}
          onChange={(e: any) => setName(e.target.value)}
          className="h-10 border-2 w-full border-primary focus:outline-none border-opacity-10 rounded flex items-center px-4 text-base text-primary"
        />
        <div className="text-sm text-primary text-opacity-70 leading-none mt-4 mb-1">
          Link*
        </div>{" "}
        <div className="rounded flex border-opacity-10 items-center text-base text-primary h-10 border-2 w-full border-primary overflow-hidden">
          <div className="h-full text-gray-500 bg-neutral flex items-center cursor-auto px-4">
            https://
          </div>
          <input
            type={"text"}
            required
            autoFocus
            placeholder={"Full name"}
            value={link}
            onChange={(e: any) => setLink(e.target.value)}
            className="h-full border-2 w-full border-none flex items-center px-4 focus:outline-none"
          />
        </div>
        <footer className="flex justify-end gap-1 items-center mt-5">
          <div
            onClick={cancel}
            className="py-2 font-semibold px-5 cursor-pointer text-primary text-opacity-70 font-mulish text-base rounded"
          >
            Cancel
          </div>
          <button
            type="submit"
            className="py-2 font-semibold px-5 cursor-pointer bg-secondary text-white font-mulish text-base rounded"
          >
            Save
          </button>
        </footer>
      </form>
    </main>
  );
}

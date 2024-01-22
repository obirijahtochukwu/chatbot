import React, { useState } from "react";
import { Toast } from "./toast";
import { createChatbot } from "@/redux/slice";
import { formattedDate } from "@/utils/constants";
import { chatbot } from "@/utils/types";
import { useDispatch } from "react-redux";

export default function CreateBot({
  modal,
  setModal,
}: {
  modal: boolean;
  setModal: React.Dispatch<boolean>;
}) {
  const { toast, ToastContainer } = Toast();
  const [inputVal, setInputVal] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = (e: any) => {
    e.preventDefault();
    toast("Chatbot created!");
    const chatbot: chatbot = {
      name: inputVal,
      date: formattedDate,
      percent: "80%",
      stories: [],
    };
    dispatch(createChatbot(chatbot));
    setInputVal("");
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
      <ToastContainer />
      <form
        onSubmit={handleSubmit}
        className={`px-6 py-5 w-96 bg-white rounded-[5px] relative flex flex-col gap-3 pt-3 pb-8 shadow-lg `}
      >
        <div
          onClick={() => setModal(false)}
          className="text-primary cursor-pointer text-md absolute right-3 top-3"
        >
          X
        </div>
        <header className=" text-base font-semibold font-mulish text-secondary my-4">
          Create a Chatbot
        </header>
        <div className="text-base text-primary text-opacity-70 capitalize leading-none">
          Chatbot name*
        </div>
        <input
          type={"text"}
          required
          autoFocus
          placeholder={"Full name"}
          value={inputVal}
          onChange={(e: any) => setInputVal(e.target.value)}
          className="h-12 border-2 w-full border-primary focus:outline-secondary border-opacity-10 rounded flex items-center px-4 text-lg text-primary"
        />

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
            Submit
          </button>
        </footer>
      </form>
    </main>
  );
}

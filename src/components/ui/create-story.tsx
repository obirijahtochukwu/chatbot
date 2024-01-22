import { chatbot, story } from "@/utils/types";
import { useDispatch, useSelector } from "react-redux";
import { Toast } from "./toast";
import { useState } from "react";
import { createStory } from "@/redux/slice";
import { useParams, useRouter } from "next/navigation";
import { stories } from "@/components/pages/dashboard";

export default function CreateStory({
  isModal,
  setIsModal,
  template,
  setTemplate,
}: {
  isModal: boolean;
  setIsModal: React.Dispatch<boolean>;
  template: string;
  setTemplate: React.Dispatch<string>;
}) {
  const chatbots = useSelector((state: any) => state.context.chatbots);
  const params = useParams();

  const { toast, ToastContainer } = Toast();
  const [inputVal, setInputVal] = useState("");
  const dispatch = useDispatch();
  const router = useRouter();

  const handleSubmit = (e: any) => {
    e.preventDefault();
    const story: story = {
      name: inputVal,
      template,
      interactions: [],
    };
    const bot = chatbots?.find((bot: any, idx: any) => idx === +params.slug);
    const stories = [...bot.stories, story];
    const newArray = { ...bot, stories };
    const chats = chatbots.map((bot: chatbot) =>
      bot.name == newArray.name ? newArray : bot
    );

    toast("Story created!");
    dispatch(createStory(chats));
    setInputVal("");
    // setIsModal(false);
    router.push(`/story/${params.slug}/${stories.length - 1}`);
  };

  const cancel = () => {
    setIsModal(false);
    setTemplate("");
  };

  return (
    <main
      className={`fixed top-0 duration-300 left-0 h-screen w-screen flex justify-center bg-primary bg-opacity-[0.1] backdrop-blur-sm items-center ${
        isModal ? "z-10 visible" : "z-[-1] invisible"
      }`}
    >
      <ToastContainer />
      <form
        onSubmit={handleSubmit}
        className={`px-6 py-5 w-96 bg-white rounded-[5px] relative flex flex-col gap-3 pt-3 pb-8 shadow-lg `}
      >
        <div
          onClick={() => setIsModal(false)}
          className="text-primary cursor-pointer text-md absolute right-3 top-3"
        >
          X
        </div>
        <header className=" text-base font-semibold font-mulish text-secondary my-4">
          Create a story
        </header>
        <div className="text-base text-primary text-opacity-70 capitalize leading-none">
          Story name*
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

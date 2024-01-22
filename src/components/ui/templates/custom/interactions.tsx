import { component_state, interaction, story } from "@/utils/types";
import { useState } from "react";
import BotUser from "../../bot-user";
import EditUserMsg from "@/utils/libs/edit-user-msg";
import EditBotMsg from "@/utils/libs/edit-bot-msg";
import { delete_msg } from "@/utils/functions";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "next/navigation";
import AddUser from "@/utils/add-user";
import AddBot from "@/utils/add-bot";

export const Interaction = ({
  id,
  idx,
  story,
  name,
  messages,
}: { idx: number; story: story } & interaction) => {
  const [newMessage, setNewMessage] = useState(false);
  const [model, setModel] = useState<string | any>("");
  const [editModel, setEditModel] = useState<string | any>("");
  const index = idx;

  const dispatch = useDispatch();
  const chatbots = useSelector((state: any) => state.context.chatbots);
  const params = useParams();

  const props: any = {
    id,
    story,
    model,
    setModel,
    editModel,
    setEditModel,
    messages,
    index,
    dispatch,
    chatbots,
    params,
  };

  const deleteMsg = () => {
    delete_msg({ ...props });
  };

  const lastChat = index == story.interactions.length - 1 ? true : false;

  return (
    <main key={id} className="">
      <section className="w-60 mx-auto h-fit pt-[14px] px-4 pb-7 flex flex-col gap-5 bg-white rounded-[5px] shadow-lg">
        <div className="text-center text-primary text-md font-black font-mulish capitalize leading-[18px]">
          {name}
        </div>
        <div className="bg-neutral mx-auto w-[187px] h-fit min-h-[138px] px-6 py-4">
          {messages.map(({ text }: { text: string }) => (
            <div
              dangerouslySetInnerHTML={{ __html: text || "" }}
              className="font-mulish leading-[18px] font-normal text-primary text-md first-letter:uppercase"
            ></div>
          ))}
        </div>
        <div className="flex gap-2">
          <div
            //@ts-ignore
            onClick={() => {
              setEditModel(name);
            }}
            className="px-8 py-3 cursor-pointer text-secondary bg-secondary bg-opacity-10 justify-center items-center gap-2.5 flex leading-[18px] text-md font-semibold font-mulish"
          >
            Edit
          </div>
          <div
            onClick={deleteMsg}
            className="px-8 py-3 cursor-pointer bg-red-600 bg-opacity-10 justify-center items-center gap-2.5 flex leading-[18px] text-md text-red-600  font-semibold font-mulish"
          >
            Delete
          </div>
        </div>
      </section>
      <footer
        className={`${
          lastChat ? "hidden" : "flex"
        } flex-col justify-center items-center`}
      >
        <div className="w-[0.50px] h-[57px] bg-primary" />
        <div
          onClick={() => setNewMessage(!newMessage)}
          className="w-[45px] cursor-pointer h-[45px] hover:shadow-lg duration-100 bg-white flex items-center justify-center rounded-[200px] text-primary relative text-xl shadow"
        >
          + {newMessage ? <BotUser setModel={setModel} /> : null}
        </div>
        <div className="w-[0.50px] h-[57px] bg-primary" />
      </footer>

      {/* <---------- modals & more ----------> */}
      <AddUser {...props} />
      <AddBot {...props} />
      <EditUserMsg {...props} deleteMsg={deleteMsg} />
      <EditBotMsg {...props} deleteMsg={deleteMsg} />
    </main>
  );
};

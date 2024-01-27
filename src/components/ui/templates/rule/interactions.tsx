import { component_state, interaction, msg, story } from "@/utils/types";
import { useState } from "react";
import BotUser from "../../bot-user";
import { delete_msg } from "@/utils/functions";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "next/navigation";
import Media from "../../media";
import EditUserMsg from "../custom/edit-user-msg";
import EditBotMsg from "../custom/edit-bot-msg";

export const Interaction = ({
  interaction,
  idx,
  story,
}: {
  idx: number;
  interaction: interaction;
  story: story;
} & interaction) => {
  const [newMessage, setNewMessage] = useState(false);
  const [model, setModel] = useState<string | any>("");
  const [editModel, setEditModel] = useState<string | any>("");
  const [component, setComponent] = useState<component_state>({
    state: false,
    value: interaction.component || "",
  });

  const index = idx;

  const dispatch = useDispatch();
  const chatbots = useSelector((state: any) => state.context.chatbots);
  const params = useParams();

  const props: any = {
    id: interaction.id,
    interaction,
    story,
    model,
    setModel,
    editModel,
    setEditModel,
    index,
    dispatch,
    chatbots,
    params,
    component,
    setComponent,
  };

  const deleteMsg = () => {
    delete_msg({ ...props });
  };

  const lastChat = index == story.interactions.length - 1 ? true : false;

  return (
    <main key={interaction.id} className="">
      <section className="w-60 mx-auto h-fit pt-[14px] px-4 pb-7 flex flex-col gap-5 bg-white rounded-[5px] shadow-lg">
        <div className="text-center text-primary text-md font-black font-mulish capitalize leading-[18px]">
          {interaction.name}
        </div>
        <div className="bg-neutral mx-auto w-[187px] h-fit min-h-[138px] px-6 py-4">
          {interaction.messages.map(({ text, file, id }: msg, idx: number) =>
            file?.name ? (
              <Media file={file} />
            ) : (
              <div
                key={idx}
                dangerouslySetInnerHTML={{ __html: text || "" }}
                className="font-mulish leading-[18px] font-normal text-primary text-md first-letter:uppercase"
              ></div>
            )
          )}
        </div>
        <div className="flex gap-2">
          <div
            //@ts-ignore
            onClick={() => {
              setEditModel(interaction.name);
            }}
            className="px-8 py-3 cursor-pointer text-secondary bg-secondary bg-opacity-10 justify-center items-center gap-2.5 flex leading-[18px] text-md font-semibold font-mulish"
          >
            Edit
          </div>
          <div
            onClick={() => deleteMsg()}
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
          + {newMessage ? <BotUser setModel={setEditModel} /> : null}
        </div>
        <div className="w-[0.50px] h-[57px] bg-primary" />
      </footer>

      {/* <---------- modals & more ----------> */}
      <EditUserMsg {...props} deleteMsg={deleteMsg} />
      <EditBotMsg {...props} deleteMsg={deleteMsg} />
    </main>
  );
};

import { components } from "@/utils/constants";
import { Params } from "next/dist/shared/lib/router/utils/route-matcher";
import { useParams } from "next/navigation";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { chatbot, interaction, story } from "@/utils/types";
import { AddBotDialog } from "@/components/ui/add-bot-dialog";
import EditBotMsg from "./edit-bot-msg";
import { delete_msg } from "@/utils/functions";
import EditUserMsg from "./edit-user-msg";

export default function Components() {
  const [activeTab, setActiveTab] = useState("user");
  const [component, setComponent] = useState("Component A");

  const params: Params = useParams();

  const { chatbots } = useSelector((state: any) => state.context);
  const chatbot = chatbots?.find(
    (story: any, idx: any) => idx === +params.slug[0]
  );
  const story: story = chatbot?.stories?.find(
    (story: any, idx: any) => idx === +params.slug[1]
  );

  const props = {
    component,
    setComponent,
    activeTab,
    setActiveTab,
    story,
    chatbots,
    params,
  };

  return (
    <main className="w-full">
      <div className="flex items-center">
        <div className="text-primary font-body text-[26px] font-medium">
          {chatbot?.name} / {story?.name} / Components
        </div>
      </div>

      <section className="flex mt-4 gap-3 max-lg:flex-col">
        <aside className="pt-9 w-[350px] flex flex-col gap-7">
          <div className="w-fit relative mx-auto p-[2.5px] flex items-center h-fit rounded-[75px] border border-secondary">
            {["user", "bot"].map((name: string) => (
              <div
                key={name}
                onClick={() => setActiveTab(name)}
                className={`w-fit h-[30px] px-[21px] py-[9px] cursor-pointer rounded-[75px] justify-center duration-200 items-center flex text-[14.87px] ${
                  activeTab == name
                    ? "bg-secondary text-white"
                    : "text-primary  hover:bg-blue-50"
                }`}
              >
                {name}
              </div>
            ))}
          </div>
          <SelectComponent {...props} />
        </aside>

        {/* <AddBotDialog model={activeTab} setModel={setActiveTab} /> */}
      </section>
    </main>
  );
}

const SelectComponent = ({
  activeTab,
  story,
  component,
  setComponent,
  setActiveTab,
  chatbots,
  params,
}: {
  story: story;
  activeTab: string;
  component: string;
  setComponent: React.Dispatch<string>;
  setActiveTab: React.Dispatch<string>;
  chatbots: chatbot[];
  params: Params;
}) => {
  return (
    <div className="flex w-fit flex-col gap-2">
      {story?.interactions.map((props, index) => {
        const _component: string | any = props.component;
        const _props = {
          component,
          chatbots,
          params,
          setComponent,
          index,
          _component,
          props,
          story,
          activeTab,
        };
        return <Interaction {..._props} />;
      })}
    </div>
  );
};

const Interaction = ({
  _component,
  props,
  index,
  story,
  component,
  setComponent,
  activeTab,
  chatbots,
  params,
}: {
  _component: string;
  props: interaction;
  index: number;
  story: story;
  component: string;
  setComponent: React.Dispatch<string>;
  activeTab: string;
  chatbots: chatbot[];
  params: Params;
}) => {
  const dispatch = useDispatch();

  const deleteMsg = () => {
    delete_msg({ ..._props });
  };

  const _props: any = {
    interaction: props,
    id: props.id,
    _component,
    index,
    messages: props.messages,
    story,
    editModel: component,
    setEditModel: setComponent,
    chatbots,
    params,
    dispatch,
    deleteMsg,
  };

  if (props.name == activeTab && _component) {
    return (
      <div key={_component} className="flex items-center gap-3">
        <div
          onClick={() => setComponent(_component)}
          className={`font-body rounded-[200px] w-[317px] items-center flex justify-between duration-150 font-normal text-md px-2.5 cursor-pointer ${
            component === _component
              ? "text-white py-3 bg-secondary h-[38px]"
              : "text-primary"
          }`}
        >
          <div className="">{_component}</div>
          <div className="">{props.messages.length}</div>
        </div>
        {component == _component && (
          <img
            src="/media/components/Trash Can.svg"
            alt=""
            onClick={() => console.log(_component)}
            className="w-5 cursor-pointer h-5"
          />
        )}

        {props.name == "bot" ? (
          <EditBotMsg {..._props} />
        ) : (
          <EditUserMsg {..._props} />
        )}
        {/* <EditUserMsg {..._props} /> */}
      </div>
    );
  }
};

import { components } from "@/utils/constants";
import { Params } from "next/dist/shared/lib/router/utils/route-matcher";
import { useParams } from "next/navigation";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { AddUserDialog } from "../ui/add-user";
import { AddBotDialog } from "../ui/add-bot";

export default function Components() {
  const [activeTab, setActiveTab] = useState("user");
  const [component, setComponent] = useState("Component A");
  const params: Params = useParams();
  const { chatbot } = useSelector((state: any) => state.context);
  const story = chatbot?.stories?.find(
    (story: any, idx: any) => idx === params.slug
  );

  const props = { component, setComponent, activeTab, setActiveTab };

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
        <AddUserDialog model={activeTab} setModel={setActiveTab} />
        <AddBotDialog model={activeTab} setModel={setActiveTab} />
      </section>
    </main>
  );
}

const SelectComponent = ({
  component,
  setComponent,
}: {
  component: string;
  setComponent: React.Dispatch<string>;
}) => {
  const [list, setList] = useState(components);

  const deleteComp = (name: string) => {
    const items = list.filter((item) => item.name != name);
    setList(items);
  };

  return (
    <div className="flex w-fit flex-col gap-2">
      {list.map(({ name, value }) => (
        <div className="flex items-center gap-3">
          <div
            onClick={() => setComponent(name)}
            className={`font-body rounded-[200px] w-[317px] items-center flex justify-between duration-150 font-normal text-md px-2.5 cursor-pointer ${
              component === name
                ? "text-white py-3 bg-secondary h-[38px]"
                : "text-primary"
            }`}
          >
            <div className="">{name}</div>
            <div className="">{value}</div>
          </div>
          {component === name && (
            <img
              src="/media/components/Trash Can.svg"
              alt=""
              onClick={() => deleteComp(name)}
              className="w-5 cursor-pointer h-5"
            />
          )}
        </div>
      ))}
    </div>
  );
};

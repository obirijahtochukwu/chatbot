import { components } from "@/utils/constants";
import { component } from "@/utils/types";
import React from "react";
interface types {
  state: boolean;
  value: string;
}
export default function SelectComponent({
  component,
  setComponent,
}: {
  component: types;
  setComponent: React.Dispatch<types>;
}) {
  return (
    <div className={component.state ? "flex flex-col gap-3" : "hidden"}>
      <div className="font-inter text-primary font-medium text-[26px]">
        Components
      </div>
      <div className="flex w-[337px] px-2.5 py-[18px] h-[175px] flex-col justify-between bg-neutral">
        {components.map(({ name, value }) => (
          <div
            onClick={() => setComponent({ ...component, value: name })}
            className={`font-inter w-full rounded-[200px] items-center flex justify-between duration-150 font-normal text-[15px] px-2.5 cursor-pointer ${
              component.value == name
                ? "text-white py-3 bg-secondary h-[38px]"
                : "text-primary"
            }`}
          >
            <div className="">{name}</div>
            <div className="">{value}</div>
          </div>
        ))}
      </div>
      <div
        onClick={() => setComponent({ ...component, state: false })}
        className={`w-fit h-8 p-[7px] justify-center items-center flex text-[15px] font-mulish ml-auto cursor-pointer bg-secondary bg-opacity-10 text-secondary
              }`}
      >
        Add component
      </div>
    </div>
  );
}

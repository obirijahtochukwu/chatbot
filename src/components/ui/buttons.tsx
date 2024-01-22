import { button } from "@/utils/types";
import React from "react";

export const Buttons = {
  side: ({ title, classname, ...props }: { classname?: string } & button) => (
    <button
      {...props}
      className={`w-fit capitalize h-14 px-5 py-5 rounded-sm border text-center mt-11 text-secondary duration-100 hover:shadow-lg text-base border-secondary justify-center cursor-pointer items-center flex font-mulish ${classname}`}
    >
      {title}
    </button>
  ),
  primary: ({
    title,
    icon,
    classname,
    children,
    checkbox,
    ...props
  }: {
    title?: string;
    checkbox?: boolean;
    classname?: string;
    icon?: React.HTMLAttributes<SVGElement> | any;
  } & button) => (
    <div className="relative">
      <button
        type={props.type || "button"}
        {...props}
        className={`w-fit h-8 p-[7px] bg-secondary bg-opacity-10 cursor-pointer justify-center items-center text-secondary font-mulish gap-2.5 flex text-md ${classname}`}
      >
        {title}
        {checkbox ? (
          <div className="relative">
            <input
              type="checkbox"
              checked
              // checked={isChecked}
              // onChange={handleCheckboxChange}
              className="sr-only"
            />
            <div className="h-3 w-7 rounded-full bg-[#E5E7EB] shadow-inner"></div>
            <div className="dot shadow-switch-1 absolute left-0 -top-1 h-4 w-4 rounded-full bg-white transition"></div>
          </div>
        ) : icon ? (
          <>{icon}</>
        ) : null}
      </button>
      <>{children}</>
    </div>
  ),
};

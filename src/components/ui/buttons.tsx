import { button } from "@/utils/types";
import React from "react";

export const Buttons = {
  side: ({ title, ...props }: button) => (
    <button
      {...props}
      className="w-fit capitalize h-14 px-5 py-5 rounded-sm border text-center mt-11 text-secondary duration-100 hover:shadow-lg text-base border-secondary justify-center cursor-pointer items-center flex font-mulish"
    >
      {title}
    </button>
  ),
};

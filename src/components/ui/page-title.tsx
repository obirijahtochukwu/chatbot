import { button } from "@/utils/types";
import { HtmlContext } from "next/dist/server/future/route-modules/app-page/vendored/contexts/entrypoints";
import React from "react";

export default function Title({ children, className }: button) {
  return (
    <div
      className={
        "text-primary mb-5 font-body text-[26px] font-medium " + className
      }
    >
      {children}
    </div>
  );
}

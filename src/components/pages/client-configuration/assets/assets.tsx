import { Icons } from "@/components/ui/icons";
import { font_setting, icons_setting } from "@/utils/constants";
import React from "react";

export default function Assets() {
  return (
    <main className=" text-primary text-sm font-body">
      <div className=""></div>
      <div className="font-semibold mb-4">Font settings</div>
      <section className="flex flex-wrap w-full max-w-xs gap-3">
        {font_setting.map(({ title, value }, idx) => (
          <div key={idx} className="">
            <div className="h-[31px] flex items-center font-medium text-opacity-70">
              {title}
            </div>
            <input
              type="text"
              value={value}
              className={`h-12 items-center rounded-full font-medium px-5 border border-opacity-60 border-primary ${
                value.includes("px") ? "w-28" : "w-40"
              }`}
            />
          </div>
        ))}
      </section>

      <div className="font-semibold mb-4 mt-5">Icons and Images</div>
      <article className="flex gap-y-5 gap-x-12 flex-wrap w-full max-w-2xl">
        {icons_setting.map(({ name }, idx) => (
          <div key={idx} className="font-medium leading-5">
            <div className=" text-opacity-70">{name}</div>
            <div className="w-[300px] h-12 rounded-full border border-primary border-opacity-60 flex items-center px-5 gap-5">
              <input
                type="text"
                placeholder="paste url"
                className="h-full w-full focus:outline-none"
              />
              <Icons.upload className="w-4 h-5 cursor-pointer" />
            </div>
          </div>
        ))}
      </article>
    </main>
  );
}

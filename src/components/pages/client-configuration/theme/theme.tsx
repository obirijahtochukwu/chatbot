import {
  chat_container,
  chatbot_sizes,
  color_theme,
  customize_colors,
  ranges,
} from "@/utils/constants";
import React from "react";

export default function Theme() {
  return (
    <main className="text-sm text-primary font-body">
      <div className="text-opacity-70">Color theme</div>
      <section className="flex gap-5 mb-[18px]">
        {color_theme.map(({ color }, idx) => (
          <div key={idx} className="flex flex-col justify-center w-[50px]">
            <div
              style={{ background: idx < 1 ? "#0177FB" : color }}
              className={`h-[50px] w-full rounded-full ${
                idx > 0 && "opacity-50"
              }`}
            />
            <div
              className={`text-center font-normal font-body ${
                idx > 0 ? " text-opacity-70" : ""
              }`}
            >
              {color}
            </div>
          </div>
        ))}
      </section>
      <div className="text-opacity-70">Chatbot Size</div>
      <section className="flex gap-5">
        {chatbot_sizes.map(({ title, size }, idx) => (
          <div key={idx} className="flex flex-col justify-center w-fit">
            <div
              style={{ height: size, width: size }}
              className={`bg-secondary mx-auto ${idx != 1 && "opacity-50"}`}
            />
            <div
              className={`text-sm text-primary text-center font-body ${
                idx != 1 ? "font-normal text-opacity-70" : " font-semibold"
              }`}
            >
              {title}
            </div>
          </div>
        ))}
      </section>

      <div className=" text-2xl font-medium mt-9">Customize</div>
      <div className="font-semibold mt-7">Color theme</div>
      <section className="flex flex-col gap-6">
        {customize_colors.map(
          ({ title, theme }, idx) =>
            idx < 1 && (
              <div
                key={idx}
                className="flex justify-between w-full  max-w-[650px]"
              >
                <div className="w-[93px]"></div>
                {theme.map((item, idx) => (
                  <div
                    key={idx}
                    className="w-[30px] whitespace-nowrap h-[30px] flex items-center justify-center"
                  >
                    {item.for}
                  </div>
                ))}
              </div>
            )
        )}
        {customize_colors.map(({ title, theme }, idx) => (
          <div key={idx} className="flex justify-between w-full  max-w-[650px]">
            <div className=" text-sm font-medium text-primary w-[93px]">
              {title}
            </div>
            {theme.map(({ color }, idx) =>
              color ? (
                <input
                  type="color"
                  key={idx}
                  name=""
                  value={color}
                  id=""
                  className="w-[30px] h-[30px]"
                />
              ) : (
                <div className="w-[30px] h-[30px] flex items-center justify-center">
                  -
                </div>
              )
            )}
          </div>
        ))}
      </section>
      <article className="flex flex-col mt-12 gap-9">
        {ranges.map(({ title, settings }) => (
          <div className="">
            <div className="font-semibold mb-2.5">{title}</div>
            <div className="flex gap-20">
              {settings.map(({ name }) => (
                <div className=" flex flex-col gap-5">
                  <div className=" font-normal">{name}</div>
                  <input type="range" name="" id="" className="h-[2px] w-72" />
                </div>
              ))}
            </div>
          </div>
        ))}
      </article>
      <div className="text-sm font-body text-primary font-semibold mt-8 mb-7">
        Condensed Chat Container
      </div>
      <section className="flex flex-wrap gap-12">
        {chat_container.map(({ title, value }) => (
          <div className="">
            <div className="h-[31px] flex items-center font-medium text-opacity-70">
              {title}
            </div>
            <input
              type="text"
              value={value}
              className="w-80 h-12 items-center rounded-full font-medium px-5 border border-opacity-60 border-primary"
            />
          </div>
        ))}
      </section>
    </main>
  );
}

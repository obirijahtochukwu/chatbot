import { Icons } from "@/components/ui/icons";
import { config } from "@/utils/constants";
import { handleCopy } from "@/utils/functions";
import { settings } from "@/utils/types";
import React from "react";
import BotModal from "./bot-modal";

export default function Essantials() {
  return (
    <main>
      <BotModal />
      <header className="flex w-[300px] justify-center items-center flex-col gap-1">
        <img className="w-12 h-12" src={"/media/config/bot.svg"} />
        <div className="text-primary font-normal text-opacity-70 text-base font-body leading-[18px]">
          Profile photo
        </div>
      </header>{" "}
      <section className="flex flex-col gap-3">
        {config.map(({ settings }) => (
          <div className="flex gap-7">
            {settings.map(({ title, value, select, copy }: settings) => (
              <div className=" text-primary text-sm font-body font-medium leading-5">
                <div className=" text-primary text-opacity-70">{title}</div>
                <div className="w-[300px] h-12 rounded-full border border-primary border-opacity-60 flex items-center px-5 gap-5">
                  <input
                    type="text"
                    value={value}
                    className="h-full w-full focus:outline-none"
                  />
                  {select && <Icons.arrow className=" rotate-90 h-5 w-5" />}
                  {copy && (
                    <img
                      src="/media/config/Copy.svg"
                      alt=""
                      className="h-5 w-5 cursor-pointer"
                      onClick={() => handleCopy(value)}
                    />
                  )}
                </div>
              </div>
            ))}
          </div>
        ))}
      </section>
    </main>
  );
}

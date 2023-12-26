import { Icons } from "@/components/ui/icons";
import { config } from "@/utils/constants";
import { handleCopy } from "@/utils/functions";
import { settings } from "@/utils/types";
import React from "react";

export default function Essantials() {
  return (
    <main>
      <header className="flex justify-center items-center flex-col gap-1">
        <img className="w-12 h-12" src={"/media/config/bot.svg"} />
        <div className="text-primary font-normal text-opacity-70 text-base font-inter leading-[18px]">
          Profile photo
        </div>
      </header>{" "}
      <section className="flex flex-col gap-2.5">
        {config.map(({ settings }) => (
          <div className="flex gap-7">
            {settings.map(({ title, value, select, copy }: settings) => (
              <div className="">
                <div className="">{title}</div>
                <div className="">
                  <input type="text" value={value} />
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

import { scripts } from "@/utils/constants";
import { handleCopy } from "@/utils/functions";
import React from "react";

export const GenerateScript = ({
  script,
  setScript,
}: {
  script: boolean;
  setScript: React.Dispatch<boolean>;
}) => {
  return (
    <main
      className={`fixed top-0 duration-300 left-0 h-screen w-screen flex justify-center bg-primary bg-opacity-[0.1] backdrop-blur-sm items-center ${
        script ? "z-10 visible" : "z-[-1] invisible"
      }`}
    >
      <div
        className={`px-6 py-5 w-96 bg-white rounded-[5px] relative flex flex-col gap-3 pt-3 pb-8 shadow-lg `}
      >
        <div
          onClick={() => setScript(false)}
          className="text-primary cursor-pointer text-md absolute right-3 top-3"
        >
          X
        </div>
        <header className=" text-md font-semibold font-mulish text-primary mb-4">
          Generate Script
        </header>

        <section className="flex flex-col gap-5">
          {scripts.map(({ title, value }) => (
            <div className="flex flex-col gap-4 text-md font-mulish font-normal">
              <div className="">{title}</div>
              <div className="h-12 flex gap-5 px-4 items-center bg-neutral w-full">
                <div className=" truncate">{value}</div>
                <img
                  src="/media/config/Copy.svg"
                  alt=""
                  className="h-5 w-5 cursor-pointer"
                  onClick={() => handleCopy(value)}
                />
              </div>
            </div>
          ))}
        </section>
      </div>
    </main>
  );
};

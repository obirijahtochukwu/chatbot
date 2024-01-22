import { msg } from "@/utils/types";
import React from "react";
import Media from "./media";

export default function Msgs({ msgs }: { msgs: msg[] }) {
  return (
    <section className="w-[400px] h-[175px] bg-neutral px-3 py-4">
      <div className="px-3 gap-2 flex flex-col overflow-auto h-full w-full custom-scrollbar">
        {msgs.map(({ text, file }) =>
          file?.name ? (
            <Media file={file} />
          ) : (
            <div className="flex items-center gap-2">
              <input
                id="vue-checkbox"
                type="checkbox"
                value=""
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
              />

              <label
                dangerouslySetInnerHTML={{ __html: text || "" }}
                className="font-mulish leading-[18px] font-normal text-primary text-md first-letter:uppercase"
              ></label>
            </div>
          )
        )}
      </div>
    </section>
  );
}

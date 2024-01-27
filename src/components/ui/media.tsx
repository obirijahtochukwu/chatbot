import { FileInfo, msg } from "@/utils/types";
import React from "react";
import { Icons } from "./icons";

export default function Media({
  file,
  id,
  msgs,
  setMsgs,
}: { msgs?: msg[]; setMsgs?: React.Dispatch<msg[]> } & msg) {
  const handleDelete = (id?: string) => {
    //@ts-ignore
    const _msgs = msgs.filter((msg) => msg.id != id);
    //@ts-ignore
    setMsgs(_msgs);
  };

  return (
    <section key={URL.createObjectURL(file)} className="flex gap-2 items-start">
      <input
        id="vue-checkbox"
        type="checkbox"
        value=""
        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
      />
      {file?.type.includes("image") ? (
        <div className="">
          <label className="font-mulish relative -top-1 leading-0 mb-1 font-normal text-primary text-md capitalize">
            image
          </label>
          <img
            src={URL.createObjectURL(file)}
            className="w-[49px] h-8 bg-primary bg-opacity-25"
          />
        </div>
      ) : (
        <div className="">
          <label className="font-mulish relative -top-1 leading-0 mb-1 font-normal text-primary text-md capitalize">
            Video
          </label>
          <iframe
            width="49"
            height="32"
            src={URL.createObjectURL(file)}
            title="Youtube Player"
            frameBorder="0"
            allowFullScreen
          />
        </div>
      )}
      <Icons.delete
        onClick={() => handleDelete(id)}
        className="h-5 ml-auto  cursor-pointer"
      />
    </section>
  );
}

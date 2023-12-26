import React from "react";

export default function BotUser({
  setModel,
}: {
  setModel: React.Dispatch<string>;
}) {
  const options = [
    { name: "bot", img: "/media/story/chatgpt robot.svg" },
    { name: "user", img: "/media/story/user icon.svg" },
  ];
  return (
    <main className="w-fit absolute top-full left-[calc((100%-299px)/2)] flex gap-6 h-fit px-[41px] py-[25px] bg-white shadow">
      {options.map(({ name, img }: { name: string; img: string }) => {
        return (
          <div
            onClick={() => setModel(name)}
            className="w-[100px] flex justify-center items-center flex-col bg-neutral h-[100px] gap-1"
          >
            <img className="w-[35px] h-[56.40px]" src={img} />
            <div className="text-black capitalize text-md font-mulish leading-[18px]">
              {name}
            </div>
          </div>
        );
      })}
    </main>
  );
}

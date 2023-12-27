import React from "react";

export default function TestModel({
  testModel,
  setTestModel,
}: {
  testModel: boolean;
  setTestModel: React.Dispatch<boolean>;
}) {
  return (
    <main
      className={`w-[469px] flex-col absolute z-10 top-[85px] right-0 max-h-[618px] px-12 cursor-default py-[28px] bg-neutral shadow-[0px_4px_35px_5px_rgba(0,0,0,0.15)] ${
        testModel ? "flex" : "hidden"
      }`}
    >
      <div
        onClick={() => setTestModel(false)}
        className="text-primary cursor-pointer absolute top-3 right-3 text-md ml-auto"
      >
        X
      </div>
      <div className="text-md text-start text-primary font-body font-normal">
        Test Model
      </div>

      <section className="flex mt-12 flex-col text-start gap-6">
        {chats.map(({ name, msgs }) => (
          <div className="flex flex-col gap-[6px] ">
            {msgs.map((msg) => (
              <div
                className={`py-[14px] w-[300px] px-5 rounded-xl text-md font-normal tracking-[0.35px] font-body ${
                  name == "bot"
                    ? "text-primary bg-white"
                    : "ml-auto bg-secondary text-white"
                }`}
              >
                {msg}
              </div>
            ))}
          </div>
        ))}
      </section>
    </main>
  );
}

export const chats = [
  {
    name: "bot",
    msgs: ["Lorem ipsum dolor sit amet, consectetur adipiscing elit"],
  },
  {
    name: "user",
    msgs: [
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      "Lorem ipsum dolor sit amet",
    ],
  },
  {
    name: "bot",
    msgs: [
      "Lorem ipsum dolor sit amet",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    ],
  },
];

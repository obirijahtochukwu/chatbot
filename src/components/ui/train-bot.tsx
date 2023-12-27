import React, { useState } from "react";
import { Buttons } from "./buttons";
import { useSelector } from "react-redux";
import TestModel from "./test-model";

export default function TrainBot({
  trainBot,
  setTrainBot,
}: {
  trainBot: boolean;
  setTrainBot: React.Dispatch<boolean>;
}) {
  const { chatbot } = useSelector((state: any) => state.context);
  const [testModel, setTestModel] = useState(false);

  const table = [
    "User",
    "Start time",
    "End time",
    "Total time",
    "Status",
    "Model Config.",
  ];

  const data = [
    {
      email: "user@gmail.com",
      start_time: "22/03/23, 9:00",
      end_time: "22/03/23, 9:02",
      total_time: "02 min",
      status: "Done",
      config: "View Details",
    },
  ];

  return (
    <main
      className={`fixed top-0 duration-300 left-0 h-screen w-screen flex justify-center bg-primary bg-opacity-[0.1] backdrop-blur-sm items-center ${
        trainBot ? "z-10 visible" : "z-[-1] invisible"
      }`}
    >
      <div
        className={`w-10/12 2xl:w-full max-w-[1431px] h-[646px] bg-white rounded-[5px] px-6 flex flex-col gap-3 pt-4 pb-16 shadow-lg `}
      >
        <div
          onClick={() => setTrainBot(false)}
          className="text-primary cursor-pointer text-md ml-auto relative top-[-12px] right-[-16px]"
        >
          X
        </div>
        <header className="flex items-center mb-12 gap-2.5">
          <img
            className="w-14 h-16 rounded-full"
            src="/media/dashboard/dashboard-1.svg"
          />
          <div className=" text-base font-body text-primary font-medium capitalize">
            {chatbot.name}
          </div>
        </header>
        <div className="flex justify-end items-center gap-3 mb-3">
          <div className="text-md font-mulish text-primary font-normal mr-auto">
            Train History
          </div>
          {["Reload model", "Test model"].map((name, idx) => (
            <Buttons.primary
              key={idx}
              onClick={() => idx == 1 && setTestModel(true)}
              classname="relative"
              title={name}
            >
              {idx == 1 && (
                <TestModel testModel={testModel} setTestModel={setTestModel} />
              )}
            </Buttons.primary>
          ))}
        </div>
        <main className="w-full h-[395px]  bg-neutral py-2 px-4">
          <div className=" grid grid-cols-12">
            {table.map((title, idx) => {
              return (
                <div
                  key={idx}
                  className={`text-md font-semibold font-mulish text-primary ${
                    idx == 0
                      ? "col-span-3"
                      : idx == 4
                      ? "col-span-1"
                      : "col-span-2 "
                  }`}
                >
                  {title}
                </div>
              );
            })}
          </div>
          {data.map(
            (
              { email, start_time, end_time, total_time, status, config },
              idx
            ) => {
              return (
                <div
                  key={idx}
                  className="grid grid-cols-12 text-md font-normal font-mulish text-primary"
                >
                  <div className="col-span-3">{email}</div>
                  <div className="col-span-2">{start_time}</div>
                  <div className="col-span-2">{end_time}</div>
                  <div className="col-span-2">{total_time}</div>
                  <div className="col-span-1">{status}</div>
                  <div className="col-span-2 cursor-pointer underline">
                    {config}
                  </div>
                </div>
              );
            }
          )}
        </main>
      </div>
    </main>
  );
}

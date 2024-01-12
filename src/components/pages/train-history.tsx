import { Params } from "next/dist/shared/lib/router/utils/route-matcher";
import { useParams } from "next/navigation";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Buttons } from "../ui/buttons";
import TestModel from "../ui/test-model";
import TrainBot from "../ui/train-bot";

export default function TrainHistory() {
  const [trainBot, setTrainBot] = useState(false);

  const params: Params = useParams();
  const { chatbot } = useSelector((state: any) => state.context);
  const story = chatbot?.stories?.find(
    (story: any, idx: any) => idx === params.slug
  );

  const props = { trainBot, setTrainBot };

  return (
    <main className="w-full">
      <div className="text-primary mb-5 font-body text-[26px] font-medium">
        {chatbot?.name} / {story?.name} / Train history
      </div>
      <Buttons.side
        classname="ml-auto mr-12 relative bottom-[-38px]"
        onClick={() => setTrainBot(true)}
        title="Train Bot"
      />
      <TrainBot {...props} />
      <TrainBotDialog />
    </main>
  );
}

const TrainBotDialog = () => {
  const [testModel, setTestModel] = useState(false);
  const { chatbot } = useSelector((state: any) => state.context);

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
    <div className={`w-full  flex flex-col gap-3 pt-4 pb-7`}>
      <header className="flex items-center gap-2.5">
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
            onClick={() => idx === 1 && setTestModel(true)}
            classname="relative"
            title={name}
          >
            {idx === 1 && (
              <TestModel testModel={testModel} setTestModel={setTestModel} />
            )}
          </Buttons.primary>
        ))}
      </div>
      <main className="w-full min-h-[395px]  bg-neutral py-2 px-4">
        <div className=" grid grid-cols-12">
          {table.map((title, idx) => {
            return (
              <div
                key={idx}
                className={`text-md font-semibold font-mulish text-primary ${
                  idx === 0
                    ? "col-span-3"
                    : idx === 4
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
                className="grid grid-cols-12 text-md font-normal leading-[18px] font-mulish text-primary"
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
  );
};

import { Params } from "next/dist/shared/lib/router/utils/route-matcher";
import { useParams } from "next/navigation";
import React from "react";
import { useSelector } from "react-redux";
import { Buttons } from "../ui/buttons";
import { TrainBotDialog } from "../ui/train-bot";

export default function TrainHistory() {
  const params: Params = useParams();
  const { chatbot } = useSelector((state: any) => state.context);
  const story = chatbot?.stories?.find(
    (story: any, idx: any) => idx == params.slug
  );

  return (
    <main className="w-full">
      <div className="text-primary mb-5 font-inter text-[26px] font-medium">
        {chatbot?.name} / {story?.name} / Train history
      </div>
      <Buttons.side
        classname="ml-auto mr-12 relative bottom-[-38px]"
        // onClick={() => setTrainBot(true)}
        title="Train Bot"
      />
      <TrainBotDialog/>
    </main>
  );
}

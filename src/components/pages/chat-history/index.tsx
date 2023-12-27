import { Params } from "next/dist/shared/lib/router/utils/route-matcher";
import { useParams } from "next/navigation";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Icons } from "../../ui/icons";
import { chat, component_state, msg } from "@/utils/types";
import AddUser from "../../ui/add-user";
import { chat_history, headers } from "@/utils/constants";
import { Buttons } from "../../ui/buttons";

export default function ChatHistory() {
  const params: Params = useParams();
  const { chatbot } = useSelector((state: any) => state.context);
  const story = chatbot?.stories?.find(
    (story: any, idx: any) => idx == params.slug
  );

  return (
    <main className="w-full hidden">
      <div className="text-primary mb-5 font-body text-[26px] font-medium">
        {chatbot?.name} / {story?.name} / Train historyijkb
      </div>
      ll
      <BotDialog />
    </main>
  );
}

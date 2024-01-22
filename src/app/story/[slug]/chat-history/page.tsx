"use client";
import Wrapper from "@/components/layout";
import ChatHistory from "@/components/pages/chat-history";
import TrainHistory from "@/components/pages/train-history";
import React from "react";

export default function Page() {
  return (
    <Wrapper>
      <ChatHistory />
    </Wrapper>
  );
}

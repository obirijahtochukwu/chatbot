"use client";
import { interactions } from "@/utils/constants";
import { interaction, story } from "@/utils/types";
import React from "react";
import { Interaction } from "./interactions";

export default function QAndR({ story }: { story: story }) {
  return (
    <div key={story.name}>
      {story?.interactions.map(({ name, messages }) => {
        const props = { story, name, messages };
        return <Interaction key={name} {...props} />;
      })}
    </div>
  );
}

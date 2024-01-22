"use client";
import { interactions } from "@/utils/constants";
import { interaction, story } from "@/utils/types";
import React from "react";
import { Interaction } from "./interactions";

export default function QAndR({ story }: { story: story }) {
  console.log(story?.interactions);

  return (
    <>
      {story?.interactions.map(({ name, messages }: interaction) => {
        const props = { story, name, messages };
        return <Interaction key={name} {...props} />;
      })}
      {story?.interactions.length < 1 &&
        interactions.map(({ name, messages }: interaction) => {
          const props = { story, name, messages };
          return <Interaction {...props} />;
        })}
    </>
  );
}

import { interactions } from "@/utils/constants";
import { interaction, story } from "@/utils/types";
import React from "react";
import { Interaction } from "../interaction";

export default function Rule({ story }: { story: story }) {
  return (
    <>
      {story?.interactions.map(({ name, messages }: interaction) => {
        const props = { name, messages };
        return <Interaction {...props} />;
      })}
      {story?.interactions.length < 1 &&
        interactions.map(({ name, messages }: interaction) => {
          const props = { name, messages };
          return <Interaction {...props} />;
        })}
    </>
  );
}

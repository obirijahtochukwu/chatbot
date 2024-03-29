import { Params } from "next/dist/shared/lib/router/utils/route-matcher";
import { chatbot, component_state, interaction, msg, story } from "./types";
import { getChatbots } from "@/redux/slice";
import { uid } from "./constants";
import { toast } from "react-toastify";

export const handleCopy = (url: string) => {
  navigator.clipboard
    .writeText(url)
    .then(() => alert("Text copied to clipboard!"))
    .catch((error) => console.error("Could not copy text: ", error));
};

export const setStore = ({ title, value }: { title: string; value: any }) => {
  localStorage.setItem(title, JSON.stringify(value));
};

export const getStore = (title: string) => {
  // @ts-ignore
  const data = JSON.parse(localStorage?.getItem(title));
  return data;
};

export const removeStore = (title: string) => {
  localStorage.removeItem(title);
};

export const logout = () => {
  removeStore("auth");
  window.location.href = "/login";
};

export const addMsg = ({
  name,
  chatbots,
  params,
  msgs,
  story,
  dispatch,
}: {
  name: string;
  chatbots: chatbot[];
  params: Params;
  msgs: msg[];
  story: story;
  dispatch: React.Dispatch<any>;
}) => {
  // find chatbot
  const chatbot: chatbot | any = chatbots?.find(
    (bot: any, idx: any) => idx === +params.slug[0]
  );

  // new interaction
  const interaction = { name, messages: msgs };
  const newInteractions =
    story.interactions.length > 0
      ? story.interactions.map((bot: chatbot) =>
          bot.name == interaction.name ? interaction : bot
        )
      : [interaction];
  const is_interaction = newInteractions.find(
    (idx: interaction) => idx.name == name
  );

  // add new interaction to stories
  const stories = chatbot.stories.map((bot: story) =>
    bot.name == story.name
      ? {
          ...story,
          interactions: is_interaction
            ? newInteractions
            : [...newInteractions, interaction],
        }
      : bot
  );

  // update chatbot
  const _chatbot = { ...chatbot, stories };
  const _chatbots = chatbots.map((bot: chatbot) =>
    bot.name == _chatbot.name ? _chatbot : bot
  );
  console.log(is_interaction);

  console.log(interaction);
  console.log(newInteractions);

  dispatch(getChatbots(_chatbots));
};

export const add_msg = ({
  component_name,
  name,
  chatbots,
  params,
  msgs,
  story,
  dispatch,
}: {
  component_name?: string;
  name: string;
  chatbots: chatbot[];
  params: Params;
  msgs: msg[];
  story: story;
  dispatch: React.Dispatch<any>;
}) => {
  const id = `${uid()}`;

  // find chatbot
  const chatbot: chatbot | any = chatbots?.find(
    (bot: any, idx: any) => idx === +params.slug[0]
  );

  // new interaction
  const interaction = { id, name, messages: msgs, component: component_name };
  const newInteractions = story.interactions;

  // add new interaction to stories
  const stories = chatbot.stories.map((bot: story) =>
    bot.name == story.name
      ? {
          ...story,
          interactions: [...newInteractions, interaction],
        }
      : bot
  );

  // update chatbot
  const _chatbot = { ...chatbot, stories };
  const _chatbots = chatbots.map((bot: chatbot) =>
    bot.name == _chatbot.name ? _chatbot : bot
  );

  dispatch(getChatbots(_chatbots));
  toast.success(
    `${name == "bot" ? "Intent" : "Response"} created successfully!`
  );
};

export const edit_msg = ({
  index,
  interaction,
  chatbots,
  params,
  msgs,
  story,
  dispatch,
  component,
}: {
  index: number;
  interaction: interaction;
  chatbots: chatbot[];
  params: Params;
  msgs: msg[];
  story: story;
  dispatch: React.Dispatch<any>;
  component?: component_state;
}) => {
  // find chatbot
  const chatbot: chatbot | any = chatbots?.find(
    (bot: any, idx: any) => idx === +params.slug[0]
  );

  // new interaction
  const _interaction = {
    ...interaction,
    messages: msgs,
    component: component || interaction.component,
  };
  const newInteractions = story.interactions.map((item: chatbot, idx) =>
    idx == index ? _interaction : item
  );

  // add new interaction to stories
  const stories = chatbot.stories.map((bot: story) =>
    bot.name == story.name
      ? {
          ...story,
          interactions: newInteractions,
        }
      : bot
  );

  // update chatbot
  const _chatbot = { ...chatbot, stories };
  const _chatbots = chatbots.map((bot: chatbot) =>
    bot.name == _chatbot.name ? _chatbot : bot
  );

  console.log(interaction);
  console.log(newInteractions);

  dispatch(getChatbots(_chatbots));
};

export const delete_msg = ({
  id,
  chatbots,
  params,
  story,
  dispatch,
}: {
  id: interaction;
  chatbots: chatbot[];
  params: Params;
  story: story;
  dispatch: React.Dispatch<any>;
}) => {
  // find chatbot
  const chatbot: chatbot | any = chatbots?.find(
    (bot: any, idx: any) => idx == +params.slug[0]
  );

  console.log(story);

  // delete interaction
  const newInteractions = story.interactions.filter(
    (item: interaction) => item.id != id
  );

  // update stories
  const stories = chatbot.stories.map((bot: story) =>
    bot.name == story.name
      ? {
          ...story,
          interactions: newInteractions,
        }
      : bot
  );
  console.log(newInteractions);
  // update chatbot
  const _chatbot = { ...chatbot, stories };
  const _chatbots = chatbots.map((bot: chatbot) =>
    bot.name == _chatbot.name ? _chatbot : bot
  );

  dispatch(getChatbots(_chatbots));
};

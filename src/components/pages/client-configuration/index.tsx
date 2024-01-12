import { Buttons } from "@/components/ui/buttons";
import Title from "@/components/ui/page-title";
import { Params } from "next/dist/shared/lib/router/utils/route-matcher";
import { useParams } from "next/navigation";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { GenerateScript } from "./generate-script";
import Essantials from "./essentials/essantials";
import Theme from "./theme/theme";
import Assets from "./assets/assets";
// import GenerateScript from "./generate-script";

export default function ClientConfiguration() {
  const [activeTab, setActiveTab] = useState("Essentials");
  const [script, setScript] = useState(false);

  const params: Params = useParams();
  const { chatbot } = useSelector((state: any) => state.context);
  const story = chatbot?.stories?.find(
    (story: any, idx: any) => idx === params.slug
  );

  const Content = () => {
    if (activeTab === "Essentials") {
      return <Essantials />;
    } else if (activeTab === "Theme") {
      return <Theme />;
    } else {
      return <Assets />;
    }
  };

  const props = { script, setScript };

  return (
    <main>
      {/* <---------- modals and more ----------> */}
      <GenerateScript {...props} />

      <header className="">
        <Title className="">
          {chatbot?.name} / {story?.name} / Client configuration
        </Title>
        <Buttons.side
          onClick={() => setScript(true)}
          classname="mt-11 ml-auto"
          // onClick={() => setTrainBot(true)}
          title="Generate script"
        />
      </header>
      <section className="flex gap-44">
        <aside className="flex w-40 flex-col">
          {["Essentials", "Theme", "Assets"].map((name) => (
            <div
              onClick={() => setActiveTab(name)}
              className={`flex w-full duration-300 items-center h-12 font-body text-md font-normal rounded-full px-2.5 hover:shadow ${
                activeTab === name
                  ? "bg-secondary text-white cursor-auto"
                  : "cursor-pointer text-primary"
              }`}
            >
              {name}
            </div>
          ))}
        </aside>
        {Content()}
      </section>
    </main>
  );
}

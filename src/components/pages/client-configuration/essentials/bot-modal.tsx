import { chats } from "@/components/ui/test-model";
import React, { useCallback, useEffect, useRef, useState } from "react";

export default function BotModal() {
  const ref: React.MutableRefObject<HTMLElement> | any = useRef();
  const [isModal, setIsModal] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  // Drag modal function
  const onMouseDown = useCallback(
    (event: any) => {
      const onMouseMove = (event: MouseEvent) => {
        const element = ref.current;
        if (element && element.contains(event.target)) {
          position.x += event.movementX;
          position.y += event.movementY;

          element.style.transform = `translate(${position.x}px, ${position.y}px)`;
        }
        setPosition(position);
      };
      const onMouseUp = () => {
        document.removeEventListener("mousemove", onMouseMove);
        document.removeEventListener("mouseup", onMouseUp);
      };
      document.addEventListener("mousemove", onMouseMove);
      document.addEventListener("mouseup", onMouseUp);
    },
    [position, setPosition, ref]
  );

  useEffect(() => {
    const responsive = () => {
      if (ref?.current?.getBoundingClientRect().x < 1) {
        setPosition({ ...position, x: -50 });
        ref.current.style.transform = `translate(${-50}px, ${position.y}px)`;
      }
    };
    window.addEventListener("resize", responsive);
  }, []);

  return (
    <main
      ref={ref}
      onMouseDown={onMouseDown}
      className={`w-[469px] fixed z-20 top-[85px] right-5 max-h-[618px] cursor-default bg-neutral shadow-xl ${
        !isModal ? "block" : "hidden"
      }`}
    >
      <header className="h-16 w-full bg-secondary text-white flex flex-col">
        <div
          onClick={() => setIsModal(false)}
          className="cursor-pointer leading-0 ml-auto text-md mt-2 mr-2"
        >
          X
        </div>
        <div className="mx-auto relative top-[-10px]">Bot Name</div>
      </header>

      <section className="flex px-12 w-full flex-col text-start gap-3 py-5">
        {chats.map(({ name, msgs }) => (
          <div className="flex flex-col gap-[6px]">
            {msgs.map((msg) => (
              <div
                className={`py-[14px] w-[300px] px-5 rounded-xl text-md font-normal tracking-[0.35px] font-body ${
                  name == "bot"
                    ? "text-primary bg-white"
                    : "ml-auto bg-secondary text-white"
                }`}
              >
                {msg}
              </div>
            ))}
          </div>
        ))}
      </section>

      <footer className="bg-[#EAEAEA] h-20 flex px-2.5 pt-1.5 pb-[15px] w-full gap-3">
        <input
          type="text"
          value={"Abc"}
          className="bg-white rounded-full w-[380px] h-full px-8 items-center flex text-lg font-normal font-body text-primary"
        />
        <div className="flex cursor-pointer items-center rounded-full justify-center h-[52px] w-[52px] bg-white">
          <img src="/media/config/Rectangle.svg" alt="" className=" h-6 w-6" />
        </div>
      </footer>
    </main>
  );
}

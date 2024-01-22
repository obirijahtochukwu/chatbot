import { useEffect, useState } from "react";
import { Icons } from "./icons";

export const Toast = () => {
  const [show, setShow] = useState(false);
  const [content, setContent] = useState("");

  const toast = (text: string) => {
    setShow(true);
    setContent(text);
  };

  useEffect(() => {
    setTimeout(() => {
      if (show) {
        setShow(false);
      }
    }, 3000);
  }, [show]);

  const ToastContainer = () => {
    return (
      <div>
        <div
          className={`flex  rounded-lg fixed left-[50%] px-5 py-3 bg-green-500 text-white duration-500 items-center text-base capitalize gap-3 ${
            show
              ? "z-50 visible top-10 opacity-100"
              : "invisible z-50 top-14 opacity-0"
          }`}
        >
          <Icons.bell /> {content}
        </div>
      </div>
    );
  };

  return { toast, ToastContainer };
};

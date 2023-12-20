"use client";
import React, { useEffect, useState } from "react";
import { Icons } from "../ui/icons";
import { usePathname, useRouter } from "next/navigation";
import { useSelector } from "react-redux";
import Link from "next/link";

export default function Sidebar() {
  const pathname = usePathname();
  const [url, setUrl] = useState("");
  const showTab = useSelector((state: any) => state.context.activePage);
  console.log(showTab);
  const params = JSON.parse(localStorage.getItem("story_url"));

  const pages = [
    {
      icon: (
        <Icons.dashboard
          color={
            url === "/"
              ? "#fff"
              : url == `/dashboard/conversations`
              ? "#fff"
              : "#000"
          }
        />
      ),
      title: "dashboard",
      path: "/",
      disable: true,
    },
    {
      icon: <Icons.story color={url.includes("/story") ? "#fff" : "#000"} />,
      title: "story",
      path: `/story/${params}`,
      disable: showTab ? true : false,
    },
    {
      icon: (
        <Icons.component color={url.includes("/components") ? "#fff" : ""} />
      ),
      title: "components",
      path: "/components",
      disable: showTab ? true : false,
    },
    {
      icon: (
        <Icons.history color={url.includes("/train-history") ? "#fff" : ""} />
      ),
      title: "Train history",
      path: "/train-history",
      disable: showTab ? true : false,
    },
    {
      icon: <Icons.chat color={url.includes("/chat-history") ? "#fff" : ""} />,
      title: "Chat history",
      path: "/chat-history",
      disable: showTab ? true : false,
    },
    {
      icon: (
        <Icons.settings
          color={url.includes("/client-configuration") ? "#fff" : ""}
        />
      ),
      title: "Client configuration",
      path: "/client-configuration",
      disable: showTab ? true : false,
    },
    {
      icon: <Icons.settings color={url.includes("/profile") ? "#fff" : ""} />,
      title: "profile",
      path: "/profile",
      disable: !showTab ? true : false,
    },
    {
      icon: <Icons.settings color={url.includes("/settings") ? "#fff" : ""} />,
      title: "settings",
      path: "/settings",
      disable: !showTab ? true : false,
    },
    {
      icon: <Icons.logout color={url.includes("/logout") ? "#fff" : ""} />,
      title: "logout",
      path: "/logout",
      disable: true,
    },
  ];

  const router = useRouter();

  useEffect(() => {
    setUrl(pathname);
  }, [url, pathname]);

  return (
    <aside className="w-56 sticky z-10 top-[7px] left-0">
      <div className="w-full h-12 pl-5 pr-6 py-3 bg-neutral rounded-full justify-start items-center gap-2.5 mb-8 flex">
        <Icons.search className="w-6 h-6 relative"></Icons.search>
        <input
          placeholder="Buscador"
          type="text"
          className="focus:outline-none bg-inherit text-primary text-opacity-70 text-xs"
        />
      </div>

      <main className="w-56 h-64 flex-col justify-start items-end gap-5 inline-flex">
        {pages.map(
          ({ icon, title, path, disable }) =>
            disable && (
              <div
                onClick={() => router.push(path)}
                className={`w-full pl-6 pr-2 py-3.5 rounded-full justify-start items-center duration-300 gap-3.5 inline-flex hover:shadow  ${
                  url === path
                    ? "bg-secondary cursor-auto text-white shadow"
                    : url.includes(`${path}${title}`)
                    ? "bg-secondary cursor-auto text-white shadow"
                    : "text-primary cursor-pointer"
                }`}
              >
                {icon}
                <div className="capitalize text-xs font-semibold">{title}</div>
              </div>
            )
        )}
      </main>
    </aside>
  );
}

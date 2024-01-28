"use client";
import React, { useEffect, useState } from "react";
import { Icons } from "../ui/icons";
import { useParams, usePathname, useRouter } from "next/navigation";
import { useSelector } from "react-redux";
import Link from "next/link";
import { logout } from "@/utils/functions";
import { Params } from "next/dist/shared/lib/router/utils/route-matcher";

export default function Sidebar({
  isSidebar,
  setIsSidebar,
}: {
  isSidebar: boolean;
  setIsSidebar: React.Dispatch<boolean>;
}) {
  const [url, setUrl] = useState("");

  const pathname = usePathname();
  const showTab = useSelector((state: any) => state.context.activePage);
  const router = useRouter();
  const params: Params = useParams();

  const _params = `${params.slug?.length > 0 && params.slug[0]}/${
    params.slug?.length > 0 && params.slug[1]
  }`;

  const pages = [
    {
      icon: (
        <Icons.dashboard
          color={
            url === "/"
              ? "#fff"
              : url === `/dashboard/${params.slug}/conversations`
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
      icon: (
        <Icons.story color={url == `/story/${_params}` ? "#fff" : "#000"} />
      ),
      title: "story",
      path: `/story/${_params}`,
      disable: showTab ? true : false,
    },
    {
      icon: (
        <Icons.component color={url.includes("/components") ? "#fff" : ""} />
      ),
      title: "components",
      path: `/components/${_params}`,
      disable: showTab ? true : false,
    },
    {
      icon: (
        <Icons.history
          color={url === `/train-history/${_params}` ? "#fff" : ""}
        />
      ),
      title: "Train history",
      path: `/train-history/${_params}`,
      disable: showTab ? true : false,
    },
    {
      icon: (
        <Icons.chat color={url === `/chat-history/${_params}` ? "#fff" : ""} />
      ),
      title: "Chat history",
      path: `/chat-history/${_params}`,
      disable: showTab ? true : false,
    },
    {
      icon: (
        <Icons.settings
          color={url.includes(`/client-configuration/${_params}`) ? "#fff" : ""}
        />
      ),
      title: "Client configuration",
      path: `/client-configuration/${_params}`,
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
  ];

  useEffect(() => {
    setUrl(pathname);
  }, [url, pathname]);

  useEffect(() => {
    if (isSidebar) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [isSidebar]);

  return (
    <aside
      className={`md:w-56 md:sticky duration-200 backdrop-blur-[8px] fixed max-md:p-6 max-md:h-screen max-md:w-screen z-10 md:top-[7px] top-0 left-0 ${
        isSidebar ? "translate-x-0 " : "max-md:-translate-x-96"
      }`}
    >
      <div
        onClick={() => setIsSidebar(false)}
        className="ml-auto w-fit md:hidden rounded-full bg-primary bg-opacity-10 p-3 mb-5 cursor-pointer"
      >
        <Icons.close className="" />
      </div>
      <div className="w-full h-12 pl-5 pr-6 py-3 bg-neutral rounded-full justify-start items-center gap-2.5 mb-8 flex overflow-hidden">
        <div>
          <Icons.search className="w-6 h-6 relative"></Icons.search>
        </div>
        <input
          placeholder="Buscador"
          type="text"
          className="focus:outline-none bg-inherit text-primary text-opacity-70 text-base md:text-xs"
        />
      </div>

      <main className="md:w-56 w-full h-64 flex-col justify-start items-end gap-5 inline-flex">
        {pages.map(
          ({ icon, title, path, disable }) =>
            disable && (
              <div
                key={title}
                onClick={() => router.push(path)}
                className={`w-full pl-6 pr-2 py-3.5 rounded-full justify-start items-center duration-300 gap-3.5 inline-flex hover:shadow ${
                  url === path
                    ? "bg-secondary cursor-auto text-white shadow"
                    : url.includes(`${path}${title}`)
                    ? "bg-secondary cursor-auto text-white shadow"
                    : "text-primary cursor-pointer"
                }`}
              >
                {icon}
                <div className="capitalize text-base md:text-xs font-semibold">
                  {title}
                </div>
              </div>
            )
        )}
        <div
          onClick={logout}
          className={`w-full pl-6 pr-2 py-3.5 rounded-full justify-start items-center duration-300 gap-3.5 inline-flex hover:shadow text-primary cursor-pointer`}
        >
          <Icons.logout />
          <div className="capitalize !text-base md:text-xs font-semibold">
            logout
          </div>
        </div>
      </main>
    </aside>
  );
}

"use client"
import React, { useState } from "react";
import Sidebar from "./sidebar";
import Header from "./header";
import { Providers } from "@/redux/provider";

export default function Wrapper({ children }: { children: React.ReactNode }) {
  const [isSidebar, setIsSidebar] = useState(false);

  const props = { isSidebar, setIsSidebar };
  
  return (
    <Providers>
      <main className="px-16 max-xl:px-5 pb-10">
        <Header {...props} />
        <section className="gap-[57px] flex w-full">
          <Sidebar {...props} />
          <div className="w-full">{children}</div>
        </section>
      </main>
    </Providers>
  );
}

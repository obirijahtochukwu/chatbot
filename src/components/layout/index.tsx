import React from "react";
import Sidebar from "./sidebar";
import Header from "./header";

export default function Wrapper({ children }: { children: React.ReactNode }) {
  return (
    <main className="px-16 max-xl:px-5 pb-10">
      <Header />
      <section className="gap-[57px] flex w-full">
        <Sidebar />
        <div className="w-full">{children}</div>
      </section>
    </main>
  );
}

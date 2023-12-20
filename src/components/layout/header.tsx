import React from "react";
import { Icons } from "../ui/icons";
// import { className } from '@/utils/types';

export default function Header() {
  return (
    <nav className="h-[75px] w-full gap-6 flex items-center justify-end pt-12">
      <Icons.search className="cursor-pointer" />
      <Icons.notification className="cursor-pointer" />
      <img
        src="/media/layout/Ellipse 14.svg"
        alt=""
        className="cursor-pointer"
      />
    </nav>
  );
}

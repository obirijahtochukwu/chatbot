import React from "react";
import { Icons } from "../ui/icons";
// import { className } from '@/utils/types';

export default function Header({
  setIsSidebar,
}: {
  setIsSidebar: React.Dispatch<boolean>;
}) {
  return (
    <nav className="h-[75px] w-full gap-6 flex max-md:flex-row-reverse items-center justify-end pt-12 max-md:mb-4">
      <Icons.bar
        onClick={() => setIsSidebar(true)}
        className="cursor-pointer md:hidden ml-auto max-md:h-7 max-md:w-7"
      />

      <Icons.search className="cursor-pointer max-md:h-6 max-md:w-6" />
      <Icons.notification className="cursor-pointer max-md:h-6 max-md:w-6" />
      <img
        src="/media/layout/Ellipse 14.svg"
        alt=""
        className="cursor-pointer"
      />
    </nav>
  );
}

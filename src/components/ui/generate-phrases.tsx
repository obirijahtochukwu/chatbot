import { msg } from "@/utils/types";
import Msgs from "./msgs";

export const GeneratePhrases = ({
  msgs,
  setGenerate,
}: {
  msgs: msg[];
  setGenerate: React.Dispatch<boolean>;
}) => {
  const submit = (id: number) => {
    if (id == 1) setGenerate(false);
  };

  return (
    <main>
      <section className="flex gap-3 flex-col">
        <div className="flex justify-between items-center">
          <div className="text-md text-primary font-normal font-mulish">
            Question Augmentation
          </div>
          <div className="w-fit h-8 p-[7px] bg-secondary bg-opacity-10 cursor-pointer justify-center items-center text-secondary font-mulish gap-2.5 flex text-md">
            Save
            <div className="relative">
              <input
                type="checkbox"
                checked
                // checked={isChecked}
                // onChange={handleCheckboxChange}
                className="sr-only"
              />
              <div className="h-3 w-7 rounded-full bg-[#E5E7EB] shadow-inner"></div>
              <div className="dot shadow-switch-1 absolute left-0 -top-1 h-4 w-4 rounded-full bg-white transition"></div>
            </div>
          </div>
        </div>

        <Msgs msgs={msgs} />
        <div className="flex gap-2.5 justify-end">
          {["cancel", "save"].map((name, id) => (
            <div
              key={id}
              onClick={() => submit(id)}
              className={`w-fit h-8 p-[7px] justify-center items-center flex text-md font-mulish cursor-pointer capitalize ${
                id === 0
                  ? "text-red-600 bg-rose-100"
                  : "bg-secondary   bg-opacity-10 text-secondary"
              }`}
            >
              {name}
            </div>
          ))}
        </div>
      </section>
    </main>
  );
};

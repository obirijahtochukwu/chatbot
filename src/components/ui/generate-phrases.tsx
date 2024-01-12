export const GeneratePhrases = ({
  msgs,
  setGenerate,
}: {
  msgs: string[];
  setGenerate: React.Dispatch<boolean>;
}) => {
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

        <div className="w-[400px] h-[175px] bg-neutral px-3 py-4">
          <div className="px-3 gap-2 flex flex-col overflow-auto h-full w-full custom-scrollbar">
            {msgs.map((text: string) => (
              <div className="flex items-center gap-2">
                <input
                  id="vue-checkbox"
                  type="checkbox"
                  value=""
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                />

                <label className="font-mulish leading-[18px] font-normal text-primary text-md first-letter:uppercase">
                  {text}
                </label>
              </div>
            ))}
          </div>
        </div>
        <div className="flex gap-2.5 justify-end">
          {["cancel", "save"].map((name, id) => (
            <div
              key={id}
              onClick={() => id === 1 && setGenerate(false)}
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

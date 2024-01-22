import { msg } from "@/utils/types";
import { useState } from "react";
import { useDropzone } from "react-dropzone";

export const SelectFile = ({
  id,
  icon,
  fileType,
  msgs,
  setMsgs,
}: {
  id: number;
  icon?: React.JSX.Element;
  fileType: string[] | any;
  msgs: msg[];
  setMsgs: React.Dispatch<msg[]>;
}) => {
  const [file, setFile] = useState<Blob | MediaSource | any>([]);
  const { getRootProps, getInputProps } = useDropzone({
    maxFiles: 10,
    accept: {
      [fileType]: [],
      // [fileType]: [],
    },
    // @ts-ignore
    onDrop: (acceptedFiles: FileInfo[]) => {
      if (acceptedFiles.length > 1)
        alert("You cannot bulk upload more than 10 files at a time");
      setMsgs([...msgs, { file: acceptedFiles[0] }]);
    },
  });

  return (
    <div
      {...getRootProps()}
      key={id}
      className={`w-fit h-8 p-[7px] justify-center items-center flex text-md font-mulish cursor-pointer bg-secondary   bg-opacity-10 text-secondary
      }`}
    >
      <input type="text" className="h-0 w-0" {...getInputProps()} />
      {icon}
    </div>
  );
};

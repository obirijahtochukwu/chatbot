import React, { useState } from "react";
import Title from "../ui/page-title";
import { Icons } from "../ui/icons";
import { useDropzone } from "react-dropzone";
import { FileInfo } from "@/utils/types";

export default function Profile() {
  const [img, setImg] = useState<any>({});

  const user = [
    { title: "Name", value: "User Name" },
    { title: "Email", value: "user@email.com" },
  ];

  const { getRootProps, getInputProps } = useDropzone({
    maxFiles: 10,
    accept: {
      "image/*": [],
    },
    onDrop: (acceptedFiles) => {
      if (acceptedFiles.length > 1)
        alert("You cannot bulk upload more than 10 files at a time");
      setImg(acceptedFiles[0]);
    },
  });

  return (
    <div>
      <Title>Profile</Title>
      <main className="flex justify-center mx-auto flex-col w-80 items-center">
        <img
          className="w-12 h-12 bg-pink-100 rounded-full"
          src={
            img.type
              ? URL.createObjectURL(img)
              : "/media/story/chatgpt robot.svg"
          }
        />
        <div
          {...getRootProps()}
          className="flex justify-center text-base font-inter font-normal text-primary text-opacity-70 items-center gap-1.5"
        >
          {/* <input type="text" {...getInputProps()} /> */}
          <div className=" mt-1">Profile photo</div>
          <Icons.edit className="w-6 h-6 cursor-pointer" />
        </div>
        <section className="flex flex-col gap-3">
          {user.map(({ title, value }) => (
            <div className="">
              <div className="text-sm font-medium font-inter text-primary text-opacity-70">
                {title}
              </div>
              <input
                type="text"
                placeholder={value}
                className=" border-opacity-60 py-[14px] rounded-full px-6 border focus:outline-none border-primary"
              />
            </div>
          ))}
        </section>
        <div className="w-fit px-8 mt-10 py-3 bg-red-600 bg-opacity-10 justify-center items-center flex font-mulish text-red-600 text-md font-semibold">
          Delete Account
        </div>
      </main>
    </div>
  );
}

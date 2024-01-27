import { Buttons } from "@/components/ui/buttons";
import { getStore, setStore } from "@/utils/functions";
import { useRouter } from "next/navigation";
import React, { useLayoutEffect, useState } from "react";

export default function Login() {
  const [form, setForm] = useState<{
    email?: string;
    password?: string;
    name?: string;
  }>({});
  const redirect = useRouter();

  const inputs = [
    { name: "email", placeholder: "example@gmail.com" },
    { name: "password" },
  ];

  const login = (e: any) => {
    e.preventDefault();
    setStore({ title: "auth", value: form });
    setForm({ email: "", password: "" });
  };

  const token = getStore("auth");

  useLayoutEffect(() => {
    if (token?.email) {
      redirect.replace("/");
    }
  }, [form?.email]);

  return (
    <main
      style={{ backgroundColor: "#2148C0" }}
      className="flex justify-center bg-[url('/media/login/BG.svg')] bg-opacity-30 items-center h-screen bg-cover bg-no-repeat bg-center w-screen overflow-y-auto"
    >
      <form
        onSubmit={login}
        className="flex flex-col w-80 items-center justify-center gap-4"
      >
        <div className="text-xl font-bold text-white">Login</div>
        <div className="border-b w-14 border-white"></div>
        <div className="text-base text-opacity-70 text-white text-center leading-5">
          Welcome back! Login to create awesome Chatbots within minutes!
        </div>
        {inputs.map(({ name, placeholder }) => (
          <div className="w-full">
            <div className=" text-base text-white text-opacity-70 capitalize">
              {name}*
            </div>
            <input
              type={name}
              required
              // autuFocus
              placeholder={placeholder}
              //@ts-ignore
              value={form[name]}
              onChange={(e: any) =>
                setForm({ ...form, [name]: e.target.value })
              }
              className="h-12 border-2 w-full border-white focus:outline-secondary border-opacity-70 rounded flex items-center px-4 text-lg text-white"
            />
          </div>
        ))}

        <div className="self-end">
          <Buttons.primary
            title="Login"
            type="submit"
            classname="!px-5 !font-semibold !h-10 rounded hover:shadow-2xl !bg-white text-secondary !text-lg"
          />
        </div>
        <div>
          <div className="text-base cursor-pointer text-center font-medium text-white">
            Forget Password
          </div>
          <div className="text-base cursor-pointer text-center font-medium text-white">
            Verify Account
          </div>
        </div>
        <div className="flex gap-0.5 text-opacity-60 items-center text-white justify-center capitalize">
          new to chatbot?
          <a className="text-base font-medium text-white cursor-pointer">
            {" "}
            Signup
          </a>
        </div>
      </form>
    </main>
  );
}

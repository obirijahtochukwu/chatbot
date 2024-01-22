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
    <main>
      <form
        onSubmit={login}
        className="flex flex-col w-80 items-center justify-center gap-4"
      >
        <div className="text-xl font-bold text-primary">Login</div>
        <div className="border-b w-14 border-secondary"></div>
        <div className="text-base text-opacity-70 text-primary text-center leading-5">
          Welcome back! Login to create awesome Chatbots within minutes!
        </div>
        {inputs.map(({ name, placeholder }) => (
          <div className="w-full">
            <div className=" text-base text-primary text-opacity-70 capitalize">
              {name}*
            </div>
            <input
              type={name}
              required
              // autuFocus
              placeholder={placeholder}
              value={form[name]}
              onChange={(e: any) =>
                setForm({ ...form, [name]: e.target.value })
              }
              className="h-12 border-2 w-full border-primary focus:outline-secondary border-opacity-70 rounded flex items-center px-4 text-lg text-primary"
            />
          </div>
        ))}

        <div className="self-end">
          <Buttons.primary
            title="Login"
            type="submit"
            classname="!px-5 !h-10 rounded hover:shadow-2xl !text-lg"
          />
        </div>
        <div>
          <div className="text-base cursor-pointer text-center font-medium text-secondary">
            Forget Password
          </div>
          <div className="text-base cursor-pointer text-center font-medium text-secondary">
            Verify Account
          </div>
        </div>
        <div className="flex items-center justify-center capitalize">
          new to chatbot?{" "}
          <a className="text-base font-medium text-secondary">Signup</a>
        </div>
      </form>
    </main>
  );
}

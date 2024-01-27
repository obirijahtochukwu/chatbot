import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Providers } from "@/redux/provider";
import "react-toastify/dist/ReactToastify.css";
import Wrapper from "@/components/layout";
import Head from "next/head";
import { ToastContainer } from "react-toastify";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Chat bot",
  description: "AI trainer",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <Head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Mulish&display=swap"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Inter&display=swap"
        />
      </Head>
      <body className={inter.className}>
        <ToastContainer position="top-center" />
        {children}
      </body>
    </html>
  );
}

"use client";
import { Provider, useDispatch } from "react-redux";
import { store } from "./store";
import { addActivePage } from "./slice";
import { useLayoutEffect } from "react";
import { usePathname } from "next/navigation";
export function Providers({ children }: any) {
  return (
    <Provider store={store}>
      <App />
      {children}
    </Provider>
  );
}

const App = () => {
  const dispatch = useDispatch();
  const pathname = usePathname();
  useLayoutEffect(() => {
    if (
      !pathname.includes("dashboard") &&
      pathname !== '/' &&
      !pathname.includes("profile") &&
      !pathname.includes("settings")
    ) {
      dispatch(addActivePage(true));
    } else {
      dispatch(addActivePage(false));
    }
  }, [pathname]);
  return <div className=""></div>;
};

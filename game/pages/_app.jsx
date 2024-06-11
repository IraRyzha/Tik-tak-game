import "../styles/global.css";
import { Inter } from "next/font/google";
import clsx from "clsx";

const inter = Inter({ subsets: ["latin"] });

export default function App({ Component, pageProps }) {
  // console.log("App work");
  // console.log(inter);

  return (
    <div className={clsx(inter.className, "text-slate-900")}>
      <Component {...pageProps} />
      <div id="modals"></div>
    </div>
  );
}

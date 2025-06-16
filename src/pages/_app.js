import "@/styles/globals.css";
import {Navbar} from "@/components/Navbar";
import { Playfair_Display } from "next/font/google";

const playfairDisplay = Playfair_Display({
  variable: "--font--PlayFairDisplay",
  subsets: ["latin"],
});

export default function App({ Component, pageProps }) {
  return (
    <div  className={`${playfairDisplay.className}`}>
    <Navbar/>
    <main>
      <Component {...pageProps}/>
    </main>
    </div>
  );
}

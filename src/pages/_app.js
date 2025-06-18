import "@/styles/globals.css";
import { Playfair_Display } from "next/font/google";

const playfairDisplay = Playfair_Display({
  variable: "--font--PlayFairDisplay",
  subsets: ["latin"],
});

export default function App({ Component, pageProps }) {
  return ( 
    <main className={`${playfairDisplay.className}`}>
      <Component {...pageProps}/>
    </main>
  );
}

import localFont from "next/font/local";
import { Inter } from "next/font/google";

const neue_montreal_init = localFont({
  src: [
    {
      path: "../../public/fonts/Neue Montreal/NeueMontreal-Regular.otf",
      weight: "400",
    },
    {
      path: "../../public/fonts/Neue Montreal/NeueMontreal-Medium.otf",
      weight: "500",
    }
  ],
  variable: "--neue-montreal",
});

export const neue_montreal = neue_montreal_init.variable


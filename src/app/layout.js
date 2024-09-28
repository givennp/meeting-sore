import { Inter } from "next/font/google";
import "./globals.css";
import localFont from "next/font/local";
import { neue_montreal } from "@/utils/fonts";
import Navbar from "@/components/Navbar/";
import Head from "next/head";

export const metadata = {
  title: "Meeting Sore",
  description:
    "Jakarta & Bali based boutique creative studio who helps brands stand out through stunning visual design and compelling copywriting, leaving a lasting impression.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <link rel="icon" href="/logo-small.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/logo-small.svg" sizes="180x180" />
        {/* You can add other formats if necessary */}
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
      </Head>
      <body className={`${neue_montreal} font-neue-montreal `}>
        <Navbar />
        <div className="">{children}</div>
      </body>
    </html>
  );
}

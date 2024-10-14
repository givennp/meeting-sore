// pages/_app.js
import { useEffect } from "react";
import Head from "next/head";
import Navbar from "@/components/Navbar";
import { neue_montreal } from "@/utils/fonts";
import "../app/globals.css"; // Import your global styles

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link rel="icon" href="/logo-small.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/logo-small.svg" sizes="180x180" />
        <title>Meeting Sore</title>
        <meta
          name="description"
          content="Jakarta & Bali based boutique creative studio who helps brands stand out through stunning visual design and compelling copywriting, leaving a lasting impression."
        />
      </Head>
      <div
        className={`${neue_montreal} font-neue-montreal`}
        style={{ fontFamily: "var(--neue-montreal)" }}
      >
        <Navbar />
        <main>
          <Component {...pageProps} />
        </main>
      </div>
    </>
  );
}

export default MyApp;
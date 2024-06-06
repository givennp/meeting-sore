"use client";
import Parallax from "@/components/Parallax/Parallax";
import Image from "next/image";
import parallaxImage from "../../public/foto1.jpg";
import image1 from "../../public/jalanan.jpeg";
import logo from "../../public/logo.svg";
import "./home.css";
import { useEffect, useState } from "react";
import JumboTron from "../section/JumboTron";
import PortfolioCard from "@/components/PortfolioCard";

const Home = () => {
  return (
    <>
      <section className="h-[445px]"></section>

      <div className="max-h-[200vh]">
        <JumboTron />
      </div>

      <div className="flex gap-10 bg-neutral-300">
        <PortfolioCard />
        <PortfolioCard />
        <PortfolioCard />
      </div>
    </>
  );
};

export default Home;

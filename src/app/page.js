"use client";
import Parallax from "@/components/Parallax/Parallax";
import Image from "next/image";
import parallaxImage from "../../public/foto1.jpg";
import image1 from "../../public/jalanan.jpeg";
import logo from "../../public/logo.svg";
import { useEffect, useState } from "react";
import JumboTron from "../section/JumboTron";
import PortfolioCard from "@/components/PortfolioCard";
import portfolio from "../../public/portfolio.jpg";
import Input from "@/components/Input";
import Marquee from "@/components/Marquee";
import useIntersectionObserver from "@/hooks/useIntersectionObserver";
import PortfolioSection from "@/section/portfolio";
import ExpertiseCard from "@/components/ExpertiseCard";
import ExpertiseSection from "@/section/ExpertiseSection";
import Button from "@/components/Buttons/Button";
import RoundedButton from "@/components/RoundedButtons";
import FormSection from "@/section/formSection";

const Home = () => {

  return (
    <>
      <div className="max-h-[200vh] mb-44">
        <JumboTron />
      </div>
      {/* Marquee Section */}
      {/* <Marquee /> */}
      {/* Expertise Section */}
      <ExpertiseSection />
      {/* Portfolio Section */}
      <PortfolioSection />
      {/* FORM SECTION */}
      <FormSection/>

      <section className="h-[445px]"></section>
    </>
  );
};

export default Home;

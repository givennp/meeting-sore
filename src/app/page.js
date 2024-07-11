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

const Home = () => {
  const [activeSection, setActiveSection] = useState("");
  useIntersectionObserver(setActiveSection);
  useEffect(() => {
    console.log(activeSection);
  }, []);

  return (
    <>
      <section className="h-[445px]"></section>
      <div className="max-h-[200vh] mb-44">
        <JumboTron />
      </div>
      {/* Marquee Section */}
      {/* <Marquee /> */}
      {/* Expertise Section */}
      <ExpertiseSection />
      {/* Portfolio Section */}

      <div>PREVIOUS WORKS</div>
      <div className="rounded-full">
        <RoundedButton>ALL</RoundedButton>
      </div>

      <PortfolioSection activeSection={activeSection} />
      {/* FORM SECTION */}
      <section className="bg-black h-[880px] flex gap-[136px]">
        <div className="min-w-[374px] flex justify-end relative">
          <Image
            src={portfolio}
            alt="Descriptive alt text"
            className="h-full w-[374px] min-w-[] object-cover"
          />
        </div>

        <div>
          <div className="md:text-title-03 font-medium text-neutral-100 pt-20 w-[900px] mb-12">
            Don’ t Miss the Opportunity <br />
            of{" "}
            <span className="text-primary-brand">Free Social Media Audit</span>
            <div className="text-subheading-03 text-neutral-100 w-auto">
              Get a comprehensive performance analysis, content review,
              competitor benchmarking, and actionable recommendations.
            </div>
          </div>

          <div className="bg-white w-[794px] h-[452px] rounded-lg p-10 text-body-03">
            <div>Fill out the form to schedule a meeting with our team!</div>
            <div className="flex justify-between mb-8">
              <Input placeholder="Name" />
              <Input placeholder="Phone Number" />
            </div>
            <Input placeholder="Brand Name" className="mb-8" />
            <Input
              placeholder="Objective"
              className="h-[132px] placeholder:align-text-top"
              textarea
            />
          </div>
        </div>
      </section>
      <section className="h-[445px]"></section>
    </>
  );
};

export default Home;

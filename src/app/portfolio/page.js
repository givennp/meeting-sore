"use client";

import Image from "next/image";
import portImage from "../../../public/portfolioImage.png";
import portImage2 from "../../../public/portImage2.png";
import portImage3 from "../../../public/portImage3.png";
import portImage4 from "../../../public/portImage4.png";
import portImage5 from "../../../public/portImage5.png";
import bullet from "../../../public/bullet.svg";
import prevArrow from "../../../public/prevArrow.svg";
import nextArrow from "../../../public/nextArrow.svg";
import Footer from "@/components/Footer";
import useIntersectionObserverPortfolio from "@/hooks/useIntersectionObserverPortfolio";
import { useState } from "react";

const Portfolio = () => {
  const [activeSection, setActiveSection] = useState("");

  useIntersectionObserverPortfolio("change-bg", setActiveSection);

  return (
    <div
      className={`${
        activeSection === "change-bg" ? "bg-black" : "bg-transparent"
      } duration-500`}
    >
      <div className="h-[72px] mb-14" />
      <div className="container text-body-04 grid grid-cols-2 mb-14">
        <div className="">
          <div className="border w-fit px-3 py-1 rounded-3xl border-black text-body-04">
            SOCIAL MEDIA
          </div>
          <div className="text-title-01 font-medium ">Markdata </div>
        </div>
        <div className="flex justify-end items-end">
          The Millennial Gen Z Kaltim project aims to build a media community
          account for young people in East Kalimantan and gain at least 1,000
          folowers within 3 months.
        </div>
      </div>
      <Image
        src={portImage}
        style={{ width: "100%", height: "100%", marginBottom: "176px" }}
      />

      {/* PROJECT DESCRIPTION */}
      <div className="container text-body-03 grid grid-cols-2 mb-44">
        <div className="">
          <div className="text-subheading-05 font-medium text-neutral-200">
            SERVICE
          </div>
          <div className="text-body-04 w-[200px]">
            Social Media Management for Media Community{" "}
          </div>
        </div>
        <div className="">
          <div className="text-subheading-05 font-medium text-neutral-200">
            PROJECT
          </div>
          <div className="text-body-02">
            The Millennial Gen Z Kaltim project is a bold initiative aimed at
            building a vibrant media community for young people in East
            Kalimantan. Our goal is to reach 1,000 followers within three months
            by creating engaging and meaningful content that resonates with the
            local youth. This project will serve as a digital hub, fostering
            connections and community among the young generation of East
            Kalimantan.
            <br />
            <br />
            Our content strategy focuses on highlighting local culture,
            addressing relevant issues, and showcasing the talents and voices of
            the youth. By utilizing popular social media platforms and
            implementing targeted campaigns, we aim to create a space where
            young people can connect, share ideas, and be inspired. Through
            consistent engagement and interactive content, we are committed to
            growing a loyal and active followin
          </div>
        </div>
      </div>
      {/* END PROJECT DESCRIPTION */}

      {/* CANVAS 1 */}
      <div className="container">
        <Image
          src={portImage2}
          style={{ width: "100%", height: "100%", marginBottom: "176px" }}
        />
      </div>

      <div className="container ">
        <div id="change-bg" className="text-body-03 flex mb-44 gap-[136px]">
          <div className="">
            <div className="text-subheading-05 font-medium text-neutral-200">
              RESULTS
            </div>
            <div
              className={`${
                activeSection === "change-bg"? "text-white" :""
              } text-body-02 w-[310px] h-[84px] `}
            >
              In just 8 months of dedicated effort and exclusivity, these are
              the results we&apos;ve achieved:
            </div>
          </div>

          <div className="flex w-full justify-between">
            <div className="flex flex-col items-center justify-center">
              <div className="text-title-02 font-medium text-primary-brand">
                716K
              </div>
              <div className="text-subheading-05 text-neutral-200">
                REACH {/* toUpperCase */}
              </div>
            </div>

            <div className="flex flex-col items-center justify-center">
              <div className="text-title-02 font-medium text-primary-brand">
                59.7K
              </div>
              <div className="text-subheading-05 text-neutral-200">
                PROFILE VISITS {/* toUpperCase */}
              </div>
            </div>
            <div className="flex flex-col items-center justify-center">
              <div className="text-title-02 font-medium text-primary-brand">
                5.9K
              </div>
              <div className="text-subheading-05 text-neutral-200">
                FOLLOWERS {/* toUpperCase */}
              </div>
            </div>
          </div>
        </div>

        <Image
          src={portImage3}
          style={{ width: "100%", height: "100%", marginBottom: "176px" }}
        />

        {/* BULLET LIST */}
        <div className="flex flex-col gap-10 mb-[161px]">
          <div className="flex text-heading-02 font-medium ">
            <Image
              src={bullet}
              className="animate-spin"
              style={{
                width: "40px",
                height: "40px",
                padding: "8px",
                marginRight: "16px",
              }}
            />
            <div>
              Recognized by the East Kalimantan beauty pageant community and
              invited to attend the press release for Putri Indonesia from East
              Kalimantan.
            </div>
          </div>
          <div className="flex text-heading-02 font-medium">
            <Image
              src={bullet}
              className="animate-spin-counter"
              style={{
                width: "40px",
                height: "40px",
                padding: "8px",
                marginRight: "16px",
              }}
            />
            <div>
              Valued and trusted by East Kalimantan youth as a platform to
              promote their community programs for a better East Kalimantan.
            </div>
          </div>
        </div>
      </div>

      <Image
        src={portImage5}
        style={{ width: "100%", height: "100%", marginBottom: "16px" }}
      />
      <Image
        src={portImage3}
        style={{ width: "100%", height: "100%", marginBottom: "16px" }}
      />
      <Image src={portImage4} style={{ width: "100%", height: "100%" }} />

      {/* PAGE */}
      <div className="container flex justify-between h-32 items-center">
        {/* PREV */}
        <div className="flex flex-col items-start">
          <div className="flex items-center gap-2">
            <Image src={prevArrow} style={{ width: "12px", height: "9px" }} />
            <div className="text-subheading-05 font-medium text-neutral-200">
              PREVIOUS
            </div>
          </div>
          <div className="text-heading-02 font-medium">MOGANO</div>
        </div>

        {/* NEXT */}
        <div className="flex flex-col items-end">
          <div className="flex items-center gap-2">
            <Image src={nextArrow} style={{ width: "12px", height: "9px" }} />
            <div className="text-subheading-05 font-medium text-neutral-200">
              NEXT
            </div>
          </div>
          <div className="text-heading-02 font-medium">
            Thrive with Purwadhika
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Portfolio;



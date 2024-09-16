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
import { useRef, useState } from "react";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

const Portfolio = () => {
  const [activeSection, setActiveSection] = useState("");
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0.2 1", "1 1"],
  });

  const scaleY = useSpring(scrollYProgress, {
    stiffness: 300,
    damping: 30,
    restDelta: 0.001,
  });

  const scale = useTransform(scaleY, [0, 1], ["90%", "100%"]);

  useIntersectionObserverPortfolio("change-bg", setActiveSection);

  return (
    <div
      className={`${
        activeSection === "change-bg" ? "bg-black" : "bg-transparent"
      } duration-500`}
    >
      <div className="h-[72px] mb-14" />
      <div className="container max-md:flex max-md:flex-col max-md: text-body-04 grid grid-cols-2 mb-14">
        <div className="max-md:mb-4">
          <div className="max-md:mb-3 border w-fit px-3 py-1 rounded-3xl border-black text-body-04 max-md:text-caption-01">
            SOCIAL MEDIA
          </div>
          <div className="text-title-01 font-medium max-md:text-heading-01">
            Markdata{" "}
          </div>
        </div>
        <div className="flex justify-end items-end max-md:text-body-05 text-body-03">
          The Millennial Gen Z Kaltim project aims to build a media community
          account for young people in East Kalimantan and gain at least 1,000
          folowers within 3 months.
        </div>
      </div>
      <motion.div
        ref={ref}
        style={{
          scale, // Apply the scale transformation
          width: "100%", // Set the image size
          height: "100%",
          margin: "0 auto", // Center the image
          // marginBottom: "176px",
        }}
        transition={{
          // type: "spring",
          stiffness: 300, // High stiffness to make the bounce more pronounced
          damping: 10, // Lower damping to allow more bounce
          duration: 0.8, // Duration of the scaling
          // delay: 0.1, // Add a slight delay before starting the effect
        }}
      >
        <Image src={portImage} className="object-cover w-full h h-full" />
      </motion.div>

      {/* PROJECT DESCRIPTION */}
      <div className="container max-md:block text-body-03 grid grid-cols-2 mb-44 max-md:mb-16 mt-[176px] max-md:mt-[34px]">
        <div className="max-md:mb-12">
          <div className="text-subheading-05 max-md:text-caption-01 font-medium text-neutral-200 mb-2">
            SERVICE
          </div>
          <div className="text-body-04 max-md:text-body-05 w-[200px]">
            Social Media Management for Media Community{" "}
          </div>
        </div>
        <div className="">
          <div className="text-subheading-05 max-md:text-caption-01 font-medium text-neutral-200 mb-2">
            PROJECT
          </div>
          <div className="text-body-02 max-md:text-body-05">
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
          className="w-full h-full mb-44 max-md:mb-16"
          // style={{ width: "100%", height: "100%", marginBottom: "176px" }}
        />
      </div>
      <div className="container ">
        <div
          id="change-bg"
          className="text-body-03 flex mb-44 gap-[136px] max-md:mb-16 max-md:block"
        >
          <div className="max-md:mb-10">
            <div className="text-subheading-05 max-md:text-caption-01 font-medium text-neutral-200 mb-2">
              RESULTS
            </div>
            <div
              className={`${
                activeSection === "change-bg" ? "text-white" : ""
              } text-body-02 max-md:text-body-05 w-[310px] h-[84px] max-md:h-auto`}
            >
              In a span of 8 months of our exclusive and our hard work this is
              the results
            </div>
          </div>

          <div className="flex max-md:flex-col max-md:gap-10 w-full justify-between">
            <div className="flex flex-col md:items-center md:justify-center">
              <div className="text-title-02 max-md:text-heading-01 font-medium text-primary-brand">
                716K
              </div>
              <div className="text-subheading-05 max-md:text-caption-01 text-neutral-200">
                REACH {/* toUpperCase */}
              </div>
            </div>

            <div className="flex flex-col md:items-center md:justify-center">
              <div className="text-title-02 font-medium text-primary-brand max-md:text-heading-01">
                59.7K
              </div>
              <div className="text-subheading-05 text-neutral-200 max-md:text-caption-01">
                PROFILE VISITS {/* toUpperCase */}
              </div>
            </div>
            <div className="flex flex-col md:items-center md:justify-center">
              <div className="text-title-02 font-medium text-primary-brand max-md:text-heading-01">
                5.9K
              </div>
              <div className="text-subheading-05 text-neutral-200 max-md:text-caption-01">
                FOLLOWERS {/* toUpperCase */}
              </div>
            </div>
          </div>
        </div>

        <Image
          src={portImage3}
          className="w-full h-full mb-44 max-md:mb-16"
          // style={{ width: "100%", height: "100%", marginBottom: "176px" }}
        />

        {/* BULLET LIST */}
        <div
          className={`${
            activeSection === "change-bg" ? "text-white" : ""
          } flex flex-col gap-10 mb-[161px] max-md:mb-16`}
        >
          <div className="flex text-heading-02 font-medium ">
            <Image
              src={bullet}
              className="animate-spin max-md:w-5 max-md:h-5 max-md:p-1 p-2 max-md:mr-2 mr-4 w-10 h-10"
              style={{
                width: "40px",
                height: "40px",
                padding: "8px",
                marginRight: "16px",
              }}
            />
            <div className="max-md:text-subheading-04 text-heading-02">
              Recognized by the East Kalimantan beauty pageant community and
              invited to attend the press release for Putri Indonesia from East
              Kalimantan.
            </div>
          </div>
          <div className="flex text-heading-02 font-medium">
            <Image
              src={bullet}
              className="animate-spin-counter max-md:w-5 max-md:h-5 max-md:p-1 p-2 max-md:mr-2 mr-4 w-10 h-10"
              style={{
                width: "40px",
                height: "40px",
                padding: "8px",
                marginRight: "16px",
              }}
            />
            <div className="max-md:text-subheading-04 text-heading-02">
              Valued and trusted by East Kalimantan youth as a platform to
              promote their community programs for a better East Kalimantan.
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-2 md:gap-4">
        <Image src={portImage5} style={{ width: "100%", height: "100%" }} />
        <Image src={portImage3} style={{ width: "100%", height: "100%" }} />
        <Image src={portImage4} style={{ width: "100%", height: "100%" }} />
      </div>

      {/* PAGE */}
      <div className="container flex justify-between h-32 max-md:h-20 items-center">
        {/* PREV */}
        <div className="flex flex-col items-start">
          <div className="flex items-center gap-2 mb-2">
            <Image src={prevArrow} style={{ width: "12px", height: "9px" }} />
            <div className="text-subheading-05 max-md:text-caption-01 font-medium text-neutral-200 ">
              PREVIOUS
            </div>
          </div>
          <div className="text-heading-02 max-md:text-subheading-04 font-medium">
            MOGANO
          </div>
        </div>

        {/* NEXT */}
        <div className="flex flex-col items-end">
          <div className="flex items-center gap-2 mb-2">
            <Image src={nextArrow} style={{ width: "12px", height: "9px" }} />
            <div className="text-subheading-05 font-medium max-md:text-caption-01 text-neutral-200 ">
              NEXT
            </div>
          </div>
          <div className="text-heading-02 font-medium max-md:text-subheading-04">
            Thrive with Purwadhika
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Portfolio;

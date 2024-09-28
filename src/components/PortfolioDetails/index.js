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
import BASE_URL from "@/config";
import Button from "../Buttons/Button";

const PortfolioDetails = ({ data, nextPortfolio, prevPortfolio }) => {
  const [activeSection, setActiveSection] = useState("");
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0.2 1", "1 1"], //["0 0.8", "0.8 1"] ["0.2 1", "1 1"]
  });

     console.log("data", data);
//   console.log(`${JSON.stringify(data?.mediaGroupA, null, 2)}`);
  //   console.log(`${BASE_URL}${data?.jumboTronMedia.url}`);

  const scaleY = useSpring(scrollYProgress, {
    stiffness: 300,
    damping: 30,
    restDelta: 0.001,
  });

  const scale = useTransform(scaleY, [0, 1], ["80%", "100%"]);

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
            {data?.type.toUpperCase()}
          </div>
          <div className="text-title-01 font-medium max-md:text-heading-01">
            {data?.name}
          </div>
        </div>
        <div className="flex justify-end items-end max-md:text-body-05 text-body-03">
          {data?.shortDesc}
        </div>
      </div>
      <motion.div
        ref={ref}
        style={{
          scale, // Apply the scale transformation
          width: "100%", // Set the image size
          height: "100vh",
          margin: "0 auto", // Center the image
          // marginBottom: "176px",
        }}
        transition={{
          // type: "spring",
          stiffness: 300, // High stiffness to make the bounce more pronounced
          damping: 10, // Lower damping to allow more bounce
          duration: 0.8, // Duration of the scaling
          // delay: 0.1, // Add a slight delay before starting the effect ${process.env.STRAPI_BASE_URL}
        }}
      >
        <Image
          src={`${data?.jumboTronMedia}`}
          className="object-cover w-full h h-full max-sm:hidden"
          fill={true}
          alt=""
        />
        <Image
          src={`${data?.jumboTronMobile}`}
          className="object-cover w-full h h-full sm:hidden"
          fill={true}
          alt=""
        />
      </motion.div>

      {/* PROJECT DESCRIPTION */}
      <div className="container max-md:block text-body-03 grid grid-cols-2 mb-44 max-md:mb-16 mt-[176px] max-md:mt-[34px]">
        <div className="max-md:mb-12">
          <div className="text-subheading-05 max-md:text-caption-01 font-medium text-neutral-200 mb-2">
            SERVICE
          </div>
          <div className="text-body-04 max-md:text-body-05 w-[200px]">
            {data?.service}
          </div>
        </div>
        <div className="">
          <div className="text-subheading-05 max-md:text-caption-01 font-medium text-neutral-200 mb-2">
            PROJECT
          </div>
          <div
            className={`${
              activeSection === "change-bg" ? "text-white" : ""
            } text-body-02 max-md:text-body-05`}
          >
            {data?.projectDescription}
          </div>
        </div>
      </div>
      {/* END PROJECT DESCRIPTION */}

      {/* CANVAS 1 */}
      <div className="container">
        {/* media 0 */}
        {data?.mediaA && (
          <div className="w-full h-full mb-44 max-md:mb-16 relative">
            {!data?.mediaA.endsWith(".mp4") ? (
              <img
                src={`${data?.mediaA}`}
                alt=""
                className="w-full h-full"
                // style={{ width: "100%", height: "100%", marginBottom: "176px" }}
              />
            ) : (
              <div>
                <video width="100%" height="auto" controls>
                  <source src={`${data?.mediaA}`} type="video/mp4" />
                  <source src={`${data?.mediaA}`} type="video/webm" />
                  Your browser does not support the video tag.
                </video>
              </div>
            )}
          </div>
        )}

        {/* media 2 */}
        {data?.mediaB && (
          <div className="w-full h-full mb-44 max-md:mb-16 relative">
            {!data?.mediaB.endsWith(".mp4") ? (
              <img
                src={`${data?.mediaB}`}
                alt=""
                className="w-full h-full"
                // style={{ width: "100%", height: "100%", marginBottom: "176px" }}
              />
            ) : (
              <div>
                <video width="100%" height="auto" controls>
                  <source src={`${data?.mediaB}`} type="video/mp4" />
                  <source src={`${data?.mediaB}`} type="video/webm" />
                  Your browser does not support the video tag.
                </video>
              </div>
            )}
          </div>
        )}

        {data?.mediaC && (
          <div className="w-full h-full mb-44 max-md:mb-16 relative">
            {!data?.mediaC?.endsWith(".mp4") ? (
              <img
                src={`${data?.mediaC}`}
                alt=""
                fill={true}
                unoptimized="true"
                // style={{ width: "100%", height: "100%", marginBottom: "176px" }}
              />
            ) : (
              <div>
                <video width="100%" height="auto" controls>
                  <source src={`${data?.mediaC}`} type="video/mp4" />
                  <source src={`${data?.mediaC}`} type="video/webm" />
                  Your browser does not support the video tag.
                </video>
              </div>
            )}
          </div>
        )}
      </div>

      {/* RESULT */}
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
              {data?.resultTextContent}
            </div>
          </div>

          <div className="flex max-md:flex-col max-md:gap-10 w-full justify-between">
            <div className="flex flex-col md:items-center md:justify-center">
              <div className="text-title-02 max-md:text-heading-01 font-medium text-primary-brand">
                {data?.resultValueA}
              </div>
              <div className="text-subheading-05 max-md:text-caption-01 text-neutral-200">
                {data?.resultKeyA?.toUpperCase()} {/* toUpperCase */}
              </div>
            </div>

            <div className="flex flex-col md:items-center md:justify-center">
              <div className="text-title-02 font-medium text-primary-brand max-md:text-heading-01">
                {data?.resultValueB}
              </div>
              <div className="text-subheading-05 text-neutral-200 max-md:text-caption-01">
                {data?.resultKeyB?.toUpperCase()} {/* toUpperCase */}
              </div>
            </div>

            <div className="flex flex-col md:items-center md:justify-center">
              <div className="text-title-02 font-medium text-primary-brand max-md:text-heading-01">
                {data?.resultValueC}
              </div>
              <div className="text-subheading-05 text-neutral-200 max-md:text-caption-01">
                {data?.resultKeyC?.toUpperCase()} {/* toUpperCase */}
              </div>
            </div>
          </div>
        </div>

        {/* media 2 */}
        {data?.mediaD && data?.mediaD && (
          <div className="w-full h-full mb-44 max-md:mb-16">
            {!data?.mediaD?.endsWith(".mp4") ? (
              <img
                src={`${data?.mediaD}`}
                alt=""
                className="w-full h-full"
                unoptimized="true"
                // style={{ width: "100%", height: "100%", marginBottom: "176px" }}
              />
            ) : (
              <div>
                <video width="100%" height="auto" controls>
                  <source src={`${data?.mediaD}`} type="video/mp4" />
                  <source src={`${data?.mediaD}`} type="video/webm" />
                  Your browser does not support the video tag.
                </video>
              </div>
            )}
          </div>
        )}
        {data?.mediaE && (
          <div className="w-full h-full mb-44 max-md:mb-16">
            {!data?.mediaE?.endsWith(".mp4") ? (
              <img
                src={`${data?.mediaE}`}
                alt=""
                className="w-full h-full"
                unoptimized="true"
                // style={{ width: "100%", height: "100%", marginBottom: "176px" }}
              />
            ) : (
              <div>
                <video width="100%" height="auto" controls>
                  <source src={`${data?.mediaE}`} type="video/mp4" />
                  <source src={`${data?.mediaE}`} type="video/webm" />
                  Your browser does not support the video tag.
                </video>
              </div>
            )}
          </div>
        )}
        {data?.mediaF && (
          <div className="w-full h-full mb-44 max-md:mb-16">
            {!data?.mediaF?.endsWith(".mp4") ? (
              <img
                src={`${data?.mediaF}`}
                alt=""
                className="w-full h-full"
                unoptimized="true"
                // style={{ width: "100%", height: "100%", marginBottom: "176px" }}
              />
            ) : (
              <div>
                <video width="100%" height="auto" controls>
                  <source src={`${data?.mediaF}`} type="video/mp4" />
                  <source src={`${data?.mediaF}`} type="video/webm" />
                  Your browser does not support the video tag.
                </video>
              </div>
            )}
          </div>
        )}

        {/* BULLET LIST */}
        <div
          className={`${
            activeSection === "change-bg" ? "text-white" : ""
          } flex flex-col gap-10 mb-[161px] max-md:mb-16`}
        >
          {data?.achievementA && (
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
                alt=""
              />
              <div className="max-md:text-subheading-04 text-heading-02">
                {data?.achievementA}
              </div>
            </div>
          )}

          {data?.achievementB && (
            <div className="flex text-heading-02 font-medium ">
              <Image
                src={bullet}
                className="animate-spin-counter max-md:w-5 max-md:h-5 max-md:p-1 p-2 max-md:mr-2 mr-4 w-10 h-10"
                style={{
                  width: "40px",
                  height: "40px",
                  padding: "8px",
                  marginRight: "16px",
                }}
                alt=""
              />
              <div className="max-md:text-subheading-04 text-heading-02">
                {data?.achievementB}
              </div>
            </div>
          )}

          {data?.achievementC && (
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
                alt=""
              />
              <div className="max-md:text-subheading-04 text-heading-02">
                {data?.achievementC}
              </div>
            </div>
          )}

          {data?.achievementD && (
            <div className="flex text-heading-02 font-medium ">
              <Image
                src={bullet}
                className="animate-spin-counter max-md:w-5 max-md:h-5 max-md:p-1 p-2 max-md:mr-2 mr-4 w-10 h-10"
                style={{
                  width: "40px",
                  height: "40px",
                  padding: "8px",
                  marginRight: "16px",
                }}
                alt=""
              />
              <div className="max-md:text-subheading-04 text-heading-02">
                {data?.achievementD}
              </div>
            </div>
          )}
          {data?.achievementE && (
            <div className="flex text-heading-02 font-medium ">
              <Image
                src={bullet}
                className="animate-spin-counter max-md:w-5 max-md:h-5 max-md:p-1 p-2 max-md:mr-2 mr-4 w-10 h-10"
                style={{
                  width: "40px",
                  height: "40px",
                  padding: "8px",
                  marginRight: "16px",
                }}
                alt=""
              />
              <div className="max-md:text-subheading-04 text-heading-02">
                {data?.achievementE}
              </div>
            </div>
          )}
        </div>
      </div>
      <div className="flex flex-col gap-2 md:gap-4">
        {data?.mediaG && (
          <div className="w-full h-full">
            {!data?.mediaG.endsWith(".mp4") ? (
              <img
                src={`${data?.mediaG}`}
                alt=""
                className="w-full h-full"
                unoptimized="true"
                // style={{ width: "100%", height: "100%", marginBottom: "176px" }}
              />
            ) : (
              <div>
                <video width="100%" height="auto" controls>
                  <source src={`${data?.mediaG}`} type="video/mp4" />
                  <source src={`${data?.mediaG}`} type="video/webm" />
                  Your browser does not support the video tag.
                </video>
              </div>
            )}
          </div>
        )}
        {data?.mediaH && (
          <div className="w-full h-full">
            {!data?.mediaH.endsWith(".mp4") ? (
              <img
                src={`${data?.mediaH}`}
                alt=""
                className="w-full h-full"
                unoptimized="true"
                // style={{ width: "100%", height: "100%", marginBottom: "176px" }}
              />
            ) : (
              <div>
                <video width="100%" height="auto" controls>
                  <source src={`${data?.mediaH}`} type="video/mp4" />
                  <source src={`${data?.mediaH}`} type="video/webm" />
                  Your browser does not support the video tag.
                </video>
              </div>
            )}
          </div>
        )}
        {data?.mediaI && (
          <div className="w-full h-full">
            {!data?.mediaI.endsWith(".mp4") ? (
              <img
                src={`${data?.mediaI}`}
                alt=""
                className="w-full h-full"
                unoptimized="true"
                // style={{ width: "100%", height: "100%", marginBottom: "176px" }}
              />
            ) : (
              <div>
                <video width="100%" height="auto" controls>
                  <source src={`${data?.mediaI}`} type="video/mp4" />
                  <source src={`${data?.mediaI}`} type="video/webm" />
                  Your browser does not support the video tag.
                </video>
              </div>
            )}
          </div>
        )}
      </div>

      {/* PAGE */}
      <div className="container flex justify-between h-32 max-md:h-20 items-center">
        {/* PREV */}
        <div className="flex flex-col items-start group">
          {prevPortfolio && (
            <>
              <div className="flex items-center gap-2 mb-2">
                <svg
                  width="12"
                  height="9"
                  viewBox="0 0 9 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M0 6L9 0V12L0 6Z"
                    className="group-hover:fill-primary-brand fill-black"
                    style={{ width: "12px", height: "9px" }}
                  />
                </svg>
                <div className="text-subheading-05 max-md:text-caption-01 font-medium text-neutral-200 ">
                  PREVIOUS
                </div>
              </div>
              <Button
                className="text-heading-02 max-md:text-subheading-04 font-medium"
                // className2="text-left"
                link={`/portfolios/${prevPortfolio?.slug}`}
                onHoverText={prevPortfolio?.name}
              >
                {prevPortfolio?.name}
              </Button>
            </>
          )}
        </div>

        {/* NEXT */}
        <div className="flex flex-col items-end group">
          {nextPortfolio && (
            <>
              {" "}
              <div className="flex items-center gap-2 mb-2">
                <div className="text-subheading-05 font-medium max-md:text-caption-01 text-neutral-200 ">
                  NEXT
                </div>
                <svg
                  width="12"
                  height="9"
                  viewBox="0 0 9 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9 6L0 12L0 0L9 6Z"
                    className="group-hover:fill-primary-brand fill-black"
                    style={{ width: "12px", height: "9px" }}
                  />
                </svg>
              </div>
              <Button
                className="text-heading-02 font-medium max-md:text-subheading-04"
                // className2="text-left"
                link={`/portfolios/${nextPortfolio?.slug}`}
                onHoverText={nextPortfolio?.name}
              >
                {nextPortfolio?.name}
              </Button>
            </>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default PortfolioDetails;

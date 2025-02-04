"use client";
import Image from "next/image";
import image1 from "../../public/Home_Page_-_Desktop.webp";
import image2 from "../../public/Home_Page_-_Mobile.webp";
import logo from "../../public/logo.svg";
import parallaxImage from "../../public/jumboTron.png";
import { useEffect, useState } from "react";

const JumboTron = ({ mobile, main }) => {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    if (typeof window !== "undefined") {
      setIsMobile(window.innerWidth < 960);
    }
  }, [isMobile]);

  console.log(isMobile);

  return (
    <div className="">
      <div className="sticky top-0 -z-50">
        {/* <div className="h-[72px] bg-black" /> */}
        <Image
          src={main}
          alt=""
          width={1920}
          height={1080}
          className="max-md:hidden w-full h-screen object-cover sticky top-0 -z-50 bg-black"
          // style={{
          //   width: "100%",
          //   height: "100vh",
          //   objectFit: "cover",
          //   position: "sticky",
          //   top: "0",
          //   zIndex: "-10",
          //   background: "#000",
          // }}
        />
        <Image
          src={mobile}
          alt=""
          width={360}
          height={800}
          className="md:hidden w-full h-screen object-cover sticky top-0 -z-10 bg-black"
          // style={{
          //   width: "100%",
          //   height: "100vh",
          //   objectFit: "cover",
          //   position: "sticky",
          //   top: "0",
          //   zIndex: "-10",
          //   background: "#000",
          // }}
        />
      </div>

      <section
        id="about-us"
        className="bg-black h-[100vh] max-md:min-h-[592px] sm:max-md:h-[700px] max-sm:h-[304px] md:pl-16 flex max-md:flex-col max-md:w-full z-50"
      >
        <div className="h-full w-full flex items-center">
          <div className=" md:text-title-03 max-sm:text-heading-03 sm:max-md:text-heading-01 max-md:h-[304px] text-gray-100 md:mr-16 flex-auto w-[300px] max-md:w-full max-md:pt-10 max-md:container max-md:mb-16 content-center">
            Jakarta & Bali based{" "}
            <span className="text-primary-brand">creative studio</span> with
            years of experience helping brands achieve their goals.
          </div>
        </div>
        <div className="flex-1 md:min-w-[406px] max-md:w-screen max-md:h-[184px] flex justify-end relative">
          {isMobile ? (
            <Image
              src={image2}
              alt="Descriptive alt text"
              className="h-full w-[406px] max-md:w-full object-cover"
            />
          ) : (
            <Image
              src={image1}
              alt="Descriptive alt text"
              className="h-full w-[406px] max-md:w-full object-cover"
            />
          )}

          <Image
            src={logo}
            alt="Logo alt text"
            className="mix-blend-difference max-sm:w-[118px] max-sm:h-[118px] absolute inset-3-0 right-[310px] max-md:right-[40px] bottom-[150px] sm:max-md:bottom-[200px]"
          />
        </div>
      </section>
    </div>
  );
};

export default JumboTron;

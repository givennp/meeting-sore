import Image from "next/image";
import portfolio from "../../../public/portfolio.jpg";
import triangleIcon from "../../../public/triangle.svg";
import "./portfolio.module.css";
import { useState } from "react";

const PortfolioCard = () => {
  return (
    <>
      <div className="lg:h-[520px] h-[330px] md:h-[450px] group w-[256px] md:w-[320px] lg:w-[414px]">
        <div className="w-full h-[276px] md:h-[340px] sm:h-[276px] lg:h-[448px] lg:group-hover:h-[376px] md:group-hover:h-[268px] max-md:group-hover:h-[224px] duration-[400ms] group-hover:h-[376px] relative overflow-hidden mb-4">
          <div className="absolute inset-0 transition-transform duration-[400ms] group-hover:scale-125">
            <Image
              src={portfolio}
              // layout="fill"
              // objectFit="cover"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="absolute inset-0 flex opacity-0 justify-center items-center duration-[200ms] group-hover:opacity-100">
            <div className="text-white text-body-02 max-md:text-body bg-white bg-opacity-20  max-h-fit max-w-fit backdrop-blur-md rounded-[56px] px-2 py-1">
              VIEW PORTFOLIO
            </div>
          </div>
        </div>
        <div className="flex items-start w-full h-[56px] relative">
          <div
            style={{
              width: "12px",
              height: "20px",
              display: "flex",
              alignItems: "center",
              marginRight: "12px",
            }}
          >
            <svg
              width="12"
              height="10"
              viewBox="0 0 12 10"
              // fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M6 0.5L12 9.5L0 9.5L6 0.5Z"
                fill="#fff"
                className={`group-hover:fill-black duration-[400ms]`}
              />
            </svg>
          </div>
          <div>
            <p className="text-body-05 text-neutral-100 max-md:text-caption-01">{"Social Media".toUpperCase()}</p>
            <p className="text-subheading-01 max-md:text-subheading-04 group-hover:text-neutral-100 duration-[400ms]">
              Betterfly Travel
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default PortfolioCard;

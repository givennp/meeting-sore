import Image from "next/image";
import portfolio from "../../../public/portfolio.jpg";
import triangleIcon from "../../../public/triangle.svg";
import "./portfolio.module.css";
import { useState } from "react";

const PortfolioCard = () => {
  const [isHover, setIsHover] = useState(false);
  return (
    <>
      <div
        className="h-[520px] group"
        onMouseEnter={() => setIsHover(true)}
        onMouseLeave={() => setIsHover(false)}
      >
        <div className="w-[414px] h-[448px] duration-[400ms] group-hover:h-[376px] relative overflow-hidden mb-4">
          <div className="absolute h-[448px] inset-0 transition-transform duration-[400ms] group-hover:scale-125 ">
            <Image
              src={portfolio}
              layout="fill"
              objectFit="cover"
              className="w-full h-full"
            />
          </div>
          <div className="absolute inset-0 flex opacity-0 justify-center items-center duration-[200ms] group-hover:opacity-100">
            <div className="text-white text-body-02 bg-white bg-opacity-20  max-h-fit max-w-fit backdrop-blur-md rounded-[56px] px-2 py-1">
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
            <img
              src="/triangle.svg"
              className="group-hover:fill-white duration-[400ms]"
              style={{ width: "12px", height: "9px" }}
            />
          </div>
          <div>
            <p className="text-body-05 text-neutral-100">Social Media</p>
            <p className="text-subheading-01 group-hover:text-neutral-100 duration-[400ms]">
              Betterfly Travel
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default PortfolioCard;

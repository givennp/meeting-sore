"use client";
import { useState } from "react";
import style from "./portfolio.module.css";
import Link from "next/link";

const PortfolioCard = ({image, name, type, slug}) => {
  const [isHovered, setIsHovered] = useState(false);
  // const router = useRouter();

  // const handleClick = () => {
  //   router.push("/portfolio");
  // };

  return (
    <>
      <Link
        href={`/portfolios/${slug}`}
        className="lg:h-[520px] h-[330px] md:h-[450px] group w-[256px] md:w-[320px] lg:w-[414px]"
      >
        <div className="w-full h-[276px] md:h-[340px] sm:h-[276px] lg:h-[448px] lg:group-hover:h-[376px] md:group-hover:h-[268px] duration-[400ms] relative overflow-hidden mb-4">
          <div className="absolute inset-0 transition-transform duration-[400ms] md:group-hover:scale-125">
            <img
              src={image}
              // layout="fill"
              // objectFit="cover"
              // width={414}
              // height={448}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="absolute inset-0 flex justify-center items-center">
            <div
              className={`${style.text} text-white opacity-0 group-hover:opacity-100 duration-[200ms] transition-all text-body-02 max-md:text-body bg-white bg-opacity-20 max-h-fit max-w-fit backdrop-blur-md rounded-[56px] px-2 py-1`}
            >
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
            <p className="text-body-05 text-neutral-100 max-md:text-caption-01">
              {type.toUpperCase()}
            </p>
            <p className="text-subheading-01 max-md:text-subheading-04 group-hover:text-neutral-100 duration-[400ms]">
              {name}
            </p>
          </div>
        </div>
      </Link>
    </>
  );
};

export default PortfolioCard;

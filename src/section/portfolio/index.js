"use client";
import RoundedButton from "@/components/RoundedButtons";
import useIntersectionObserver from "@/hooks/useIntersectionObserver";
import { useEffect, useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import leftArrow from "../../../public/leftArrow.png";
import rightArrow from "../../../public/rightArrow.png";
import betterfly from "../../../public/betterfly-travel.png";
import mogano from "../../../public/mogano.png";
import pwdk from "../../../public/pwdk.png";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "./portfolio.css";

// import required modules
import { FreeMode, Pagination, A11y, Navigation } from "swiper/modules";
import Image from "next/image";

const { default: PortfolioCard } = require("@/components/PortfolioCard");

const PortfolioSection = () => {
  const [activeSection, setActiveSection] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [maxPage, setMaxPage] = useState(5);

  const swiperRef = useRef();
  const [active, setActive] = useState("All");
  const [isMobile, setIsMobile] = useState(false);
  const [mobilePagination, setMobilePagination] = useState("");
  const [nextPageButton, setNextPageButton] = useState("");
  const [prevPageButton, setPrevPageButton] = useState("");

  const data = [
    {
      image: betterfly,
      name: "Betterfly Travel",
      type: "Social Media",
    },
    {
      image: mogano,
      name: "Mogano",
      type: "Branding",
    },
    {
      image: pwdk,
      name: "Thrive with Purwadhika",
      type: "Production",
    },
    {
      image: betterfly,
      name: "Betterfly Travel",
      type: "Social Media",
    },
    {
      image: mogano,
      name: "Mogano",
      type: "Branding",
    },
    {
      image: pwdk,
      name: "Thrive with Purwadhika",
      type: "Production",
    },
  ];

  useIntersectionObserver("portfolio", setActiveSection);

  const handlePrev = () => {
    if (currentPage == 1) return;
    setCurrentPage(() => currentPage - 1);
    swiperRef.current?.swiper.slidePrev();
  };

  const handleNext = () => {
    if (currentPage == maxPage) return;
    setCurrentPage(() => currentPage + 1);
    swiperRef.current?.swiper.slidePrev();
  };

  const filterHandler = (btn) => {
    setActive(btn);
  };

  const renderData = () => {
    // data.filter((val.type) => {})
    let filteredData = data
    if (active != "All") {
      filteredData = data.filter((val) => val.type === active);
    }
    return filteredData.map((portfolio, i) => {
      return (
        <SwiperSlide key={i}>
          <PortfolioCard
            image={portfolio.image}
            name={portfolio.name}
            type={portfolio.type}
            key={i + 10}
          />
        </SwiperSlide>
      );
    });
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      setIsMobile(window.innerWidth < 960);

      setMobilePagination(
        isMobile ? ".swiper-pagination-mobile" : ".swiper-pagination"
      );
      setNextPageButton(".nextPage");
      setPrevPageButton(".prevPage");
    }
  }, [isMobile]);

  return (
    <div
      id="portfolio"
      className={`section py-[88px]
           ${activeSection === "portfolio" ? "bg-primary-brand" : "none"} 
        duration-300`}
    >
      <div className="container">
        <div
          className={`mb-8 max-md:mb-6 font-medium text-subheading-03 ${
            activeSection === "portfolio" ? "text-white" : "text-neutral-200"
          } max-md:text-caption-01`}
        >
          PREVIOUS WORKS
        </div>

        <div className="flex justify-between h-8 w-full mb-[40px]">
          <div className="flex flex-wrap flex-col gap-4  justify-between md:w-max overflow-auto scrolling-wrapper-flexbox">
            <RoundedButton
              onClick={() => filterHandler("All")}
              isActive={active == "All"}
            >
              ALL
            </RoundedButton>{" "}
            <RoundedButton
              onClick={() => filterHandler("Social Media")}
              isActive={active == "Social Media"}
            >
              SOCIAL MEDIA
            </RoundedButton>{" "}
            <RoundedButton
              onClick={() => filterHandler("Branding")}
              isActive={active == "Branding"}
            >
              BRANDING
            </RoundedButton>
            <RoundedButton
              onClick={() => filterHandler("Production")}
              isActive={active == "Production"}
            >
              PRODUCTION
            </RoundedButton>
          </div>

          {!isMobile && (
            <div className="flex items-center justify-center max-md:hidden">
              <div className="prevPage cursor-pointer">
                <Image
                  src={leftArrow}
                  // onClick={handlePrev}
                />
              </div>
              <div className="mx-2 w-12 text-center swiper-pagination">
                {/* {currentPage} / {maxPage} */}
              </div>
              <div className="nextPage cursor-pointer">
                <Image
                  src={rightArrow}
                  //  onClick={handleNext}
                />
              </div>
            </div>
          )}
        </div>
        <Swiper
          className="mySwiper"
          autoHeight={true}
          breakpoints={{
            300: {
              slidesPerView: 2,
              // spaceBetween: "2%",
              spaceBetween: 216,
              slidesOffsetAfter: 210,
            },
            600: {
              slidesPerView: 2,
              // spaceBetween: 300,
            },
            960: {
              slidesPerView: 3,
              spaceBetween: 100,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
          pagination={{
            el: mobilePagination,
            type: "custom",
            renderCustom: function (swiper, current, total) {
              return `<div className="mx-2 w-12 text-center">
              ${current} / ${total}
                </div>`;
            },
          }}
          freeMode={true}
          navigation={{ nextEl: nextPageButton, prevEl: prevPageButton }}
          modules={[FreeMode, Navigation, Pagination, A11y]}
        >
          {renderData()}
        </Swiper>
      </div>

      {isMobile && (
        <div className="max-md:flex hidden items-center justify-between w-full container pt-12">
          <div className="prevPage cursor-pointer">
            <Image src={leftArrow} onClick={handlePrev} />
          </div>
          <div className="mx-2 w-12 text-center swiper-pagination">
            {/* {currentPage} / {maxPage} */}
          </div>
          <div className="nextPage cursor-pointer">
            <Image src={rightArrow} onClick={handleNext} />
          </div>
        </div>
      )}
    </div>
  );
};

export default PortfolioSection;

"use client";
import RoundedButton from "@/components/RoundedButtons";
import useIntersectionObserver from "@/hooks/useIntersectionObserver";
import { useEffect, useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import leftArrow from "../../../public/leftArrow.png";
import rightArrow from "../../../public/rightArrow.png";

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
  const [active, setActive] = useState("1");
  const [isMobile, setIsMobile] = useState(false);
  const [mobilePagination, setMobilePagination] = useState("");
  const [nextPageButton, setNextPageButton] = useState("");
  const [prevPageButton, setPrevPageButton] = useState("");

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

  useEffect(() => {
    if (typeof window !== "undefined") {
      setIsMobile(window.innerWidth < 960);

      setMobilePagination(
        isMobile ? ".swiper-pagination-mobile" : ".swiper-pagination"
      );
      setNextPageButton( ".nextPage");
      setPrevPageButton( ".prevPage");
    }
  }, []);

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
              onClick={() => filterHandler("1")}
              isActive={active == "1"}
            >
              ALL
            </RoundedButton>{" "}
            <RoundedButton
              onClick={() => filterHandler("2")}
              isActive={active == "2"}
            >
              SOCIAL MEDIA
            </RoundedButton>{" "}
            <RoundedButton
              onClick={() => filterHandler("3")}
              isActive={active == "3"}
            >
              BRANDING
            </RoundedButton>
            <RoundedButton
              onClick={() => filterHandler("4")}
              isActive={active == "4"}
            >
              PRODUCTION
            </RoundedButton>
          </div>

          {!isMobile && (
            <div className="flex items-center justify-center max-md:hidden">
              <div className="prevPage cursor-pointer">
                <Image src={leftArrow} 
                  // onClick={handlePrev}
                />
              </div>
              <div className="mx-2 w-12 text-center swiper-pagination">
                {/* {currentPage} / {maxPage} */}
              </div>
              <div className="nextPage cursor-pointer">
                <Image src={rightArrow}
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
          <SwiperSlide>
            <PortfolioCard key={1} />
          </SwiperSlide>
          <SwiperSlide>
            <PortfolioCard key={2} />
          </SwiperSlide>
          <SwiperSlide>
            <PortfolioCard key={3} />
          </SwiperSlide>
          <SwiperSlide>
            <PortfolioCard key={4} />
          </SwiperSlide>
          <SwiperSlide>
            <PortfolioCard key={5} />
          </SwiperSlide>
          <SwiperSlide>
            <PortfolioCard key={6} />
          </SwiperSlide>
          <SwiperSlide>
            <PortfolioCard key={7} />
          </SwiperSlide>
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

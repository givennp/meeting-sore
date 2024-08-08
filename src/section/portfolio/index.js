import RoundedButton from "@/components/RoundedButtons";
import useIntersectionObserver from "@/hooks/useIntersectionObserver";
import { useRef, useState } from "react";
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
  const swiper = useSwiper();
  const [active, setActive] = useState("1");

  useIntersectionObserver("section1", setActiveSection);

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
    setActive(btn)
  }

  return (
    <div
      id="section1"
      className={` h-screen section py-[88px]
           ${activeSection === "section1" ? "bg-primary-brand" : "none"} 
        duration-300`}
    >
      <div className="container">
        <div
          className={`mb-8 ${
            activeSection === "section1" ? "text-white" : "text-neutral-200"
          }`}
        >
          PREVIOUS WORKS
        </div>

        <div className="flex justify-between h-8  mb-[40px] ">
          <div className=" flex gap-4 items-center justify-center">
            <RoundedButton onClick={() => filterHandler("1")} isActive={active == "1"}>ALL</RoundedButton>
            <RoundedButton onClick={() => filterHandler("2")} isActive={active == "2"}>SOCIAL MEDIA</RoundedButton>
            <RoundedButton onClick={() => filterHandler("3")} isActive={active == "3"}>BRANDING</RoundedButton>
            <RoundedButton onClick={() => filterHandler("4")} isActive={active == "4"}>PRODUCTION</RoundedButton>
          </div>
          <div className="flex items-center justify-center">
            <div className="prevPage cursor-pointer">
              <Image src={leftArrow} onClick={handlePrev} />
            </div>
            <div className="mx-2 w-12 text-center">
              {currentPage} / {maxPage}
            </div>
            <div className="nextPage cursor-pointer">
              <Image src={rightArrow} onClick={handleNext} />
            </div>
          </div>
        </div>
      </div>
      <div className="xl:pl-[108px] lg:pl-lg md:pl-[32px] ">
        <Swiper
          // style={{ height: "700px" }}
          className="mySwiper"
          autoHeight={true}
          slidesPerView={4}
          spaceBetween={400}
          freeMode={true}
          setWrapperSize={true}
          slidesOffsetAfter={450}
          navigation={{ nextEl: ".nextPage", prevEl: ".prevPage" }}
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
    </div>
  );
};

export default PortfolioSection;

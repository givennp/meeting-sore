import RoundedButton from "@/components/RoundedButtons";
import useIntersectionObserver from "@/hooks/useIntersectionObserver";
import { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";

// import required modules
import { FreeMode, Pagination, A11y } from "swiper/modules";

const { default: PortfolioCard } = require("@/components/PortfolioCard");

const PortfolioSection = () => {
  const [activeSection, setActiveSection] = useState("");
  useIntersectionObserver("section1", setActiveSection);

  return (
    <div
      id="section1"
      className={` h-screen section pt-[88px]
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
        <div className="rounded-full flex gap-4 mb-[40px]">
          <RoundedButton>ALL</RoundedButton>
          <RoundedButton>SOCIAL MEDIA</RoundedButton>
          <RoundedButton>BRANDING</RoundedButton>
          <RoundedButton>PRODUCTION</RoundedButton>
        </div>
      </div>
      <div className=" pl-20">
        <Swiper
          // style={{ height: "700px" }}
          autoHeight={true}
          slidesPerView={4}
          spaceBetween={400}
          freeMode={true}
          setWrapperSize={true}
          slidesOffsetAfter={450}
          modules={[FreeMode]}
        >
          <SwiperSlide>
            <PortfolioCard />
          </SwiperSlide>
          <SwiperSlide>
            <PortfolioCard />
          </SwiperSlide>
          <SwiperSlide>
            <PortfolioCard />
          </SwiperSlide>
          <SwiperSlide>
            <PortfolioCard />
          </SwiperSlide>
          <SwiperSlide>
            <PortfolioCard />
          </SwiperSlide>
          <SwiperSlide>
            <PortfolioCard />
          </SwiperSlide>
          <SwiperSlide>
            <PortfolioCard />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default PortfolioSection;

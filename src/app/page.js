"use client";
import Parallax from "@/components/Parallax/Parallax";
import Image from "next/image";
import parallaxImage from "../../public/foto1.jpeg";
import image1 from "../../public/jalanan.jpeg";
import logo from "../../public/logo.svg";

const Home = () => {
  return (
    <>
      <section className="">
        <Image
          src={parallaxImage}
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
        />
      </section>
      <section className="bg-black h-[100vh] pl-16 flex relative ">
        <div className="md:text-title-03 text-gray-100 pt-24 flex-1">
          Jakarta & Bali based boutique{" "}
          <span className="text-primary-brand">creative studio</span> who helps
          brands stand out through stunning visual design and compelling
          copywriting, leaving a lasting impression.
        </div>
        <div className="flex-1 flex justify-end">
          <Image
            src={image1}
            alt="Descriptive alt text"
            className="h-full w-[406px] object-cover"
          />
        </div>
        <Image
          src={logo}
          alt="Logo alt text"
          className="mix-blend-difference absolute right-[205px] bottom-[150px]"
        />
      </section>
      
      <section className="h-[100vh] pl-16 flex relative">
        <div className="md:text-title-03 text-gray-100 max-w-4xl h-[350px] pt-24">
          Jakarta & Bali based boutique{" "}
          <span className="text-primary-brand">creative studio</span> who helps
          brands stand out through stunning visual design and compelling
          copywriting, leaving a lasting impression.
        </div>
        {/* <Image src={image1} style={{ height: "880px" }} /> */}
      </section>
    </>
  );
};

export default Home;

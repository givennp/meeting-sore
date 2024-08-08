import Image from "next/image";
import image1 from "../../public/jalanan.jpeg";
import logo from "../../public/logo.svg";
import parallaxImage from "../../public/jumboTron.png";

const JumboTron = () => {
  return (
    <div className="">
      <Image
        src={parallaxImage}
        style={{
          width: "100%",
          height: "100vh",
          objectFit: "cover",
          position: "sticky",
          top: "0",
          zIndex: "-10",
          background: "#000",
        }}
      />
      <section className="bg-black h-[100vh] max-md:min-h-[592px] max-md:h-[700px] md:pl-16 flex max-md:flex-col max-md:w-full ">
        <div className="md:text-title-03 max-md:text-heading-03 text-gray-100 pt-24 md:mr-16 flex-auto w-[300px] max-md:w-full max-md:pt-10 max-md:px-6 max-md:mb-16">
          Jakarta & Bali based boutique{" "}
          <span className="text-primary-brand">creative studio</span> who helps
          brands stand out through stunning visual design and compelling
          copywriting, leaving a lasting impression.
        </div>
        <div className="flex-1 min-w-[406px] max-md:w-full flex justify-end relative">
          <Image
            src={image1}
            alt="Descriptive alt text"
            className="h-full w-[406px] max-md:w-full object-cover"
          />
          <Image
            src={logo}
            alt="Logo alt text"
            className="mix-blend-difference absolute inset-3-0 right-[310px] max-md:right-[40px] bottom-[150px] sm:max-md:bottom-[450px]"
          />
        </div>
      </section>
    </div>
  );
};

export default JumboTron;

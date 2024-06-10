import Image from "next/image";
import image1 from "../../public/jalanan.jpeg";
import logo from "../../public/logo.svg";
import parallaxImage from "../../public/foto1.jpg";

const JumboTron = () => {
  return (
    <>
      <div className="h-[100vh] sticky top-0 -z-10">
        <Image
          src={parallaxImage}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            position: "sticky",
            top: "90px",
            zIndex: "-1",
          }}
        />
      </div>
      <section className="bg-black h-[100vh] pl-16 flex">
        <div className="md:text-title-03 text-gray-100 pt-24 mr-16 flex-auto w-[300px]">
          Jakarta & Bali based boutique{" "}
          <span className="text-primary-brand">creative studio</span> who helps
          brands stand out through stunning visual design and compelling
          copywriting, leaving a lasting impression.
        </div>
        <div className="flex-1 min-w-[406px] flex justify-end relative">
          <Image
            src={image1}
            alt="Descriptive alt text"
            className="h-full w-[406px] min-w-[] object-cover"
          />
          <Image
            src={logo}
            alt="Logo alt text"
            className="mix-blend-difference absolute inset-3-0 right-[310px] bottom-[150px]"
          />
        </div>
      </section>
    </>
  );
};

export default JumboTron;

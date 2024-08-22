import Button from "../Buttons/Button";
import logo from "../../../public/Logo_Complete.svg";
import Image from "next/image";

const Footer = () => {
  return (
    <div className="h-[466px] max-md:h-[270px] max-md:pt-[32px] pt-[56px] border-t border-neutral-200">
      <div className="container">
        <div className=" flex justify-between md:h-[314px] max-md:mb-10 max-md:h-[144px]">
          <div className="flex flex-col gap-4">
            <Button className="text-body-01 max-md:text-body-04">
              ABOUT US
            </Button>
            <Button className="text-body-01 max-md:text-body-04">
              EXPERTISE
            </Button>
            <Button className="text-body-01 max-md:text-body-04">
              PREVIOUS WORKS
            </Button>
            <Button className="text-body-01 max-md:text-body-04">
              CONTACT US
            </Button>
          </div>

          <div className="flex flex-col gap-4">
            <Button
              className="text-body-04 max-md:text-caption-01 min-w-[150px] text-right"
              className2="text-left"
              onHoverText="@meetingsore"
            >
              INSTAGRAM
            </Button>
            <Button
              className="text-body-04 max-md:text-caption-01 min-w-[170px] max-md:min-w-[100px] text-right"
              className2="text-left"
              onHoverText="linkedin/in/meetingsore"
            >
              LINKEDIN
            </Button>
          </div>
        </div>

        <div className="flex justify-between items-end">
          <Image
            width={92}
            height={24}
            src={logo}
            layout="fixed"
            className="mix-blend-difference"
            alt="Logo"
          />
          <span className="text-body-03 text-neutral-200 max-md:text-caption-02">
            Copyright 2024 Meeting Sore Studio
          </span>
        </div>
      </div>
    </div>
  );
};

export default Footer;

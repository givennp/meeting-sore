"use client";

import Image from "next/image";
import logo from "../../../public/Logo_Complete.svg";
import Link from "next/link";
import icon from "../../../public/menu-icon.svg";
import close from "../../../public/close.svg";
import Button from "../Buttons/Button";
import { useState } from "react";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* <div
        className={`${
          isOpen ? "opacity-100" : "opacity-0"
        } duration-300 text-center w-full h-full justify-center font-medium  text-heading-01 fixed top-0 backdrop-blur-lg z-50`}
      >
        <div className=" container h-[72px] z-50 mix-blend-difference fixed flex justify-between items-center">
          <Link href="/">
            <Image
              width={92}
              height={24}
              src={logo}
              layout="fixed"
              className="mix-blend-difference"
              alt="Logo"
            />
          </Link>

          <Image
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
            src={close}
            style={{ width: "24px", height: "24px" }}
          />
        </div>
        <div
          className={`${
            isOpen ? "opacity-50" : "opacity-0"
          } duration-200 bg-white opacity-50 -z-10 fixed h-full w-full`}
        />

        <div className="gap-6 flex flex-col w-full h-full text-center justify-center">
          <div>ABOUT</div>
          <div>EXPERTISE</div>
          <div>PORTFOLIO</div>
          <div>CONTACT US</div>
        </div>
      </div> */}

      <div
        className={`${
          isOpen ? "opacity-0" : "opacity-100"
        } duration-300 w-full h-[72px] max-md:h-[64px] mix-blend-difference backdrop-blur-md fixed top-0 z-50 navbar`}
      >
        <div className="container h-full  flex justify-between items-center">
          <Link href="/">
            <Image
              width={92}
              height={24}
              src={logo}
              layout="fixed"
              className="mix-blend-difference"
              alt="Logo"
            />
          </Link>
          <div className="flex gap-x-6 max-md:hidden text-white">
            <Button link="/portfolio">PORTFOLIO</Button>
            <Button link="/about">ABOUT</Button>
            <Button link="/contact">CONTACT US</Button>
          </div>

          <Image
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
            src={icon}
            style={{ width: "24px", height: "24px" }}
          />
        </div>
      </div>
    </>
  );
};

export default Navbar;

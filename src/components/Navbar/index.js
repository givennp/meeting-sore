"use client";

import Image from "next/image";
import Logo from "../../../public/Logo_Complete.svg";
import blackLogo from "../../../public/Logo_Complete_black.svg";
import Link from "next/link";
import icon from "../../../public/menu-icon.svg";
import close from "../../../public/close.svg";
import Button from "../Buttons/Button";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useRouter } from "next/navigation";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();

  // Check if the current page is not the home page
  const homePagePath = router.pathname == "/" ? "" : "/";
  return (
    <>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            // Motion properties for fade in/out
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }} // Fade duration
            className="menu text-center w-full h-full justify-center font-medium  text-heading-01 fixed top-0 backdrop-blur-lg z-50"
          >
            <div className=" h-[64px] w-full absolute flex justify-between items-center">
              <div className="container w-full flex justify-between items-center">
                <Link href="/">
                  <Image
                    width={76}
                    height={20}
                    src={blackLogo}
                    // layout="fixed"
                    className="fill-black"
                    alt="Logo"
                  />
                  {/* <Logo /> */}
                </Link>

                <Image
                  className="md:hidden w-6 h-6 hover:cursor-pointer"
                  onClick={() => setIsOpen(false)}
                  src={close}
                  alt=""
                />
              </div>
            </div>
            <div
              className={`duration-200 bg-white opacity-50 -z-10 fixed h-full w-full`}
            />

            <div className="gap-6 flex flex-col w-full h-full text-center justify-center">
              <Link href={`${homePagePath}#about-us`} onClick={() => setIsOpen(false)}>
                ABOUT
              </Link>
              <Link href={`${homePagePath}#expertise`} onClick={() => setIsOpen(false)}>
                EXPERTISE
              </Link>
              <Link href={`${homePagePath}#portfolio`} onClick={() => setIsOpen(false)}>
                PORTFOLIO
              </Link>
              <Link href={`${homePagePath}contact`} onClick={() => setIsOpen(false)}>
                CONTACT US
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
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
              // layout="fixed"
              className="mix-blend-difference"
              alt="Logo"
            />
          </Link>

          <Image
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
            src={close}
            style={{ width: "24px", height: "24px" }}
            alt=""
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
          isOpen ? "hidden" : "fixed"
        } duration-300 w-full h-[72px] max-md:h-[64px] mix-blend-difference backdrop-blur-md  top-0 z-50 navbar`}
      >
        <div className="container h-full  flex justify-between items-center">
          <Link href="/">
            <Image
              src={Logo}
              // layout="fixed"
              className="mix-blend-difference w-[92px] h-[24px] max-md:w-[76px] max-md:h-[20px]"
              alt="Logo"
            />
          </Link>
          <div className="flex gap-x-6 max-md:hidden text-white">
            <Button link={`${homePagePath}#about-us`}>ABOUT</Button>
            <Button link={`${homePagePath}#expertise`}>EXEPERTISE</Button>
            <Button link={`${homePagePath}#portfolio`}>PORTFOLIO</Button>
            <Button link={`${homePagePath}contact`}>CONTACT US</Button>
          </div>

          <Image
            className="md:hidden hover:cursor-pointer"
            onClick={() => setIsOpen(!isOpen)}
            src={icon}
            style={{ width: "24px", height: "24px" }}
            alt=""
          />
        </div>
      </div>
    </>
  );
};

export default Navbar;

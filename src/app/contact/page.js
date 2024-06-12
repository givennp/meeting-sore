"use client";

import "../globals.css";
import image1 from "../../../public/jalanan.jpeg";
import Image from "next/image";
import Button from "@/components/Buttons/Button";
import { useEffect } from "react";
import dynamic from "next/dynamic";
import FadeInUpText from "@/components/FadeInUpText";

const Contact = () => {
  const openApp = (app) => {
    switch (app) {
      case "WA":
        const preFilledText = encodeURIComponent("TEST 123");
        window.open(`https://wa.me/6282146517946/?text=${preFilledText}`);
        break;
      case "IG":
        window.open("https://www.instagram.com/meetingsore/");
        break;
      case "LI":
        window.open("https://linkedin.com/company/meetingsore");
        break;
      case "email":
        const subject = encodeURIComponent("Put the subject here");
        const recipient = encodeURIComponent("team@meetingsore.com");
        const body = encodeURIComponent("");
        const url = `https://mail.google.com/mail/?view=cm&fs=1&su=${subject}&to=${recipient}&body=${body}`;
        window.open(url, "_blank", "width=800,height=600");
        break;
      default:
        break;
    }
  };

  return (
    <div className=" container flex justify-items-center mt-[73px] place-content-center w-full">
      <div className="flex font-medium lg:pl-[111px] h-[498px] max-md:mt-8">
        <div className="max-w-[668px] lg:mr-[111px] relative">
          <FadeInUpText duration="1.5s">
            <div className="text-title-03 mb-16 max-md:text-heading-02 max-md:mb-12">
              Start your brand&apos;s creative journey with{" "}
              <span className="text-primary-brand">Meeting Sore</span>
            </div>
          </FadeInUpText>
          <div className="">
            <div className="md:flex md:max-lg:mb-12 sm:mb-6">
              <div className="w-full max-md:mb-6">
                <div className="text-subheading-04 max-md:text-caption-01 text-neutral-200 mb-3 max-md:mb-2">
                  EMAIL
                </div>
                <FadeInUpText duration="1.8s">
                  <div className="text-body-04 max-md:text-body-05 font-normal">
                    <Button func={() => openApp("email")}>
                      team@meetingsore.com
                    </Button>
                  </div>
                </FadeInUpText>
              </div>
              <div className="w-full max-md:mb-6">
                <div className="text-subheading-04  max-md:text-caption-01 text-neutral-200 mb-3 max-md:mb-2">
                  WHATSAPP/CALL
                </div>
                <FadeInUpText duration="1.8s">
                  <div className=" text-body-04 font-normal max-md:text-body-05">
                    <Button func={() => openApp("WA")}>
                      +62 821 4651 7946
                    </Button>
                  </div>
                </FadeInUpText>
              </div>
            </div>
            <div className="md:flex mb-16 max-md:mb-12">
              <div className="w-full max-md:mb-6">
                <div className="text-subheading-04 max-md:text-caption-01 text-neutral-200 mb-3 max-md:mb-2">
                  INSTAGRAM
                </div>
                <FadeInUpText duration="2s">
                  <div className="text-body-04 font-normal max-md:text-body-05">
                    <Button func={() => openApp("IG")}>@meetingsore</Button>
                  </div>
                </FadeInUpText>
              </div>
              <div className="w-full max-md:mb-6">
                <div className="text-subheading-04 max-md:text-caption-01 text-neutral-200 mb-3 max-md:mb-2">
                  LINKEDIN
                </div>
                <FadeInUpText duration="2s">
                  <div className="text-body-04 font-normal max-md:text-body-05">
                    <Button func={() => openApp("LI")}>
                      linkedin.com/company/meetingsore
                    </Button>
                  </div>
                </FadeInUpText>
              </div>
            </div>
          </div>
          <div className="absolute md:bottom-0">
            <FadeInUpText duration="2.4s">
              <div className="text-subheading-03 max-md:text-subheading-05 font-medium mb-2">
                PT. Bertemu Sore Hari | Meeting Sore Studio
              </div>
              <div className="text-body-04 max-md:text-caption-01 font-normal text-neutral-200">
                QP Office, Perkantoran Tanjung Mas Raya, Blok B1.44, Jagakarsa,
                Jakarta Selatan - 12530
              </div>
            </FadeInUpText>
          </div>
        </div>
        <div className="max-md:hidden w-[422px] h-[498px]">
          <Image
            style={{
              objectFit: "cover",
              // maxWidth: "422px",
              width: "100%",
              height: "100%",
            }}
            src={image1}
          />
        </div>
      </div>
    </div>
  );
};

export default Contact;

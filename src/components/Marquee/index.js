"use client"
import Image from "next/image";
import client from "../../../public/marqueeContent.jpg";
import { motion } from "framer-motion";
const Marquee = () => {
  //  const marqueeRef = useRef(null);

  //  useEffect(() => {
  //    const marquee = marqueeRef.current;
  //    const childrenCount = marquee.children.length;

  //    // If only one child, clone it multiple times to fill the space
  //    if (childrenCount === 1) {
  //      const cloneCount = 10; // Adjust this number to repeat as many times as you need
  //      for (let i = 0; i < cloneCount; i++) {
  //        const clone = marquee.children[0].cloneNode(true);
  //        marquee.appendChild(clone);
  //      }
  //    }
  //  }, []);

  return (
    <div className="container mb-[154px] mt-[52px]">
      <div className="text-left w-full text-subheading-03 max-md:text-caption-01 font-medium text-neutral-200 mb-6 ">
        TRUSTED BY
      </div>
      <div className="flex overflow-x-hidden">
        <motion.div
          initial={{ x: 0 }}
          animate={{ x: "-100%" }}
          transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
          className="flex flex-shrink-0"
        >
          <Image src={client} alt=""/>
          <Image src={client} alt=""/>
          <Image src={client} alt=""/>
          <Image src={client} alt=""/>
          <Image src={client} alt=""/>
          <Image src={client} alt=""/>
          <Image src={client} alt=""/>
        </motion.div>

        <motion.div
          initial={{ x: 0 }}
          animate={{ x: "-100%" }}
          transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
          className="flex flex-shrink-0"
        >
          <Image src={client} alt=""/>
          <Image src={client} alt=""/>
          <Image src={client} alt=""/>
          <Image src={client} alt=""/>
          <Image src={client} alt=""/>
          <Image src={client} alt=""/>
          <Image src={client} alt=""/>
        </motion.div>
      </div>
    </div>
  );
};

export default Marquee;

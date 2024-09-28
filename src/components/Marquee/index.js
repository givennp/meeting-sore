"use client"
import Image from "next/image";
import { motion } from "framer-motion";
const Marquee = ({data}) => {

  const renderLogos = () => {
    if (!data) return 
      return data.map((val, i) => {
        console.log(val);
        
        return (
          <Image
            key={i}
            width={130}
            height={2}
            src={`${val}`}
            alt=""
          />
        );
      });
  }

  return (
    <div className="container mb-[154px] mt-[52px]">
      <div className="text-left w-full text-subheading-03 max-md:text-caption-01 font-medium text-neutral-200 mb-6 ">
        TRUSTED BY
      </div>
      <div className="flex overflow-x-hidden gap-12">
        <motion.div
          initial={{ x: 0 }}
          animate={{ x: "-100%" }}
          transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
          className="flex flex-shrink-0 gap-12"
        >
          {renderLogos()}
        </motion.div>

        <motion.div
          initial={{ x: 0 }}
          animate={{ x: "-100%" }}
          transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
          className="flex flex-shrink-0 gap-12"
        >
          {renderLogos()}
        </motion.div>
      </div>
    </div>
  );
};

export default Marquee;

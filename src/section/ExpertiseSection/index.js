"use client"
import ExpertiseCard from "@/components/ExpertiseCard";
import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import expertise1 from "../../../public/expertise.png"
import expertise2 from "../../../public/expertisePhoto.png"

const ExpertiseSection = () => {
  const [offset, setOffset] = useState("-60%");
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

   useEffect(() => {
     if (typeof window !== "undefined") {
       const newOffset = window.innerWidth < 1280 ? "-130%" : "-60%";
       setOffset(newOffset);
     }
   }, []);

  const x = useTransform(scrollYProgress, [0, 1], ["1%", offset]);

  return (
    <section
      ref={targetRef}
      id="expertise"
      className="relative md:h-[200vh] container mb-24"
    >
      <div className="md:sticky md:top-[100px] overflow-hidden">
        <div className="text-left w-full text-subheading-03 max-md:text-caption-01 font-medium text-neutral-200 mb-6">
          EXPERTISE
        </div>
        <div className="max-md:hidden">
          <motion.div style={{ x }}>
            <div className="flex items-center justify-center w-max gap-12 overflow-hidden">
              <ExpertiseCard
                number="1"
                title="Social Media Marketing"
                image={expertise1}
              />
              <ExpertiseCard number="2" title="Branding" image={expertise2} />
              <ExpertiseCard number="3" title="Product" image={expertise1} />
            </div>
          </motion.div>
        </div>

        {/* mobile */}
        <div className="max-md:block md:hidden ">
          <div className="items-center flex flex-col w-full justify-center gap-12 overflow-hidden">
            <ExpertiseCard
              number="1"
              title="Social Media Marketing"
              image={expertise1}
            />
            <ExpertiseCard number="2" title="Branding" image={expertise2} />
            <ExpertiseCard number="3" title="Product" image={expertise1} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExpertiseSection;

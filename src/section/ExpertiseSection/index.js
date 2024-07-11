import ExpertiseCard from "@/components/ExpertiseCard";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const ExpertiseSection = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["1%", "-50%"]);

  return (
    <section ref={targetRef} className="relative h-[300vh]">
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        <motion.div style={{ x }}>
          <div className="flex items-center gap-4 overflow-hidden">
            <ExpertiseCard number="1" title="Social Media Marketing" image="" />
            <ExpertiseCard number="2" title="Branding" />
            <ExpertiseCard number="3" title="Product" />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ExpertiseSection;

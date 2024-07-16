import Input from "@/components/Input";
import useIntersectionObserver from "@/hooks/useIntersectionObserver";
import { useState } from "react";

const FormSection = () => {
  const [activeSection, setActiveSection] = useState("");
  useIntersectionObserver("form-section", setActiveSection);

  return (
    <section
      id="form-section"
      className={`${
        activeSection === "form-section" ? "bg-black" : ""
      } section h-[880px] pt-[144px] duration-300`}
    >
      <div className="container flex gap-[120px]">
        <div className="md:text-title-03 font-medium text-neutral-100 w-[533px]">
          <div className="mb-6">
            Don’ t Miss the Opportunity <br />
            of{" "}
            <span className="text-primary-brand">Free Social Media Audit</span>
          </div>
          <div className="text-subheading-03 text-neutral-100">
            Get a comprehensive performance analysis, content review, competitor
            benchmarking, and actionable recommendations.
          </div>
        </div>

        <div className=" w-[794px] h-[452px] text-body-03">
          <div className="text-white">
            Fill out the form to schedule a meeting with our team!
          </div>
          <div className="flex gap-6 justify-between mb-8">
            <Input placeholder="Name" />
            <Input placeholder="Phone Number" />
          </div>
          <Input placeholder="Brand Name" className="mb-8" />
          <Input
            placeholder="Objective"
            className="h-[132px] placeholder:align-text-top"
            textarea
          />
        </div>
      </div>
    </section>
  );
};

export default FormSection;

import Input from "@/components/Input";
import useIntersectionObserver from "@/hooks/useIntersectionObserver";
import { forwardRef, useEffect, useState } from "react";

const FormSection = ({ ref }) => {
  const [activeSection, setActiveSection] = useState("");
  useIntersectionObserver("form-section", setActiveSection);

  return (
    <section
      ref={ref}
      id="form-section"
      className={`${
        activeSection === "form-section" ? "bg-black" : ""
      } section max-md:h-fit min-h-screen pb-[136px] pt-[144px] max-md:pt-[88px] duration-300`}
    >
      <div
        className={`container flex max-md:flex-col gap-[120px] max-md:gap-10`}
      >
        <div className="md:text-title-03 max-md:text-heading-02 font-medium text-neutral-100 w-[533px] max-md:w-full">
          <div
            className={`mb-6 max-md:mb-4 ${
              activeSection === "form-section" ? "" : "text-black"
            }`}
          >
            Don’ t Miss the Opportunity <br />
            of{" "}
            <span className="text-primary-brand">Free Social Media Audit</span>
          </div>
          <div className="text-subheading-03 max-md:text-subheading-05 text-neutral-100">
            Get a comprehensive performance analysis, content review, competitor
            benchmarking, and actionable recommendations.
          </div>
        </div>

        <div className=" w-[794px] max-md:w-full text-body-03 max-md:text-body-05">
          <div
            className={` mb-8 ${
              activeSection === "form-section" ? "text-white" : "text-black"
            }`}
          >
            Fill out the form to schedule a meeting with our team!
          </div>
          <div className="flex max-md:flex-col gap-6 justify-between mb-8">
            <Input placeholder="Name" />
            <Input placeholder="Phone Number" />
          </div>
          <Input placeholder="Brand Name" className="mb-8" />
          <Input
            placeholder="Objective"
            className="h-[132px] placeholder:align-text-top mb-10"
            textarea
          />
          <div className="flex w-full items-end justify-end">
            <div className="bg-white w-fit py-2 px-4 rounded-full hover:bg-primary-brand hover:text-black hover:cursor-pointer duration-200">
              SUBMIT
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FormSection;

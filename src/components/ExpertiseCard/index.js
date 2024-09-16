import Image from "next/image";
import expertiseImage from "../../../public/expertise.png";

const ExpertiseCard = ({number, title, image}) => {
  return (
    <div className="relative h-[523px] w-[643px] max-md:h-[293px] max-md:w-full overflow-hidden ">
      {/* Text content */}
      <div className="relative z-10 flex gap-3 items-start">
        <div className="border rounded-full p-3 md:mt-8 mt-2 border-primary-brand text-primary-brand w-6 h-6 flex items-center justify-center">
          {number}
        </div>
        <div className="text-title-01 max-md:text-heading-01 text-neutral-300 font-medium">
          {title}
        </div>
      </div>

      {/* Image */}
      <Image
        src={image}
        alt="Expertise Image"
        className="absolute w-[420px] h-[420px] max-md:w-[236px] max-md:h-[236px] right-0 bottom-0 object-cover"
      />
    </div>
  );
};

export default ExpertiseCard;

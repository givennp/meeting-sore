import Link from "next/link";
import "./button.css";
import { useState } from "react";

const RoundedButton = ({ link = "", children, func }) => {
  const [isActive, setIsActive] = useState(false);

  const handleClick = (e) => {
      setIsActive(() => !isActive);
      if (func) {
        func(e);
      }
    
  };

  return (
    <>
      <div
        onClick={handleClick}
        data-replace={children}
        id="rounded-button"
        className={`border border-black rounded-3xl
          ${isActive ? "active" : ""}`}
      >
        <span className="text-black">{children}</span>
      </div>
    </>
  );
};

export default RoundedButton;

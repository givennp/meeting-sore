import Link from "next/link";
import "./button.css";
import { useState } from "react";

const RoundedButton = ({ isActive, children, onClick }) => {

  return (
    <>
      <div
        onClick={onClick}
        data-replace={children}
        id="rounded-button"
        className={`border w-max border-black rounded-3xl max-md:text-caption-01
          ${isActive ? "active" : ""}`}
      >
        <span className="text-black">{children}</span>
      </div>
    </>
  );
};

export default RoundedButton;

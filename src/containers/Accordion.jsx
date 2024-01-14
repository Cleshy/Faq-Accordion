import React, { useState } from "react";
import iconPlus from "../assets/images/icon-plus.svg";
import iconMinus from "../assets/images/icon-minus.svg";

export default function Accordion({ heading, description }) {
  const [isActive, setIsActive] = useState(false);

  const toggle = () => {
    setIsActive(!isActive);
  };

  const renderIcon = () => {
    if (isActive) {
      return <img className="w-7.5 h-7.5" src={iconMinus} alt="#" />;
    } else {
      return <img className="w-7.5 h-7.5" src={iconPlus} alt="#" />;
    }
  };

  return (
    <div className="py-5 border-b-[1px] last:border-b-0">
      <div
        onClick={toggle}
        className="flex items-center justify-between gap-6 cursor-pointer"
      >
        <h3 className="text-base font-semibold hover:text-pink cursor-pointer">
          {heading}
        </h3>
        {renderIcon()}
      </div>
      <div>
        {isActive && (
          <p className="pt-6 text-sm leading-normal text-grayish-purple">
            {description}
          </p>
        )}
      </div>
    </div>
  );
}

import React from "react";
import iconPlus from "../assets/images/icon-plus.svg";
import iconMinus from "../assets/images/icon-minus.svg";

export default function Accordion({ heading, description, status }) {
  const renderDescription = () => {
    if (description) {
      return (
        <p className="pt-6 text-sm leading-normal text-grayish-purple">
          {description}
        </p>
      );
    }
  };

  const renderIcon = () => {
    if (status) {
      return <img className="w-7.5 h-7.5" src={iconMinus} alt="#" />;
    } else {
      return <img className="w-7.5 h-7.5" src={iconPlus} alt="#" />;
    }
  };

  return (
    <div className="py-5 border-b-[1px] last:border-b-0">
      <div className="flex items-center justify-between gap-6">
        <h3 className="text-base font-semibold hover:text-pink cursor-pointer">
          {heading}
        </h3>
        {renderIcon()}
      </div>
      <div>
        {renderDescription()}
        {/* <p className="pt-6 text-sm text-grayish-purple">{description}</p> */}
      </div>
    </div>
  );
}

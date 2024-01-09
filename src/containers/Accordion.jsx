import React, { useState } from "react";
import iconPlus from "../assets/images/icon-plus.svg";
import iconMinus from "../assets/images/icon-minus.svg";

export default function Accordion({ heading, description }) {
  return (
    <div className="py-5 border-b-[1px] last:border-b-0">
      <div className="flex justify-between gap-6">
        <h3 className="text-base font-semibold hover:text-pink cursor-pointer">
          {heading}
        </h3>
        <img
          className="w-7.5"
          src={iconPlus}
          alt="#"
          onClick={() => console.log(1)}
        />
      </div>
      <div>
        <p className="pt-6 text-sm text-grayish-purple">{description}</p>
      </div>
    </div>
  );
}

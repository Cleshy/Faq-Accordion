import React from "react";
import "./Card.css";
import iconStar from "../assets/images/icon-star.svg";

export default function Card({ children }) {
  return (
    <div className="card-shadow mx-6 bg-white p-6 rounded-[8px] max-w-[600px]">
      <div className="flex items-center gap-6">
        <img className="w-6" src={iconStar} alt="" />
        <h2 className="font-bold text-3.5 leading-normal">FAQs</h2>
      </div>
      {children}
    </div>
  );
}

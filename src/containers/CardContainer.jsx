import React from "react";
import "./CardContainer.css";

export default function CardContainer({ children }) {
  return (
    <div className="card-container card-shadow relative z-10">{children}</div>
  );
}

import React, { useState } from "react";
import Card from "./Card";
import Accordion from "./Accordion";
import CardContainer from "./CardContainer";
import bgSvg from "../assets/images/bg-desktop.svg";
import "./App.css";
import { accordionData } from "../accordionData";

function App() {
  return (
    <div>
      <img className="absolute w-screen z-0" src={bgSvg} alt="" />
      <CardContainer>
        <Card>
          {accordionData.map((data, index) => {
            return (
              <Accordion
                key={index}
                heading={data.heading}
                description={data.description}
              />
            );
          })}
        </Card>
      </CardContainer>
    </div>
  );
}

export default App;

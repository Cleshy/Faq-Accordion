import React from "react";
import Card from "./Card";
import Accordion from "./Accordion";
import CardContainer from "./CardContainer";
import "./App.css";
import { accordionData } from "../accordionData";

function App() {
  return (
    <main>
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
    </main>
  );
}

export default App;

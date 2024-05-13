import React from "react";
import Card from "./Card";

const Countdown = () => {
  return (
    <>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-between", 
        }}
      >
      
        <div style={{ flex: "1 0 25%", minWidth: "300px" }}> 
          <Card type={"Days"} />
        </div>
        <div style={{ flex: "1 0 25%", minWidth: "300px" }}>
          <Card type={"Hours"}/>
        </div>
        <div style={{ flex: "1 0 25%", minWidth: "300px" }}>
          <Card type={"Minutes"} />
        </div>
        <div style={{ flex: "1 0 25%", minWidth: "300px" }}>
          <Card  type={"Seconds"}/>
        </div>
      </div>
    </>
  );
};

export default Countdown;

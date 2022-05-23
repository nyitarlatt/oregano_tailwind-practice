import React from "react";
import Headbar from "./HeadBar";
import FooterBar from "./FooterBar";

const About = () => {
  return (
    <div>
      <div className="container">
        <Headbar text="WHO ARE WE" color="Dark" />
        <FooterBar color="Dark" />
      </div>
    </div>
  );
};

export default About;

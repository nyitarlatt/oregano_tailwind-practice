import React from "react";

import "../dist/output.css";
import Headbar from "./HeadBar";

import FooterBar from "./FooterBar";

const Home = () => {
  let color = "Light";
  return (
    <div
      id="home"
      className="relative flex flex-col h-auto min-h-screen md:flex-row"
    >
      <div className="w-1/2 h-5 bg-oreDark h-screen absolute top-0 left-0 z-0"></div>
      <div className="w-1/2 h-5 bg-oreLight h-screen absolute top-0 right-0 z-0"></div>
      <div className="container z-10 mx-auto flex flex-col justify-between h-auto min-h-screen">
        <Headbar text="LET'S GET STARTED" color="Light" />
        <div className="flex justify-center font-opensans font-black text-4xl md:text-5xl lg:text:6xl xl:text-7xl ">
          <span className="text-oreLight">
            Immediat <br />
            falling int
            <br />
          </span>
          <span className="text-oreDark">
            ely regret <br />o bathtub
          </span>
        </div>
        <FooterBar color="Light" />
      </div>
    </div>
  );
};

export default Home;

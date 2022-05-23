import React from "react";

import "../dist/output.css";
import Headbar from "./HeadBar";

import FooterBar from "./FooterBar";

const Home = () => {
  let color = "Light";
  return (
    <div id="home" className="relative flex  h-auto min-h-screen ">
      <div className="w-1/2 bg-oreDark h-screen absolute top-0 left-0 z-0"></div>
      <div className="w-1/2 bg-oreLight h-screen absolute top-0 right-0 z-0"></div>
      <div className="container z-10 mx-auto flex flex-col justify-center h-auto min-h-screen">
        <Headbar />
        <div className="flex justify-center font-opensans font-black text-4xl md:text-5xl lg:text:6xl xl:text-7xl m-0 md:mb-40">
          <span className="text-oreLight">
            Immediat
            <br />
            falling int
            <br />
          </span>
          <span className="text-oreDark">
            ely regret
            <br />o bathtub
          </span>
        </div>
        <FooterBar />
      </div>
    </div>
  );
};

export default Home;

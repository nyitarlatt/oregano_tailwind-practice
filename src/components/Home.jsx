import React, { useContext } from "react";

import "../dist/output.css";
import Headbar from "./HeadBar";

import FooterBar from "./FooterBar";

import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { MyContext } from "../context";

const Home = () => {
  const context = useContext(MyContext);

  return (
    <section id="home" className="relative flex  h-auto min-h-screen ">
      <div className="w-1/2 bg-oreDark h-screen absolute top-0 left-0 z-0"></div>
      <div className="w-1/2 bg-oreLight h-screen absolute top-0 right-0 z-0"></div>
      <div className="h-screen w-10 z-30 fixed right-0 top-0 flex flex-col justify-between items-end py-20 pr-1 md:pr-40">
        <div>
          <ArrowDropUpIcon
            onClick={context.scrollUp}
            sx={{ fontSize: "160px" }}
            className={`${
              context.state.active === "About" ||
              context.state.active === "Contact"
                ? "text-oreLight"
                : "text-oreDark"
            }`}
          />
        </div>
        <div>
          <ArrowDropDownIcon
            onClick={context.scrollDown}
            sx={{ fontSize: "160px" }}
            className={`${
              context.state.active === "About" ||
              context.state.active === "Contact"
                ? "text-oreLight"
                : "text-oreDark"
            }`}
          />
        </div>
      </div>
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
    </section>
  );
};

export default Home;

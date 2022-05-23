import React, { useContext } from "react";
import { MyContext } from "../context";

import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";

const FooterBar = () => {
  const context = useContext(MyContext);

  return (
    <div className="flex items-center justify-between px-2 pb-8 lg:px-40 fixed w-full bottom-0 bg-black left-0">
      <div
        className={`flex space-x-3 text-sm md:space-x-16 text-merrieather md:text-lg text-oreLight`}
      >
        <div onClick={context.setActive} className="relative ">
          <a href="#about" className={`linnks hover:text-white z-10 About`}>
            About
          </a>
          <div
            className={`markedpage absolute border-t-4 border-oreLight w-14 top-3 left-1 z-0 -rotate-45 hidden`}
          ></div>
        </div>
        <div onClick={context.setActive} className="relative ">
          <a href="#product" className={`linnks hover:text-white z-10 Product`}>
            Product
          </a>
          <div
            className={`markedpage absolute border-t-4 border-oreLight w-14 top-3 left-1 z-0 -rotate-45 hidden`}
          ></div>
        </div>
        <div onClick={context.setActive} className="relative ">
          <a href="#contact" className={`linnks hover:text-white z-10 Contact`}>
            Contact
          </a>
          <div
            className={`markedpage absolute border-t-4 border-oreLight w-14 top-3 left-1 z-0 -rotate-45 hidden`}
          ></div>
        </div>
      </div>
      <div className="flex space-x-3 md:space-x-8">
        <a
          href="#"
          className={`p-1 text-oreDark border-oreDark border-2 rounded-full hover:bg-oreDark hover:text-oreLight flex justify-center items-center`}
        >
          <TwitterIcon />
        </a>
        <a
          href="#"
          className={`p-1 text-oreDark border-oreDark border-2 rounded-full hover:bg-oreDark hover:text-oreLight flex justify-center items-center`}
        >
          <LinkedInIcon />
        </a>
        <a
          href="#"
          className={`p-1 text-oreDark border-oreDark border-2 rounded-full hover:bg-oreDark hover:text-oreLight flex justify-center items-center`}
        >
          <GitHubIcon />
        </a>
      </div>
    </div>
  );
};

export default FooterBar;

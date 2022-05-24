import React, { useContext } from "react";
import { MyContext } from "../context";

import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";

const FooterBar = () => {
  const context = useContext(MyContext);

  return (
    <div className="flex items-center justify-between px-2 pb-8 lg:px-40 fixed w-full bottom-0 left-0 z-10">
      <div
        className={`flex space-x-3 text-sm md:space-x-16 text-merrieather md:text-lg ${
          context.state.active === "About" || context.state.active === "Contact"
            ? "text-oreDark"
            : "text-oreLight"
        }`}
      >
        <div onClick={context.setActive} className="relative ">
          <a href="#about" className={`linnks hover:text-black z-10 About`}>
            About
          </a>
          <div
            className={`markedpage absolute border-t-4 border-oreDark w-14 top-3 left-1 z-0 -rotate-45 hidden`}
          ></div>
        </div>
        <div onClick={context.setActive} className="relative ">
          <a
            href="#products"
            className={`linnks hover:text-white z-10 Products`}
          >
            Products
          </a>
          <div
            className={`markedpage absolute border-t-4 border-oreLight w-14 top-3 left-1 z-0 -rotate-45 hidden`}
          ></div>
        </div>
        <div onClick={context.setActive} className="relative ">
          <a href="#contact" className={`linnks hover:text-black z-10 Contact`}>
            Contact
          </a>
          <div
            className={`markedpage absolute border-t-4 border-oreDark w-14 top-3 left-1 z-0 -rotate-45 hidden`}
          ></div>
        </div>
      </div>
      <div className="flex space-x-3 md:space-x-8">
        <a
          href="https://twitter.com/nyitarlatt1"
          target={"_"}
          className={`p-1 ${
            context.state.active === "About" ||
            context.state.active === "Contact"
              ? "text-oreLight"
              : "text-oreDark"
          } ${
            context.state.active === "About" ||
            context.state.active === "Contact"
              ? "border-oreLight"
              : "border-oreDark"
          } border-2 rounded-full ${
            context.state.active === "About" ||
            context.state.active === "Contact"
              ? "hover:bg-oreLight"
              : "hover:bg-oreDark"
          } ${
            context.state.active === "About" ||
            context.state.active === "Contact"
              ? "hover:text-oreDark"
              : "hover:text-oreLight"
          } flex justify-center items-center`}
        >
          <TwitterIcon />
        </a>
        <a
          href="https://www.linkedin.com/in/nyi-tar-latt-290638226/"
          target={"_"}
          className={`p-1 ${
            context.state.active === "About" ||
            context.state.active === "Contact"
              ? "text-oreLight"
              : "text-oreDark"
          } ${
            context.state.active === "About" ||
            context.state.active === "Contact"
              ? "border-oreLight"
              : "border-oreDark"
          } border-2 rounded-full ${
            context.state.active === "About" ||
            context.state.active === "Contact"
              ? "hover:bg-oreLight"
              : "hover:bg-oreDark"
          } ${
            context.state.active === "About" ||
            context.state.active === "Contact"
              ? "hover:text-oreDark"
              : "hover:text-oreLight"
          } flex justify-center items-center`}
        >
          <LinkedInIcon />
        </a>
        <a
          href="https://github.com/nyitarlatt"
          target={"_"}
          className={`p-1 ${
            context.state.active === "About" ||
            context.state.active === "Contact"
              ? "text-oreLight"
              : "text-oreDark"
          } ${
            context.state.active === "About" ||
            context.state.active === "Contact"
              ? "border-oreLight"
              : "border-oreDark"
          } border-2 rounded-full ${
            context.state.active === "About" ||
            context.state.active === "Contact"
              ? "hover:bg-oreLight"
              : "hover:bg-oreDark"
          } ${
            context.state.active === "About" ||
            context.state.active === "Contact"
              ? "hover:text-oreDark"
              : "hover:text-oreLight"
          } flex justify-center items-center`}
        >
          <GitHubIcon />
        </a>
      </div>
    </div>
  );
};

export default FooterBar;

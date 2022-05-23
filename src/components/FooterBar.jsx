import React from "react";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";

const FooterBar = ({ color }) => {
  const color1 = color === "Light" ? "Dark" : "Light";

  const handleClick = (e) => {
    document.querySelectorAll(".markedpage").forEach((el) => {
      el.classList.add("hidden");
    });
    e.target.nextSibling.classList.remove("hidden");
  };

  return (
    <div className="flex items-center justify-between pb-8 lg:px-40 ">
      <div
        className={`flex space-x-6 md:space-x-20 text-merrieather text-lg text-ore${color}`}
      >
        <div onClick={handleClick} className="relative ">
          <a href="#" className="hover:text-white z-10">
            About
          </a>
          <div
            className={`markedpage absolute border-t-4 border-ore${color} w-14 top-3 left-1 z-0 -rotate-45 hidden`}
          ></div>
        </div>
        <div onClick={handleClick} className="relative ">
          <a href="#" className="hover:text-white z-10">
            Product
          </a>
          <div
            className={`markedpage absolute border-t-4 border-ore${color} w-14 top-3 left-1 z-0 -rotate-45 hidden`}
          ></div>
        </div>
        <div onClick={handleClick} className="relative ">
          <a href="#" className="hover:text-white z-10">
            Contact
          </a>
          <div
            className={`markedpage absolute border-t-4 border-ore${color} w-14 top-3 left-1 z-0 -rotate-45 hidden`}
          ></div>
        </div>
      </div>
      <div className="flex space-x-3 md:space-x-8">
        <a
          href="#"
          className={`p-1 border-ore${color1} border-2 rounded-full hover:bg-ore${color1} hover:text-white flex justify-center items-center`}
        >
          <TwitterIcon />
        </a>
        <a
          href="#"
          className={`p-1 border-ore${color1} border-2 rounded-full hover:bg-ore${color1} hover:text-white flex justify-center items-center`}
        >
          <LinkedInIcon />
        </a>
        <a
          href="#"
          className={`p-1 border-ore${color1} border-2 rounded-full hover:bg-ore${color1} hover:text-white flex justify-center items-center`}
        >
          <GitHubIcon />
        </a>
      </div>
    </div>
  );
};

export default FooterBar;

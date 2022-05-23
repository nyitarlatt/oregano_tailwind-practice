import React from "react";

const Headbar = ({ text, color }) => {
  const color1 = color === "Light" ? "Dark" : "Light";
  return (
    <div className="flex items-center justify-between pt-8  lg:px-40 ">
      <a
        href="/#home"
        className={`text-3xl font-lato text-ore${color} cursor-pointer`}
      >
        <span className="-mr-0.5">O</span>
        <span className="font-black">
          <i>regano</i>
        </span>
      </a>
      <div className={`font-merriweather text-ore${color1}`}>{text}</div>
    </div>
  );
};

export default Headbar;

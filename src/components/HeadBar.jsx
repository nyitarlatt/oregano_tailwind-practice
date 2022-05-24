import React, { useContext } from "react";
import { MyContext } from "../context";

const Headbar = () => {
  const context = useContext(MyContext);

  return (
    <div className="flex items-center justify-between px-2 pt-8 lg:px-40 fixed w-full top-0 left-0 ">
      <a
        onClick={() => context.setActive(false)}
        href="/#home"
        className={`text-3xl font-lato  ${
          context.state.active === "About" || context.state.active === "Contact"
            ? "text-oreDark"
            : "text-oreLight"
        } cursor-pointer z-20 w-30`}
      >
        <span className="-mr-0.5">O</span>
        <span className="font-black">
          <i>regano</i>
        </span>
      </a>

      <div
        className={`font-merriweather  ${
          context.state.active === "About" || context.state.active === "Contact"
            ? "text-oreLight"
            : "text-oreDark"
        } z-20 w-30`}
      >
        LET'S GET STARTED
      </div>
    </div>
  );
};

export default Headbar;

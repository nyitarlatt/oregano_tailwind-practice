import React from "react";
import { send } from "../assets";

const Contact = () => {
  return (
    <section
      id="contact"
      className="relative flex  h-auto min-h-screen fullpagescroll z-0"
    >
      <div className="w-1/2 bg-oreLight h-screen absolute top-0 left-0 z-0"></div>
      <div id="bg" className="w-1/2 h-screen absolute top-0 right-0 z-0"></div>
      <div className="container mx-auto px-2 lg:px-48 h-screen z-10 flex items-center font-opensans">
        <div className="flex flex-col space-y-8 w-96 px-8">
          <input
            placeholder="Name"
            className="w-full h-10 md:h-12 rounded-full bg-oreDark py-2 px-4 caret-oreLight text-oreLight focus:outline-none"
            type="text"
          />
          <input
            placeholder="Email"
            className="w-full h-10 md:h-12 rounded-full bg-oreDark py-2 px-4 caret-oreLight text-oreLight focus:outline-none"
            type="text"
          />
          <input
            placeholder="Number"
            className="w-full h-10 md:h-12 rounded-full bg-oreDark py-2 px-4 caret-oreLight text-oreLight focus:outline-none"
            type="number"
          />
          <textarea
            placeholder="Message"
            className="w-full h-20 rounded-xl resize-none bg-oreDark py-2 px-4 caret-oreLight text-oreLight focus:outline-none"
          ></textarea>
          <div className="w-full flex bg-oreLight h-10 md:h-12 rounded-full items-center justify-center space-x-4 border-2 border-oreDark hover:bg-white cursor-pointer">
            <div>Submit</div>
            <div>
              <img src={send} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

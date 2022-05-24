import React from "react";

const Products = () => {
  return (
    <section
      id="products"
      className="h-auto min-h-screen relative fullpagescroll"
    >
      <div className="w-1/2 bg-oreDark h-screen absolute top-0 left-0 -z-10"></div>
      <div className="w-1/2 bg-oreLight h-screen absolute top-0 right-0 -z-10"></div>
      <div className="z-10 mx-auto flex flex-col justify-center h-auto min-h-screen space-y-8 px-2 lg:px-40 text-opensans text-oreLight">
        <h1 className="text-6xl font-black ">Study case</h1>
        <p className="tracking-wider">
          Run in circles show belly,
          <br />
          lick paws then retire to the
          <br /> warmest spot on the <br /> couch to claw at the <br /> fabric.
        </p>
        <div className="flex items-center space-x-4">
          <div className="w-10 h-px bg-white"></div>
          <h3 className="font-bold">FULL SIZE</h3>
        </div>
      </div>
    </section>
  );
};

export default Products;

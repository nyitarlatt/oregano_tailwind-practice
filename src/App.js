import React from "react";

import { Home, About, Products, Contact } from "./components";

import "./dist/output.css";

const App = () => {
  return (
    <div className="App">
      <Home />
      <About />
      <Products />
      <Contact />
    </div>
  );
};

export default App;

import React, { useContext, useEffect } from "react";
import { MyContext } from "./context";

import { Home, About, Products, Contact } from "./components";

import "./dist/output.css";
import "./app.css";

const App = () => {
  const context = useContext(MyContext);

  useEffect(() => {
    document
      .querySelectorAll(".linnks")
      .forEach((el) => el.nextSibling.classList.add("hidden"));

    context.state.active &&
      document
        .querySelectorAll(`.${context.state.active}`)
        .forEach((el) => el.nextSibling.classList.remove("hidden"));
  }, [context.state.active]);

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

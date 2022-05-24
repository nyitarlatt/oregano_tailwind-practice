import React, { Component } from "react";

const MyContext = React.createContext();

class MyProvider extends Component {
  state = {
    active: "",
  };

  scrollUp = () => {
    if (window.location.hash === "" || window.location.hash === "#home") return;
    if (window.location.hash === "#about") {
      window.location.hash = "#home";
      this.setState({ ...this.state, active: "" });
    }
    if (window.location.hash === "#products") {
      window.location.hash = "#about";
      this.setState({ ...this.state, active: "About" });
    }
    if (window.location.hash === "#contact") {
      window.location.hash = "#products";
      this.setState({ ...this.state, active: "Products" });
    }
  };

  scrollDown = () => {
    if (window.location.hash === "#contact") return;
    if (window.location.hash === "#products") {
      window.location.hash = "#contact";
      this.setState({ ...this.state, active: "Contact" });
    }
    if (window.location.hash === "#about") {
      window.location.hash = "#products";
      this.setState({ ...this.state, active: "Products" });
    }
    if (window.location.hash === "#home" || window.location.hash === "") {
      window.location.hash = "#about";
      this.setState({ ...this.state, active: "About" });
    }
  };

  setActive = (e) => {
    if (e) {
      if (e.target.classList.contains("relative")) return;
      this.setState({
        ...this.state,
        active: e.target.innerHTML,
      });
    } else {
      this.setState({ ...this.state, active: false });
    }
    console.log(this.state.active);
  };

  render() {
    return (
      <MyContext.Provider
        value={{
          state: this.state,
          setActive: this.setActive,
          scrollUp: this.scrollUp,
          scrollDown: this.scrollDown,
        }}
      >
        {this.props.children}
      </MyContext.Provider>
    );
  }
}

export { MyContext, MyProvider };

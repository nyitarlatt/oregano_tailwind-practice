import React, { Component } from "react";

const MyContext = React.createContext();

class MyProvider extends Component {
  state = {
    active: "",
  };

  setActive = (e) => {
    if (e) {
      if (e.target.classList.contains("relative")) return;
      this.setState({ ...this.state, active: e.target.innerHTML });
    } else {
      this.setState({ ...this.state, active: false });
    }
  };

  render() {
    return (
      <MyContext.Provider
        value={{
          state: this.state,
          setActive: this.setActive,
        }}
      >
        {this.props.children}
      </MyContext.Provider>
    );
  }
}

export { MyContext, MyProvider };

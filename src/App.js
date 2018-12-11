import React, { Component } from "react";

import Wrapper from "./Components/Wrapper";
import LoginCard from "./Components/LoginCard";
import Login from "./Pages/Login";

class App extends Component {
  render() {
    return (
      <Wrapper>
        <Login />
      </Wrapper>
    );
  }
}

export default App;

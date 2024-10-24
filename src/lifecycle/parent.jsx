import { Component } from "react";
import Mount from "./mounting";
import MyComponent from "./unmounting";

class Parent extends Component {
  constructor() {
    super();

    this.state = {
      bool: true,
    };
  }

  memm = () => {
    this.setState({
      bool: !this.state.bool,
    });
  };

  render() {
    return (
      <>
        <h1>hello this is parent</h1>

        <button onClick={this.memm}>click eme</button>
        {this.state.bool ? <Mount /> : <MyComponent />}
      </>
    );
  }
}

export default Parent;

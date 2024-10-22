import { Component } from "react";

class Hell extends Component {
  state = {
    count: 0,
  };

  mem() {
    this.setState();
  }

  render() {
    return (
      <>
        {this.state.count}

        <h1>{this.mem()}</h1>
      </>
    );
  }
}

export default Hell;

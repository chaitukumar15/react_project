
import { Component } from "react";

class MyComponent extends Component {
    constructor(props) {
      super(props);
      this.state = {
        count: 0,
      };
      this.intervalId = null; // Store the interval ID
    }
  
    componentDidMount() {
      this.intervalId = setInterval(() => {
        this.setState((prevState) => ({ count: prevState.count + 1 }));
      }, 1000);
    }
  
    componentWillUnmount() {
      clearInterval(this.intervalId); // Clear the interval
    }
  
    render() {


      return <>
      {console.log(this.state.count)
      }
      <div>{this.state.count}</div>
      </>;
    }
  }

  export default MyComponent
  
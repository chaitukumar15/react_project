import { Component } from "react";

class Mount extends Component {
  constructor(props) {
    super(props);

    this.state = {
      c: 0,
    };
  }

  //   shouldComponentUpdate(np,ns){

  //     console.log(np,ns);

  //     if(ns.c==5){
  // return true
  //     }else{
  //         return false
  //     }

  //   }

  //   static getDerivedStateFromProps(np, ns) {
  //     console.log(np, ns);

  //     if (np.count != ns.c) {
  //       return {
  //         c: 4,
  //       };
  //     } else {
  //       return null;
  //     }
  //   }

  increment = () => {
    this.setState({
      c: this.state.c + 1,
    });
  };

  componentWillUnmount() {
    console.log("mounting");
  }

  render() {
    return (
      <>
        {console.log(this.state)}

        <h1>hello this mounting </h1>

        <button onClick={this.increment}>{this.state.c}</button>
      </>
    );
  }
}

export default Mount;

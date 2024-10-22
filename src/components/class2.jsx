

import { Component } from "react";

import s from "./class.module.css";


class Hell2 extends Component {
constructor(props){
super(props);

}

  render() {
    return (
      <>
  {    console.log(this.props)}
      
<h1>second</h1>


      </>
    );
  }
}

export default Hell2;

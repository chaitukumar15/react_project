import { Component, createRef } from "react";



class Uncon extends Component{

constructor(props){

    super(props);

  this.g=createRef();
  this.g1=createRef();
}


sub=(event)=>{
    event.preventDefault();

console.log(this.g.current.value);
console.log(this.g1.current.value);

}


render(){




return(

    <>
    
    <h1>uncontrolled</h1>


    <form action="" onSubmit={this.sub}>

<input type="text"   ref={this.g} />

<input type="text"   ref={this.g1} />
<input type="submit" value="sumbit"  />
    </form>
    
    </>
)

}

}

export default Uncon
import { Component } from "react";





class H1 extends Component{

// initial state

    constructor(props){
        super(props);

       this.state={
            a:0
        }

   this.mem=this.mem.bind(this)
    }


mem(){


    this.setState({

        a:this.state.a+1
    })

}
    


    render(){

        console.log(this.state.a);
        

        return(

            <>
            
        <h1>counter</h1>

        <button onClick={this.mem}>count {this.state.a}</button>
            
            </>
        )
    }

}

export default H1;
import { Component } from "react";

import H1 from "./class1";

var a=10;

class H2 extends Component{


    render(){


        return(

            <>
            
            <h1>hello i m component</h1>

        
            
            </>
        )
    }

}



class H extends Component{


    render(){


        return(

            <>
            
            <h1>hello parent</h1>

           <H1> 

           <H2/>
           </H1>
            
            </>
        )
    }

}


export default H;



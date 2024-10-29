import { Component } from "react";



class Todo extends Component{

    constructor(){

        super();

        this.state={
            data:[],
            valuee:""
        }
    }

    sta=(event)=>{
event.preventDefault();
this.setState({
    
    data:[...this.state.data,this.state.valuee],
    valuee:""
})

    }

    sc=(event)=>{

        this.setState({
            ...this.state,
            valuee:event.target.value
        })

    }

    hhh=(value)=>{

       var h= this.state.data.filter((val,ind)=>{
            
            return val != value

        })

        console.log(h);
        
        this.setState({
            ...this.state,
            data:h
        })


    }

    jjj=(valalue,index)=>{

        var aa=prompt("edit the " +valalue);
console.log(index);


       this.state.data.splice(index,1,aa)
        console.log(this.state.data);

        this.setState({
            ...this.state,
            data:this.state.data
        })
        
    }

    render(){


        var f = this.state.data.map((val,ind)=>{
                  

            return(
                <li key={ind}>{val}
                <button onClick={()=>{
                    this.hhh(val)
                }}>delete </button>
                     <button onClick={()=>{
                    this.jjj(val,ind)
                }}>edit </button>
                </li> 
            )

        })

        return(
            <>
            {console.log(this.state)
            }
    
            <h1>
                todolist 
            </h1>
        
        <form action=""  onSubmit={this.sta}>
        
            <input type="text" onChange={this.sc} value={this.state.valuee} />
            <input type="submit" value="add" />
        </form>
        
        <ul>

            {f}
        </ul>
        
            </>
        )
    }
}



export default Todo
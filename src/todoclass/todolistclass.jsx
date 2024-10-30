import { Component } from "react";

class Todo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: "",
      list: [],
    };
  }

  sub = (event) => {
    event.preventDefault();

    this.setState({
      list: [...this.state.list, this.state.data],
    });
  };


del=(value)=>{

   var o= this.state.list.filter((val,ind)=>{

     
               return value!=val
    })
    console.log(o);
    
    this.setState({
        list:o
    })


}


edi=(values,ind)=>{

    var p=prompt("cahnge" + values)

this.state.list.splice(ind,1,p)

this.setState(
    {
        list:this.state.list
    }
)



}

  userdata = (e) => {
    this.setState({
      data: e.target.value,
    });
  };

  render() {
    var hj = this.state.list.map((val, ind) => {
      return (
        <div key={ind}>
          <li key={ind}>
            {val}
            <button onClick={()=>{
                this.del(val)
            }}>delete</button>
            <button  onClick={()=>{
                this.edi(val,ind)
            }}>edit</button>
          </li>
        </div>
      );
    });

    return (
      <>
        <h1>Todo List</h1>
        <form action="" onSubmit={this.sub}>
          <input type="text" name="user" onChange={this.userdata} />
          <input type="submit" value="add" />
        </form>

        <ul>{hj}</ul>
      </>
    );
  }
}
export default Todo;

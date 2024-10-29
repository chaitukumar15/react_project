import { Component } from "react";

class Todolist extends Component {
  constructor(props) {
    super(props);

    this.state = {


        data:"",
        listt:[]
    };
  }


dat=(event)=>{

    this.setState({
        data:event.target.value
    })


}

  subm=(event)=>{
    event.preventDefault();
    this.setState({
        listt:[...this.state.listt,this.state.data]
    })

  }

  render() {
    return (
      <>
        {console.log(this.state.data)}

        <h1>todolist components </h1>

        <form action="" onSubmit={this.subm}>

            <input type="text"  name="data" onChange={this.dat}/>
            <input type="submit" value="submit" />
        </form>
      </>
    );
  }
}

export default Todolist;

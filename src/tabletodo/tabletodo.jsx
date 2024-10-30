import { Component } from "react";

class Tabletodo extends Component {
  constructor() {
    super();

    this.state = {
      data: [],
    };
  }



  use=(event)=>{


    this.setState({

        [event.target.name]:event.target.value
    })

  }


  del=(value,index)=>{

    var o=this.state.data.filter((val,ind)=>{

        return value.user!=val.user;
    })
console.log(o);


this.setState({

    data:o
})
  }


  edi=(value,index)=>{

    var {user,pass}=value;

    var puser=prompt("enet username for edit  "+ user);
    var p2=prompt("enet password for edit  "+ pass);

  var obj1={
    user:puser,
    pass:p2
  }

  this.state.data.splice(index,1,obj1)

  console.log(this.state.data);

  this.setState({
    data:this.state.data
  })
  

  }


  sub=(event)=>{
    event.preventDefault();
    var obj={
        user:this.state.username,
        pass:this.state.password
    }


    this.setState({

        data:[obj,...this.state.data]
    })

  }
  render(){

  var dis=this.state.data.map((val,ind)=>{


          return(
       <tr key={ind}>
        <td>{val.user}</td>
        <td>{val.pass}</td>
        <td><button onClick={()=>{
            this.del(val,ind)
        }}>delete</button></td>
        <td><button  onClick={()=>{
            this.edi(val,ind)
        }}>edit</button></td>
       </tr>
          )
  })


    return (

        <>
        <h1>table todo </h1>
{console.log(this.state)
}

        <form action="" onSubmit={this.sub}>

<input type="text" name="username"  onChange={this.use}/>
<input type="text" name="password"  onChange={this.use}/>
<input type="submit" value="submit" />



        </form>
<table>
<tr>
    <td>username</td>
    <td>password</td>
</tr>
    {dis}
</table>

        </>
    )
  }
}

export default Tabletodo
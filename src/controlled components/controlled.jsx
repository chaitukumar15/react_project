import { Component } from "react";
import "./control.css";
class Contrll extends Component {
  constructor(props) {
    super(props);

    this.state = {
      obj: [],
    };
  }

  chn = (event) => {
    console.log(event.target.value);
    console.log(event.target.name);

    // var { name, value } = event.target;
    // var h=event.target.name;

    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  sub = (event) => {
    event.preventDefault();

    var u = {
      username: this.state.data,
      password: this.state.pass,
    };

    this.setState({
      obj: [...this.state.obj, u],
    });
  };

  render() {
    var o = this.state.obj.map((val, ind) => {
      return (
        <>
          <tr key={ind}>
            <td>{val.username}</td>
            <td>{val.password}</td>
          </tr>
        </>
      );
    });

    return (
      <>
        {console.log(this.state)}

        <h1>controlled components </h1>

        <form action="" onSubmit={this.sub}>
          <input type="text" name="username" onChange={this.chn} />

          <input type="text" name="password" onChange={this.chn} />

          <input type="submit" value="register" />
        </form>

        <br />
        <br />

        <table>{o}</table>
      </>
    );
  }
}

export default Contrll;

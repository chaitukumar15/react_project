import React, { Component } from 'react';

class UncontrolledInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: [],
      username: '',
      password: '',
    };
  }

  // Handle username input changes
  tar = (event) => {
    console.log(event.target.value );
    
    this.setState({ username: event.target.value });
  };

  // Handle password input changes
  tar1 = (event) => {
    this.setState({ password: event.target.value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const { username, password } = this.state;
    const obj = {
      u: username,
      p: password,
    };

    this.setState((prevState) => ({
      user: [...prevState.user, obj],
      username: '',
      password: '',
    }));
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        {console.log(this.state.user)}
        <input
          type="text"
          value={this.state.username}
          onChange={this.tar} // Handle username changes
        />
        <input
          type="text"
          value={this.state.password}
          onChange={this.tar1} // Handle password changes
        />
        <button type="submit">Submit</button>
      </form>
    );
  }
}

export default UncontrolledInput;

import React, { Component } from "react";
import { fetchFake } from './fetchFake'
import "./App.css";

// when you are using eslint please add the plugin eslint-plugin-react-hooks how dev dependency
class App extends Component {

  state = {
    name: 'ThoughWorker member',
    email: 'member@thoughtworks.com'
  }

  handleSubmit = () => { }

  handleStateValue = (e) => {
    const fieldName = e.target.name;
    const value = e.target.value;
    this.setState({ ...this.state, [fieldName]: value });
    console.log(this.state);

  }

  componentDidMount () {
    const user = fetchFake('/user/someUser');
    this.setState(user);
  }

  componentDidUpdate (prevProps, prevState) {
    if (prevState.name !== this.state.name
      || prevState.email !== this.state.email) {
      localStorage.setItem('workshop-value', this.state)
    }
  }

  componentWillUnmount () { }

  render () {
    return (
      <form onSubmit={this.handleSubmit}>
        <img
          src="https://i.morioh.com/2934a8d84c.png"
          height="150"
          width="175"
          alt="Unform"
        />
        <h1>React & Redux Hooks</h1>
        <input
          name="name"
          label="Full name"
          placeholder="Name"
          onChange={(e) => this.handleStateValue(e)}
        />
        <input
          name="email"
          label="E-mail"
          type="email"
          placeholder="Email"
          onChange={(e) => this.handleStateValue(e)}
        />
        <button type="submit">Enviar</button>
      </form>
    )
  }
}

export default App;

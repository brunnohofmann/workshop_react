<<<<<<< HEAD
import React, { Component } from "react";
import { fetchFake } from './fetchFake'
import "./App.css";

// Please if you havy someone question about rules visit https://reactjs.org/docs/hooks-rules.html

// when you are using eslint please add the plugin eslint-plugin-react-hooks how dev dependency
class App extends Component {

  state = {
    name: '',
    email: ''
  }

  handleSubmit = (e) => {
    debugger
    e.preventDefault();
  }

  handleStateValue = (e) => {
    const fieldName = e.target.name;
    const value = e.target.value;
    this.setState({ ...this.state, [fieldName]: value });
    console.log(this.state);

  }

  handleTextTitle = (e) => {
    document.title = this.state.name;
  }

  componentDidMount () {
    document
      .querySelector("button")
      .addEventListener("click", this.handleTextTitle);

    const user = fetchFake('/user/someUser');
    this.setState(user);
  }

  componentDidUpdate (prevProps, prevState) {
    if (prevState.name !== this.state.name
      || prevState.email !== this.state.email) {
      localStorage.setItem('workshop-value', this.state)
    }
  }

  componentWillUnmount () {
    document
      .querySelector("button")
      .removeEventListener("click", this.handleTextTitle);
  }

  render () {
    return (
      <>
        <form onSubmit={e => this.handleSubmit(e)}>
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
        <span>State value</span>
        <pre>{JSON.stringify(this.state, undefined, 2)}</pre>
      </>
    )
  }
=======
import React from 'react';
import {Provider as ReduxProvider} from 'react-redux';
import {store} from './redux/store';
import ClassComponentExample from "./components/ClassComponentExample";

function App() {
<<<<<<< HEAD
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
>>>>>>> Initialize project using Create React App
=======

    return (
        <ReduxProvider store={store}>
            <ClassComponentExample />
        </ReduxProvider>
    );
>>>>>>> Create ClassComponentExample and configure redux store
}

export default App;

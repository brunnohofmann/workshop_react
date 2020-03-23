import React, { Component } from "react";
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { fetchFake } from '../fetchFake';
import { appActions } from '../redux/app/duck';

import "../App.css";

// Please if you havy someone question about rules visit https://reactjs.org/docs/hooks-rules.html

// when you are using eslint please add the plugin eslint-plugin-react-hooks how dev dependency
class ClassComponentExample extends Component {

  state = {
    name: '',
    email: ''
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.addUser(this.state);
  }

  handleStateValue = (e) => {
    const fieldName = e.target.name;
    const value = e.target.value;
    this.setState({ ...this.state, [fieldName]: value });
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
        <pre>{JSON.stringify(this.props, undefined, 2)}</pre>
      </>
    )
  }
}

const mapStateToProps = state => ({
  state: state
});

const mapDispatchToProps = dispatch => bindActionCreators(appActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(ClassComponentExample);
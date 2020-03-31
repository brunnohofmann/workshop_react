/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect, useCallback } from 'react'
import { fetchFake } from '../fetchFake'
import "../App.css";

export default function FunctionalComponentExample () {

  const [message, setMessage] = useState('XXXX');

  const [state, setState] = useState({
    name: '',
    email: ''
  });

  // const handleTextMessage = useCallback(() => {
  //   setMessage(`O nome é ${state.name} e o email é ${state.email}`);
  // }, [state]);

  // componentDidMount
  useEffect(() => {
    console.log('componentDidMount');

    const user = fetchFake('/user/someUser');
    setState(user);

    document
      .querySelector("button")
      .addEventListener("click", handleDocumentTitle);

  }, [])

  // componentDidUpdate
  useEffect(() => {
    localStorage.setItem('workshop-value', JSON.stringify(state))
  }, [state])

  // componentWillUnmount
  useEffect(() => {
    console.log('componentWillUnmount');

    return () => {
      document
        .querySelector("button")
        .removeEventListener("click", handleDocumentTitle);
    }
  }, [])

  function handleSubmit (e) {
    e.preventDefault();
    setMessage(`O nome é ${state.name} e o email é ${state.email}`);
    console.log('handleSubmit', state);
  }

  function handleDocumentTitle () {
    const title = 'Titulo alterado';
    document.title = title;
    console.log('handleTextMesssage', title);
  }

  function handleStateValue (e) {
    const fieldName = e.target.name;
    const value = e.target.value;
    setState({ ...state, [fieldName]: value });
  }

  return (
    <>
      <form onSubmit={e => handleSubmit(e)}>
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
          onChange={(e) => handleStateValue(e)}
        />
        <input
          name="email"
          label="E-mail"
          type="email"
          placeholder="Email"
          onChange={(e) => handleStateValue(e)}
        />
        <button type="submit">Enviar</button>
      </form>
      <span>State value</span>
      <pre>{JSON.stringify(state, undefined, 2)}</pre>
    </>
  )
}

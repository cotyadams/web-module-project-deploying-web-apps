import logo from './logo.svg';
import './App.css';
import React from 'react';

function App() {
  let state = {
    username: '',
    password: ''
  }
  const onChange = (e) => {
    console.log(e.target.value)
    state = { ...state, [e.target.name]: state[e.target.name] + e.target.value }
    console.log(state)
  }
  return (
    <div className="App">
      <input
        type='input'
        name='username'
        value={state.username}
        onChange={onChange}
      />
      <input
        type='text'
        name='password'
        value={state.password}
        onChange={onChange}
      />
      <button onClick={console.log('username: ', state.username, 'password: ', state.password)}>login</button>
    </div>
  );
}

export default App;

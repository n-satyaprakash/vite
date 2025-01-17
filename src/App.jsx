import React, { Component } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
  }

  buttonHandler() {
    this.setState({count: this.state.count + 1})
  }
  
  render() {
    return (
      <>
        <div>
          <a href="https:vitejs.dev" target="_blank">
            <img src={viteLogo} className="logo" alt="Vite logo" />
          </a>
          <a href="https:react.dev" target="_blank">
            <img src={reactLogo} className="logo react" alt="React logo" />
          </a>
        </div>
        <h1>Vite + React + Web. Dev. Class</h1>
        <div className="card">
          <button onClick={this.buttonHandler.bind(this)}>
            count is {this.state.count}
          </button>
          <p>
            Edit <code>src/App.jsx</code> and save to test HMR
          </p>
        </div>
        <p className="read-the-docs">
          Click on the Vite and React logos to learn more
        </p>
      </>
    );
  }
}

export default App;
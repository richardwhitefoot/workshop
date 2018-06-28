import React, { Component } from 'react';
import Pokemon from './containers/Pokemon';

const appStyle = {
  color: 'red',
  textAlign: 'center'
}

class App extends Component {
  render() {
    return (
      <div style={appStyle}>
        <h1>My Pokemon App</h1>
        <Pokemon />
      </div>
    );
  }
}

export default App;
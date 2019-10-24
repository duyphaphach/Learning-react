import React from 'react';
import { hot } from 'react-hot-loader/root';
import Game from './components/Game';

class App extends React.Component {
  render() {
    return (
      <Game />
    )
  }
}

export default hot(App);

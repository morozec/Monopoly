import React, { Component } from 'react';
import Board from './components/Board'
import Info from './components/Info'
import Player from './components/Player'
import './App.css'


export default class App extends Component {
  static displayName = App.name;

  render () {
    return (
      <div className='game'>
        <div className='game-field-player'>
          <Board/>
          <Player />
        </div>
        <Info/>
      </div>
        
    );
  }
}

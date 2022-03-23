import React, { Component } from 'react';
import './Dice.css';

class Dice extends Component {
  render() {
    const { face, rolling } = this.props;
    return <i className={`Dice fas fa-dice-${face} ${rolling ? 'rolling' : null}`}></i>;
  }
}

export default Dice;

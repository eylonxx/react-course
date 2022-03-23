import React, { Component } from 'react';
import Dice from './Dice';

class RollingDice extends Component {
  static defaultProps = {
    sides: ['one', 'two', 'three', 'four', 'five', 'six'],
  };
  constructor(props) {
    super(props);
    this.state = { dice1: 'one', dice2: 'one' };
    this.roll = this.roll.bind(this); //bind THIS in roll func so its refering to the component
  }
  roll() {
    const newDice1 = this.props.sides[Math.floor(Math.random() * this.props.sides.length)];
    const newDice2 = this.props.sides[Math.floor(Math.random() * this.props.sides.length)];
    this.setState({ dice1: newDice1, dice2: newDice2 }); //rerenders the component
  }
  render() {
    return (
      <div>
        <Dice face={this.state.dice1} />
        <Dice face={this.state.dice2} />
        <button onClick={this.roll}>Roll</button>
      </div>
    );
  }
}

export default RollingDice;

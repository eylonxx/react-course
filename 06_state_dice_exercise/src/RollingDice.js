import React, { Component } from 'react';
import Dice from './Dice';
import './RollingDice.css';

class RollingDice extends Component {
  static defaultProps = {
    sides: ['one', 'two', 'three', 'four', 'five', 'six'],
  };
  constructor(props) {
    super(props);
    this.state = { dice1: 'one', dice2: 'one', rolling: false, oded: [] };
    this.roll = this.roll.bind(this); //bind THIS in roll func so its refering to the component
  }
  roll() {
    const newDice1 = this.props.sides[Math.floor(Math.random() * this.props.sides.length)];
    const newDice2 = this.props.sides[Math.floor(Math.random() * this.props.sides.length)];
    this.setState({ dice1: newDice1, dice2: newDice2, rolling: true }); //rerenders the component
    this.setState({ oded: this.state.oded.concat([[this.state.dice1, this.state.dice2]]) });
    console.log(this.state.oded);
    setTimeout(() => {
      this.setState({ rolling: false });
    }, 1000);
  }
  render() {
    return (
      <div className="RollingDice">
        <div className="RollingDice-container">
          <Dice face={this.state.dice1} rolling={this.state.rolling} />
          <Dice face={this.state.dice2} rolling={this.state.rolling} />
        </div>
        <button disabled={this.state.rolling} onClick={this.roll}>
          {this.state.rolling ? 'Rolling...' : 'Roll Dice'}
        </button>
      </div>
    );
  }
}

export default RollingDice;

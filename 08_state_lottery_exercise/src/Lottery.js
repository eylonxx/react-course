import React, { Component } from 'react';
import './Lottery.css';
import Ball from './Ball';

class Lottery extends Component {
  static defaultProps = {
    numBall: 6,
    maxNum: 40,
  };
  constructor(props) {
    super(props);
    this.state = { nums: Array.from({ length: this.props.numBall }) };
    this.handleClick = this.handleClick.bind(this);
  }

  generate() {
    const newNums = this.state.nums.map((num) => (num = Math.floor(Math.random() * this.props.maxNum + 1)));
    this.setState({ nums: newNums });
  }

  handleClick() {
    this.generate();
  }

  render() {
    return (
      <div className="Lottery">
        <div className="Lottery-container">
          {this.state.nums.map((n) => (
            <Ball num={n} />
          ))}
        </div>
        <button onClick={this.handleClick}>xd</button>
      </div>
    );
  }
}

export default Lottery;

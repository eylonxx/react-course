import React, { Component } from 'react';
import './Card.css';

export default class Card extends Component {
  constructor(props) {
    super(props);
    let angle = Math.random() * 90 - 45;
    let xPos = Math.random() * 40 - 20;
    let yPos = Math.random() * 40 - 20;

    this._transform = `translate(${xPos}px, ${yPos}px) rotate(${angle}deg)`;
  }

  render() {
    console.log(this.props.imgSrc);
    return <img style={{ transform: this._transform }} className="Card" src={this.props.imgSrc} alt={'banana'} />;
  }
}

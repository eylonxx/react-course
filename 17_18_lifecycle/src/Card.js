import React, { Component } from 'react';
import './Card.css';

export default class Card extends Component {
  render() {
    console.log(this.props.imgSrc);
    return <img className="Card" src={this.props.imgSrc} alt={'banana'} />;
  }
}

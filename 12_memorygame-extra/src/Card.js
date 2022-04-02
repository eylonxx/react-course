import React, { Component } from 'react';
import './Card.css';
class Card extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.props.shuffleCards(this.props.name);
  }
  render() {
    return (
      <div className="Card" onClick={this.handleClick}>
        <img src={this.props.imgSrc} alt="wa" />
        <h3>{this.props.name}</h3>
      </div>
    );
  }
}
export default Card;

import React, { Component } from 'react';

class Card extends Component {
  render() {
    return <img src={this.props.imgSrc} alt="wa" />;
  }
}
export default Card;

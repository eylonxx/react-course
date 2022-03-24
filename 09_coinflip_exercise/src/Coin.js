import React, { Component } from 'react';

class Coin extends Component {
  render() {
    return <img src={this.props.side} alt={this.props.altText} />;
  }
}
export default Coin;

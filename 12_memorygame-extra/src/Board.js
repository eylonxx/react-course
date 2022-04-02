import React, { Component } from 'react';
import Card from './Card';
import images from './images';
class Board extends Component {
  static defaultProps = {
    cardImages: [...images],
  };
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return <Card imgSrc={images[0]} />;
  }
}
export default Board;

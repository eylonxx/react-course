import React, { Component } from 'react';
import Box from './Box';
import './BoxContainer.css';
class BoxContainer extends Component {
  static defaultProps = {
    numBoxes: 18,
    colors: ['darkgreen', 'yellowgreen', 'oceanblue', 'aquamarine', 'black', 'white', 'grey'],
  };
  render() {
    return <div className="BoxContainer">{Array(this.props.numBoxes).fill(<Box colors={this.props.colors} />)}</div>;
  }
}

export default BoxContainer;

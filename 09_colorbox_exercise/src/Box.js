import React, { Component } from 'react';
import './Box.css';
class Box extends Component {
  constructor(props) {
    super(props);
    this.state = { color: this.props.colors[Math.floor(Math.random() * this.props.colors.length)] };
    this.handleClick = this.handleClick.bind(this);
  }

  changeColor() {
    let newColor;
    do {
      newColor = this.props.colors[Math.floor(Math.random() * this.props.colors.length)];
    } while (newColor === this.state.color);
    this.setState({ color: newColor });
    console.log(newColor);
  }

  handleClick() {
    this.changeColor();
  }

  render() {
    return <div className="Box" style={{ backgroundColor: this.state.color }} onClick={this.handleClick}></div>;
  }
}
export default Box;

import React, { Component } from 'react';

export default class Box extends Component {
  render() {
    return (
      <div>
        <div
          style={{
            width: `${this.props.width}px`,
            height: `${this.props.height}px`,
            backgroundColor: this.props.bgcolor,
          }}
        ></div>
        <button onClick={this.props.removeBox}>Remove this box</button>
      </div>
    );
  }
}

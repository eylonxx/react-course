import React, { Component } from 'react';
import { Link } from 'react-router-dom';
export default class Apple extends Component {
  render() {
    return (
      <div>
        apple is {this.props.title}.<Link to="/">Go back</Link>
      </div>
    );
  }
}

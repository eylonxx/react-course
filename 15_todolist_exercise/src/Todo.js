import React, { Component } from 'react';

class Todo extends Component {
  render() {
    return (
      <li>
        {this.props.todoText}
        <button>X</button>
      </li>
    );
  }
}
export default Todo;

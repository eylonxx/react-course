import React, { Component } from 'react';

class Todo extends Component {

  render() {
    return (
      {this.props.isEdit ? <li>dd</li> : <li>{this.props.todoText}
      <button onClick={this.props.removeTodo}>X</button>
      <button onClick={this.props.editTodo}>Edit</button></li>}
    );
  }
}
export default Todo;

import React, { Component } from 'react';
import './Todo.css';

class Todo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isEdit: false,
      todoText: this.props.todoText,
    };
    this.createTodos = this.createTodos.bind(this);
    this.editTodo = this.editTodo.bind(this);
    this.handleUpdate = this.handleUpdate.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleCompletion = this.handleCompletion.bind(this);
  }

  editTodo() {
    this.setState({ isEdit: !this.state.isEdit });
  }

  handleChange(evt) {
    this.setState({ todoText: evt.target.value });
  }

  handleUpdate(evt) {
    evt.preventDefault();
    this.props.updateTodo(this.props.id, this.state.todoText);
    this.setState({ isEdit: false });
  }
  handleCompletion() {
    this.props.toggleTodo(this.props.id);
  }

  createTodos() {
    if (!this.state.isEdit) {
      return (
        <li onClick={this.handleCompletion} className={this.props.completed ? 'Completed' : ''}>
          {this.state.todoText}
          <button onClick={this.props.removeTodo}>X</button>
          <button onClick={this.editTodo}>Edit</button>
        </li>
      );
    } else {
      return (
        <li>
          <form onSubmit={this.handleUpdate}>
            <input name="todoText" value={this.state.todoText} onChange={this.handleChange} type="text" />
            <button>Save</button>
          </form>
        </li>
      );
    }
  }
  render() {
    return this.createTodos();
  }
}
export default Todo;

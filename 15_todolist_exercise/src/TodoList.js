import React, { Component } from 'react';
import NewTodoForm from './NewTodoForm';
import Todo from './Todo';
export default class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todoList: [],
    };
    this.addTodo = this.addTodo.bind(this);
  }

  addTodo(todo) {
    this.setState({ todoList: [...this.state.todoList, todo] });
  }
  removeTodo() {}

  render() {
    return (
      <div>
        <NewTodoForm addTodo={this.addTodo} />
        <ul>
          {this.state.todoList.map((todo) => (
            <Todo key={todo.id} todoText={todo.todoText} />
          ))}
        </ul>
      </div>
    );
  }
}

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
    this.editTodo = this.editTodo.bind(this);
  }

  addTodo(todo) {
    this.setState({ todoList: [...this.state.todoList, todo] });
  }

  removeTodo(id) {
    this.setState({ todoList: this.state.todoList.filter((todo) => todo.id !== id) });
  }

  editTodo(id) {
    let chosen = this.state.todoList.find((todo) => todo.id === id);
    console.log(chosen);
  }

  render() {
    return (
      <div>
        <NewTodoForm addTodo={this.addTodo} />
        <ul>
          {this.state.todoList.map((todo) => (
            <Todo
              key={todo.id}
              todoText={todo.todoText}
              removeTodo={() => {
                this.removeTodo(todo.id);
              }}
              editTodo={() => {
                this.editTodo(todo.id);
              }}
              isEdit={todo.edit}
            />
          ))}
        </ul>
      </div>
    );
  }
}

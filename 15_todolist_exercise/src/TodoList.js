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
    this.updateTodo = this.updateTodo.bind(this);
  }

  addTodo(todo) {
    this.setState({ todoList: [...this.state.todoList, todo] });
  }

  removeTodo(id) {
    this.setState({ todoList: this.state.todoList.filter((todo) => todo.id !== id) });
  }
  updateTodo(id, updatedText) {
    const updatedTodos = this.state.todoList.map((todo) => {
      if (todo.id === id) {
        return { ...todo, todoText: updatedText };
      } else {
        return todo;
      }
    });
    this.setState({ todoList: updatedTodos });
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
              updateTodo={this.updateTodo}
            />
          ))}
        </ul>
      </div>
    );
  }
}

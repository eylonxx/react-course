import React, { Component } from 'react';
import { v4 as uuidv4 } from 'uuid';

class NewTodoForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todoText: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(evt) {
    this.setState({ todoText: evt.target.value });
  }

  handleSubmit(evt) {
    evt.preventDefault();
    let newTodo = { ...this.state, id: uuidv4(), completed: false };
    this.props.addTodo(newTodo);
    this.setState({ todoText: '' });
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input value={this.state.todoText} onChange={this.handleChange} type="text" />
          <button>Add todo</button>
        </form>
      </div>
    );
  }
}
export default NewTodoForm;

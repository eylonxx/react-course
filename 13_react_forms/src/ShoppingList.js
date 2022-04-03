import React, { Component } from 'react';

class ShoppingList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      email: '',
      password: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(evt) {
    this.setState({
      [evt.target.name]: evt.target.value,
    });
  }

  handleSubmit(evt) {
    evt.preventDefault();
    this.props.addItem(this.state);
    this.setState({ username: '', email: '', password: '' });
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input name="username" value={this.state.username} onChange={this.handleChange} type="text" />
          <input name="email" value={this.state.email} onChange={this.handleChange} type="email" />
          <input name="password" value={this.state.password} onChange={this.handleChange} type="password" />
          <button>Submit</button>
        </form>
      </div>
    );
  }
}

export default ShoppingList;

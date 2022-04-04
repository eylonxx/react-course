import React, { Component } from 'react';
import { v4 as uuidv4 } from 'uuid';

export default class NewBoxForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      width: '',
      height: '',
      bgcolor: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(evt) {
    this.setState({ [evt.target.name]: evt.target.value });
  }

  handleSubmit(evt) {
    evt.preventDefault();
    const newBox = { ...this.state, id: uuidv4() };
    this.props.addBox(newBox);
    this.setState({ width: '', height: '', bgcolor: '' });
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input name="width" value={this.state.width} onChange={this.handleChange} type="text" />
          <input name="height" value={this.state.height} onChange={this.handleChange} type="text" />
          <input name="bgcolor" value={this.state.bgcolor} onChange={this.handleChange} type="text" />
          <button>Submit</button>
        </form>
      </div>
    );
  }
}

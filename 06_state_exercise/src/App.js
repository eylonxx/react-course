import React, { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { num: 1 };
    this.clickMe = this.clickMe.bind(this);
  }
  clickMe() {
    let rand = Math.floor(Math.random() * 10);
    this.setState({ num: rand });
  }
  render() {
    return (
      <div className="App">
        <h1>Number is {this.state.num}</h1>
        {!(this.state.num === 7) ? <button onClick={this.clickMe}>Click me!</button> : 'Winner!'}
      </div>
    );
  }
}

export default App;

import React, { Component } from 'react';
import axios from 'axios';
export default class Jokelist extends Component {
  async componentDidMount() {
    let joke = await axios.get('https://icanhazdadjoke.com/', { headers: { Accept: 'application/json' } });
    console.log(joke);
  }
  render() {
    return (
      <div>
        <h1>hi</h1>
      </div>
    );
  }
}

import React, { Component } from 'react';
import axios from 'axios';
import './Jokelist.css';

export default class Jokelist extends Component {
  constructor(props) {
    super(props);
    this.state = {
      jokes: [],
    };
    this.createJoke = this.createJoke.bind(this);
  }
  async createJoke() {
    let res = await axios.get('https://icanhazdadjoke.com/', { headers: { Accept: 'application/json' } });
    return res.data.joke;
  }
  async componentDidMount() {
    while (this.state.jokes.length < 9) {
      console.log('hi');
      let joke = await this.createJoke();
      this.setState((st) => ({ jokes: [...st.jokes, joke] }));
      //   if (!this.state.jokes.has(joke)) {
      //     this.setState((st) => ({ jokes: new Set(st.jokes).add(joke) }));
      //   }
    }
  }
  render() {
    return (
      <div className="Jokelist">
        <h1>Jokes</h1>
        <ul>
          {this.state.jokes.map((joke) => (
            <li>{joke}</li>
          ))}
        </ul>
      </div>
    );
  }
}

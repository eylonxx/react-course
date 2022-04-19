import React, { Component } from 'react';
import axios from 'axios';
import Joke from './Joke';
import './Jokelist.css';
import { v4 as uuidv4 } from 'uuid';

export default class Jokelist extends Component {
  constructor(props) {
    super(props);
    this.state = {
      jokes: JSON.parse(localStorage.getItem('jokes') || '[]'),
      loading: false,
    };
    this.seenJokes = new Set(this.state.jokes.map((j) => j.text));
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    if (this.state.jokes.length === 0) {
      this.getJokes();
    }
  }

  async getJokes() {
    const jokes = [];
    while (jokes.length < 10) {
      let res = await axios.get('https://icanhazdadjoke.com/', { headers: { Accept: 'application/json' } });
      console.log('hi');
      if (!this.seenJokes.has(res.data.joke)) {
        jokes.push({ text: res.data.joke, votes: 0, id: uuidv4() });
      }
    }
    this.setState(
      (st) => ({
        loading: false,
        jokes: [...st.jokes, ...jokes],
      }),
      () => localStorage.setItem('jokes', JSON.stringify(this.state.jokes))
    );
  }

  handleVote(id, delta) {
    this.setState(
      (st) => ({ jokes: st.jokes.map((j) => (j.id === id ? { ...j, votes: j.votes + delta } : j)) }),
      () => localStorage.setItem('jokes', JSON.stringify(this.state.jokes))
    );
  }

  handleClick() {
    this.setState({ loading: true }, this.getJokes);
  }

  render() {
    if (this.state.loading) {
      return (
        <div className="Jokelist-spinner">
          <i className="far fa-8x fa-laugh fa-spin"></i>
          <h1 className="Jokelist-title">Loading...</h1>
        </div>
      );
    }
    return (
      <div className="Jokelist">
        <div className="Jokelist-sidebar">
          <h1 className="Jokelist-title">
            <span>Dad</span> Jokes
          </h1>
          <img
            src="https://assets.dryicons.com/uploads/icon/svg/8927/0eb14c71-38f2-433a-bfc8-23d9c99b3647.svg"
            alt="lol"
          />
          <button onClick={this.handleClick} className="Jokelist-getMore">
            New Jokes
          </button>
        </div>
        <div className="Jokelist-jokes">
          {this.state.jokes.map((joke) => (
            <Joke
              key={joke.id}
              text={joke.text}
              votes={joke.votes}
              upvote={() => this.handleVote(joke.id, 1)}
              downvote={() => this.handleVote(joke.id, -1)}
            />
          ))}
        </div>
      </div>
    );
  }
}

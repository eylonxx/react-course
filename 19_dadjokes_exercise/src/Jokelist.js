import React, { Component } from 'react';
import axios from 'axios';
import './Jokelist.css';

export default class Jokelist extends Component {
  constructor(props) {
    super(props);
    this.state = {
      jokes: [],
    };
  }

  async componentDidMount() {
    const jokes = [];
    while (jokes.length < 10) {
      let res = await axios.get('https://icanhazdadjoke.com/', { headers: { Accept: 'application/json' } });
      console.log('hi');
      jokes.push(res.data.joke);
    }
    this.setState({ jokes: jokes });
  }

  render() {
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
          <button className="Jokelist-getMore">New Jokes</button>
        </div>
        <ul className="Jokelist-jokes">
          {this.state.jokes.map((joke) => (
            <li>{joke}</li>
          ))}
        </ul>
      </div>
    );
  }
}

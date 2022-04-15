import React, { Component } from 'react';
import axios from 'axios';
import Card from './Card';

export default class Deck extends Component {
  constructor(props) {
    super(props);
    this.state = { deck: null, drawn: [] };
  }
  async componentDidMount() {
    let deck = await axios.get('https://deckofcardsapi.com/api/deck/new/shuffle/');
    this.setState({ deck: deck.data });
  }

  async draw() {
    try {
      let data = await axios.get(`https://deckofcardsapi.com/api/deck/${this.state.deck.deck_id}/draw/`);
      const card = data.data.cards[0];
      console.log(card);
      if (data.data.success === false) {
        throw new Error('no cards remaining');
      }
      this.setState((st) => ({
        drawn: [
          ...st.drawn,
          {
            id: card.code,
            image: card.image,
            name: `${card.suit} ${card.value}`,
          },
        ],
      }));
    } catch (err) {
      alert(err);
    }
  }
  render() {
    return (
      <div>
        <div>
          {this.state.drawn.map((card) => (
            <Card imgSrc={card.image} />
          ))}
        </div>
        <button onClick={() => this.draw()}>gg</button>
      </div>
    );
  }
}

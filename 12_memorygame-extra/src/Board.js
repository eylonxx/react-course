import React, { Component } from 'react';
import Card from './Card';
import images from './images';
import { names } from './images';
import './Board.css';

class Board extends Component {
  static defaultProps = [];
  constructor(props) {
    super(props);

    this.state = {
      cards: images.map((img, i) => {
        return { name: names[i].toUpperCase(), src: img };
      }),
      score: 0,
      bestScore: 0,
      clickedCards: [],
    };
    this.shuffle = this.shuffle.bind(this);
  }

  shuffle(name) {
    this.setState({ cards: this.state.cards.sort(() => Math.random() - 0.5) });
    if (!this.state.clickedCards.includes(name)) {
      this.setState({ score: this.state.score + 1, clickedCards: [...this.state.clickedCards, name] });
    } else {
      if (this.state.score > this.state.bestScore) {
        this.setState({ bestScore: this.state.score });
      }
      this.setState({ score: 0, clickedCards: [] });
    }
  }

  render() {
    return (
      <div className="Board">
        <div className="Board-cards">
          {this.state.cards.map((card, i) => (
            <Card key={i} imgSrc={card.src} name={card.name} shuffleCards={this.shuffle} />
          ))}
        </div>
        <div className="Board-score">
          <h3>Score: {this.state.score}</h3>
          hr
          <h3>Best: {this.state.bestScore}</h3>
        </div>
      </div>
    );
  }
}
export default Board;

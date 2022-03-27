import React, { Component } from 'react';
import { randomWord } from './words';
import './Hangman.css';
import img0 from './0.jpg';
import img1 from './1.jpg';
import img2 from './2.jpg';
import img3 from './3.jpg';
import img4 from './4.jpg';
import img5 from './5.jpg';
import img6 from './6.jpg';

class Hangman extends Component {
  /** by default, allow 6 guesses and use provided gallows images. */
  static defaultProps = {
    maxWrong: 6,
    images: [img0, img1, img2, img3, img4, img5, img6],
  };

  constructor(props) {
    super(props);
    this.state = { nWrong: 0, guessed: new Set(), answer: randomWord(), end: false };
    this.handleGuess = this.handleGuess.bind(this);
    this.handleReset = this.handleReset.bind(this);
  }

  guessedWord() {
    return this.state.answer.split('').map((ltr) => (this.state.guessed.has(ltr) ? ltr : '_'));
  }

  handleGuess(evt) {
    let ltr = evt.target.value;
    this.setState((st) => ({
      guessed: st.guessed.add(ltr),
      nWrong: st.nWrong + (st.answer.includes(ltr) ? 0 : 1),
    }));
    this.state.nWrong > this.props.maxWrong - 2 ? this.setState({ end: true }) : this.setState({ end: false });
  }

  generateButtons() {
    return 'abcdefghijklmnopqrstuvwxyz'.split('').map((ltr) => (
      <button key={ltr} value={ltr} onClick={this.handleGuess} disabled={this.state.guessed.has(ltr)}>
        {ltr}
      </button>
    ));
  }

  handleReset() {
    this.resetButton();
  }

  resetButton() {
    this.setState({ nWrong: 0, guessed: new Set(), answer: randomWord(), end: false });
  }

  /** render: render game */
  render() {
    let isWinner = this.guessedWord().join('') === this.state.answer;
    let gameOver = this.state.end;
    let gameState = this.generateButtons();
    if (isWinner) gameState = 'You win!';
    if (gameOver) gameState = 'You lose!';
    return (
      <div className="Hangman">
        <h1>Hangman</h1>
        <img src={this.props.images[this.state.nWrong]} alt={this.state.nWrong + '/6'} />
        <p className="Hangman-wrong">{this.state.nWrong}</p>
        <p className="Hangman-word">{this.state.end ? this.state.answer : this.guessedWord()}</p>
        <p className="Hangman-btns">{gameState}</p>
        <button id="Hangman-reset-btn" onClick={this.handleReset}>
          Reset
        </button>
      </div>
    );
  }
}

export default Hangman;

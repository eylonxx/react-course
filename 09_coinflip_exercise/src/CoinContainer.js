import React, { Component } from 'react';
import Coin from './Coin';

class CoinContainer extends Component {
  static defaultProps = {
    coinSides: [
      { side: 'https://i.ebayimg.com/images/g/xD4AAOSw2oVeb4Kw/s-l300.jpg', alt: 'heads' },
      { side: 'http://www.clker.com/cliparts/4/a/2/6/1393621733287511319tails-md.png', alt: 'tails' },
    ],
  };
  constructor(props) {
    super(props);
    this.state = { currCoin: this.props.coinSides[0], headsCounter: 0, tailsCounter: 0, totalFlips: 0 };
    this.handleClick = this.handleClick.bind(this);
  }
  flipCoin() {
    let newSide = this.props.coinSides[Math.floor(Math.random() * this.props.coinSides.length)];
    this.setState((st) => {
      return {
        ...st,
        currCoin: newSide,
        tailsCounter: newSide.alt === 'tails' ? st.tailsCounter + 1 : st.tailsCounter,
        headsCounter: newSide.alt === 'heads' ? st.headsCounter + 1 : st.headsCounter,
        totalFlips: st.totalFlips + 1,
      };
    });
  }

  handleClick() {
    this.flipCoin();
  }

  render() {
    return (
      <div>
        <Coin side={this.state.currCoin.side} altText={this.state.currCoin.alt} />
        <button onClick={this.handleClick}>Flip</button>
        <p>
          Total flips: {this.state.totalFlips}, Heads Flipped: {this.state.headsCounter}, Tails flipped:
          {this.state.tailsCounter}
        </p>
      </div>
    );
  }
}

export default CoinContainer;

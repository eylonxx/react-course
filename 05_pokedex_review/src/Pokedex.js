import React, { Component } from 'react';
import './Pokedex.css';
import Pokecard from './Pokecard';

class Pokedex extends Component {
  render() {
    let title;
    if (this.props.isWinner) {
      title = 'Winner!';
    } else title = 'Loser!';

    return (
      <div className="Pokedex">
        {this.props.hand.map((pokedata) => (
          <Pokecard id={pokedata.id} name={pokedata.name} type={pokedata.type} exp={pokedata.base_experience} />
        ))}
        <h2>Total exp = {this.props.totalExp}</h2>
        <h2>{title}</h2>
      </div>
    );
  }
}

export default Pokedex;

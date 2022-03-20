import React, { Component } from 'react';
import './Pokecard.css';

const POKEAPI = 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/';

class Pokecard extends Component {
  render() {
    let paddedId = this.props.id.toString().padStart(3, '0');
    let imgSrc = `${POKEAPI}${paddedId}.png`;
    return (
      <div>
        <div className="Pokecard">
          <p>{this.props.name}</p>
          <img className="Pokecard-img" src={imgSrc} alt="pokemon" />
          <p>Type: {this.props.type}</p>
          <p>EXP: {this.props.exp}</p>
        </div>
      </div>
    );
  }
}

export default Pokecard;

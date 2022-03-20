import React, { Component } from 'react';
import './Pokecard.css';
const POKE_API ="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/"
const padToThree = (number) =>{
    if(number <= 999){
        return `00${number}`.slice(-3);
    }else return
    
}
class Pokecard extends Component{
    render(){
        let imgSrc = `${POKE_API}${padToThree(this.props.id)}.png`
        return(
            <div className="Pokecard">
                <h1 className='Pokecrad-title'>{this.props.name}</h1>
                <div class="Pokecard-image">
                <img src={imgSrc} alt={this.props.name} />
                </div>
                <div className='Pokecard-data'>Type: {this.props.type}</div>
                <div className='Pokecard-data'>Exp: {this.props.exp}</div>
            </div>
        )
    }
}

export default Pokecard;
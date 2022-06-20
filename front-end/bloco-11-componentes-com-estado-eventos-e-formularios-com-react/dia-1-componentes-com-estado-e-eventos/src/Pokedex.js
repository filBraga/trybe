import React from 'react';
import Pokemon from './Pokemon';

class Pokedex extends React.Component {

    constructor(props){
        super(props)

        this.state={
            pokemon: props.pokemons,
        };
    }

    createButtonTrype = () => {
        const { pokemons } = this.props;
        const pokemonType = new Set(pokemons.map(({type}) => type));
        const pokeTypesArray = Array.from(pokemonType)
        return pokeTypesArray.map((type)=>(<button key= { type }>{type}</button>))
    }

    render() {
        return (
            <div className="pokedex">
                {this.props.pokemons.map(pokemon => <Pokemon key={pokemon.id} pokemon={pokemon} />)}
                <button>All</button>
                { this.createButtonTrype() }
            </div>
        );
    }
}

export default Pokedex;
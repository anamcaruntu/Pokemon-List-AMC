import React from "react";
import Pokemon from "./Pokemon";
import "../stylesheets/pokemonList.scss";

class PokemonList extends React.Component {
  render() {
    console.log(this.props.Pokemons);
    const result = this.props.Pokemons.map((pokemon, index) => {
      return (
        <Pokemon
          key={pokemon.id}
          id={pokemon.id}
          name={pokemon.name}
          types={pokemon.types}
          url={pokemon.url}
        />
      );
    });
    return (
      <ul>
        <li>{result}</li>
      </ul>
    );
  }
}

export default PokemonList;

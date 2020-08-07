import React from "react";
import Pokemon from "./Pokemon";

const PokemonList = (props) => {
  return (
    <ul className="pokemonList">
      {props.data.map((pokemon) => (
        <li key={pokemon.id}>
          <Pokemon
            url={pokemon.url}
            name={pokemon.name}
            types={pokemon.types}
          />
        </li>
      ))}
    </ul>
  );
};

export default PokemonList;

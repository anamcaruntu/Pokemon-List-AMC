import React from "react";
import Pokemon from "./Pokemon";
import "../stylesheets/pokemonList.scss";

class PokemonList extends React.Component {
  render() {
    return (
      <div>
        <Pokemon />
      </div>
    );
  }
}

export default PokemonList;

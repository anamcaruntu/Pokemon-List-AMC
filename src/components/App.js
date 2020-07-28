import React from "react";

import PokemonList from "./PokemonList";
import Pokemons from "../Data/Pokemons.json";

import "../stylesheets/App.scss";

class App extends React.Component {
  render() {
    return (
      <div>
        <PokemonList Pokemons={Pokemons} />
      </div>
    );
  }
}

export default App;

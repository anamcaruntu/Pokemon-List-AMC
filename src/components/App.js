import React from "react";

import PokemonList from "./PokemonList";
import Pokemons from "../Data/Pokemons.json";

import "../stylesheets/App.scss";

class App extends React.Component {
  render() {
    console.log(Pokemons);
    return (
      <div className="App">
        <h1 className="App__title">Mi lista de Pokemons</h1>
        <PokemonList Pokemons={Pokemons} />
      </div>
    );
  }
}

export default App;

import React from "react";
import "../stylesheets/App.scss";
import pokemons from "../Data/Pokemons.json";
import PokemonList from "./PokemonList";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: pokemons,
    };
  }

  render() {
    return (
      <div className="App">
        <h1 className="App__title">Mi lista de Pokemons</h1>
        <PokemonList data={this.state.data} />
      </div>
    );
  }
}

export default App;

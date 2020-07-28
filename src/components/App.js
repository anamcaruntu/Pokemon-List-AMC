import React from "react";
import PokemonList from "./PokemonList";
import "../stylesheets/App.scss";

class App extends React.Component {
  render() {
    return (
      <div>
        <PokemonList />
      </div>
    );
  }
}

export default App;

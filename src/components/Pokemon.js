import React from "react";
import "../stylesheets/pokemonItem.scss";

class Pokemon extends React.Component {
  render() {
    console.log(this.props);
    const eachType = this.props.types.map((type, index) => {
      return <h4 key={index}>{type}</h4>;
    });

    return (
      <div className="card">
        <h2 className="card__title">{this.props.name}</h2>
        <img alt={this.props.name} src={this.props.url} />
        <div className="types">{eachType}</div>
      </div>
    );
  }
}
export default Pokemon;

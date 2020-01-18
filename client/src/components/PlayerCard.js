import React from "react";

const PlayerCard = props => {
  return (
    <div className="card">
      <h3>{props.name}</h3>
      <p>Name: {props.name}</p>
      <p>Country: {props.country}</p>
      <p>Searches: {props.searches}</p>
    </div>
  );
};

export default PlayerCard;

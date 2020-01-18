import React from "react";
import PlayerCard from "./PlayerCard";

const PlayersList = props => {
  return (
    <div>
      {props.players.map(player => {
        return (
          <PlayerCard
            // key={index}
            name={player.name}
            country={player.country}
            searches={player.searches}
          />
        );
      })}
    </div>
  );
};
export default PlayersList;

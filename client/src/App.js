import React from "react";

import "./App.css";
import axios from "axios";
import PlayerCard from "./components/PlayerCard";
import PlayersList from "./components/PlayersList";
import DarkModeButton from "./components/DarkModeButton";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      players: []
    };
  }
  fetchPlayers = () => {
    axios
      .get("http://localhost:5000/api/players")
      .then(res => {
        this.setState({ players: res.data });
      })
      .catch(err => {
        console.log(err);
      });
  };

  componentDidMount() {
    this.fetchPlayers();
  }

  render() {
    return (
      <div className="App">
        <DarkModeButton />
        <h1 className="hello">Player Cards</h1>
        <div className="card-div">
          {this.state.players.map((player, index) => (
            <PlayerCard
              key={index}
              // id={player.id}
              name={player.name}
              country={player.country}
              searches={player.searches}
            />
          ))}
          ;
        </div>
      </div>
    );
  }
}

export default App;

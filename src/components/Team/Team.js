import React from 'react';

import PropTypes from 'prop-types';

import Player from '../Player/Player';

import PlayerForm from '../PlayerForm/PlayerForm';

import authData from '../../helpers/data/authData';
import playerData from '../../helpers/data/playerData';

import './Team.scss';

class Team extends React.Component {
  state = {
    players: [],
    showPlayerForm: false,
  }

  componentDidMount() {
    this.getPlayers();
  }

  getPlayers = () => {
    playerData.getPlayersByUid(authData.getUid())
      .then((players) => {
        this.setState({ players });
      })
      .catch((errFromPlayersContainer) => console.error({ errFromPlayersContainer }));
  }

  deleteSinglePlayer = (playerId) => {
    playerData.deletePlayerById(playerId)
      .then(() => {
        this.getPlayers();
      })
      .catch((errorFromDeletePin) => console.error({ errorFromDeletePin }));
  }

  addPlayer = (newPlayer) => {
    playerData.createNewPlayer(newPlayer)
      .then(() => {
        this.getPlayers();
        this.setState({ showPlayerForm: false });
      })
      .catch((errorFromSavePlayer) => console.error({ errorFromSavePlayer }));
  }

  setShowPlayerForm = () => {
    this.setState({ showPlayerForm: true });
  }

  render() {
    return (
      <div className="d-flex flex-wrap justify-content-between">
        <button onClick={this.setShowPlayerForm}>Add a new player</button>
      {this.state.showPlayerForm && <PlayerForm addPlayer={this.addPlayer} /> }
        {this.state.players.map((player) => (<Player key={player.id} player={player} deleteSinglePlayer={this.deleteSinglePlayer}/>))}
      </div>
    );
  }
}

export default Team;

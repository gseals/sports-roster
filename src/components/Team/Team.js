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
    editMode: false,
    playerToEdit: {},
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

  updatePlayer = (playerId, playerToUpdate) => {
    playerData.updatePlayer(playerId, playerToUpdate)
      .then(() => {
        this.getPlayers();
        this.setState({ editMode: false, showPlayerForm: false });
      })
      .catch((errorFromUpdatePlayer) => console.error({ errorFromUpdatePlayer }));
  }

  setEditMode = (editMode) => {
    this.setState({ editMode, showPlayerForm: true });
  }

  setPlayerToEdit = (player) => {
    this.setState({ playerToEdit: player });
  }

  deleteSinglePlayer = (playerId) => {
    playerData.deletePlayerById(playerId)
      .then(() => {
        this.getPlayers();
      })
      .catch((errorFromDeletePlayer) => console.error({ errorFromDeletePlayer }));
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

  setCancelPlayerUpdate = () => {
    this.setState({ showPlayerForm: false });
  }

  render() {
    return (
      <div>
        <button className="btn btn-outline-info" onClick={this.setShowPlayerForm}>Add a new player</button>
        <div className="d-flex flex-wrap justify-content-between">
      {this.state.showPlayerForm
      && <PlayerForm
      addPlayer={this.addPlayer} editMode={this.state.editMode} playerToEdit={this.state.playerToEdit} updatePlayer={this.updatePlayer} setCancelPlayerUpdate={this.setCancelPlayerCreate} /> }
  {this.state.players.map((player) => (<Player key={player.id} player={player} deleteSinglePlayer={this.deleteSinglePlayer} setEditMode={this.setEditMode} setPlayerToEdit={this.setPlayerToEdit} />))}
      </div>
      </div>
    );
  }
}

export default Team;

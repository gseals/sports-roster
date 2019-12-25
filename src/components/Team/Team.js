import React from 'react';

import PropTypes from 'prop-types';

import Player from '../Player/Player';

import authData from '../../helpers/data/authData';
import playerData from '../../helpers/data/playerData';

import './Team.scss';

class Team extends React.Component {
  state = {
    players: [],
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

  render() {
    return (
      <div className="d-flex flex-wrap justify-content-between">
        {this.state.players.map((player) => (<Player key={player.id} player={player}/>))}
      </div>
    );
  }
}

export default Team;

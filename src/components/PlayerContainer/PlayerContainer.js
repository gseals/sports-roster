import React from 'react';

import PropTypes from 'prop-types';

import Player from '../Player/Player';

import authData from '../../helpers/data/authData';
import playerData from '../../helpers/data/playerData';

class PlayerContainer extends React.Component {
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
      <div>
        <Player />
      </div>
    );
  }
}

export default PlayerContainer;

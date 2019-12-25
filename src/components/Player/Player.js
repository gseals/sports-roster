import React from 'react';

import PropTypes from 'prop-types';

import playerShape from '../../helpers/propz/playerShape';

import './Player.scss';

class Player extends React.Component {
  static propTypes = {
    players: playerShape.playerShape,
  }

  render() {
    const { player } = this.props;

    return (
      <div className="Player col-4">
        <div className="card">
        <img src={player.imageUrl} className="card-img-top" alt="{player.name}"/>
          <div className="card-body">
            <h5 className="card-title">{player.name}</h5>
            <p className="card-text">{player.position}</p>
        </div>
      </div>
    </div>
    );
  }
}

export default Player;

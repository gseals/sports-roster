import React from 'react';

import PropTypes from 'prop-types';

import playerShape from '../../helpers/propz/playerShape';

import './Player.scss';

class Player extends React.Component {
  static propTypes = {
    player: playerShape.playerShape,
    deleteSinglePlayer: PropTypes.func,
    setEditMode: PropTypes.func,
    setPlayerToEdit: PropTypes.func,
  }

  setEditMode = (e) => {
    const { setEditMode, setPlayerToEdit, player } = this.props;
    e.preventDefault();
    setEditMode(true);
    setPlayerToEdit(player);
  }

  deleteSinglePlayerEvent = (e) => {
    e.preventDefault();
    const { deleteSinglePlayer, player } = this.props;
    deleteSinglePlayer(player.id);
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
            <div className="d-flex justify-content-between">
            <button className="btn btn-danger" onClick={this.deleteSinglePlayerEvent}>X</button>
            <button className="btn btn-info" onClick={this.setEditMode}>Edit</button>
            </div>
        </div>
      </div>
    </div>
    );
  }
}

export default Player;

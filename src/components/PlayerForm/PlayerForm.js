import React from 'react';

import PropTypes from 'prop-types';

import playerShape from '../../helpers/propz/playerShape';

import authData from '../../helpers/data/authData';

import './PlayerForm.scss';

class PlayerForm extends React.Component {
  static propTypes = {
    addPlayer: PropTypes.func,
  }

  state = {
    playerName: '',
    playerPosition: '',
    playerImage: '',
  }

  savePlayerEvent = (e) => {
    const { addPlayer } = this.props;

    e.preventDefault();
    const newPlayer = {
      name: this.state.playerName,
      position: this.state.playerPosition,
      imageUrl: this.state.playerImage,
      uid: authData.getUid(),
    };
    addPlayer(newPlayer);
    this.setState({ playerName: '', playerPosition: '', playerImage: '' });
  }

  nameChange = (e) => {
    e.preventDefault();
    this.setState({ playerName: e.target.value });
  }

  positionChange = (e) => {
    e.preventDefault();
    this.setState({ playerPosition: e.target.value });
  }

  imageChange = (e) => {
    e.preventDefault();
    this.setState({ playerImage: e.target.value });
  }

  render() {
    return (
        <form className='col-6 offset-3 PlayerForm'>
        <div className="form-group">
          <label className="text" htmlFor="player-name">Player Name:</label>
          <input
            type="text"
            className="form-control"
            id="player-name"
            placeholder="Enter player name"
            value={this.state.playerName}
            onChange={this.nameChange}
          />
        </div>
        <div className="form-group">
          <label className="text" htmlFor="player-position">Player Position:</label>
          <input
            type="text"
            className="form-control"
            id="player-position"
            placeholder="Enter player position"
            value={this.state.playerPosition}
            onChange={this.positionChange}
          />
        </div>
        <div className="form-group">
          <label className="text" htmlFor="player-image">Player Image:</label>
          <input
            type="text"
            className="form-control"
            id="player-image"
            placeholder="Enter player image"
            value={this.state.playerImage}
            onChange={this.imageChange}
          />
        </div>
        <button className="btn btn-secondary" onClick={this.savePlayerEvent}>Save Player</button>
        </form>
    );
  }
}

export default PlayerForm;

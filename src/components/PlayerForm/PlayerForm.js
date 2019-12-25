import React from 'react';

import PropTypes from 'prop-types';

import playerShape from '../../helpers/propz/playerShape';

import authData from '../../helpers/data/authData';

class PlayerForm extends React.Component {
  static propTypes = {
    addPlayer: PropTypes.func,
  }

  state = {
    playerName: '',
    playerPosition: '',
    playerImage: '',
  }

  savePlayerEvnt = (e) => {
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

  render() {
    return (
        <form className='col-6 offset-3 BoardForm'>
        <div className="form-group">
          <label htmlFor="order-name">Player Name:</label>
          <input
            type="text"
            className="form-control"
            id="board-name"
            placeholder="Enter player name"
            value={this.state.playerName}
            onChange={this.nameChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="description-name">Player Position:</label>
          <input
            type="text"
            className="form-control"
            id="board-description"
            placeholder="Enter player position"
            value={this.state.playerPosition}
            onChange={this.descriptionChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="description-name">Player Image:</label>
          <input
            type="text"
            className="form-control"
            id="board-description"
            placeholder="Enter player image"
            value={this.state.playerImage}
            onChange={this.descriptionChange}
          />
        </div>
        <button className="btn btn-secondary" onClick={this.saveBoardEvent}>Save Board</button>
        </form>
    );
  }
}

export default PlayerForm;

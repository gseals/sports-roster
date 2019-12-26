import React from 'react';

import PropTypes from 'prop-types';

import playerShape from '../../helpers/propz/playerShape';

import authData from '../../helpers/data/authData';

import './PlayerForm.scss';

class PlayerForm extends React.Component {
  static propTypes = {
    addPlayer: PropTypes.func,
    playerToEdit: playerShape.playerShape,
    editMode: PropTypes.bool,
    updatePlayers: PropTypes.func,
  }

  state = {
    name: '',
    position: '',
    imageUrl: '',
  }

  componentDidMount() {
    const { playerToEdit, editMode } = this.props;
    if (editMode) {
      this.setState({ name: playerToEdit.name, position: playerToEdit.position, imageUrl: playerToEdit.imageUrl });
    }
  }

  // componentDidUpdate(prevProps) {
  //   if ((prevProps.playerToEdit.id !== this.props.playerToEdit.id) && this.props.editMode) {
  //     this.setState({ name: this.props.playerToEdit.name, playerPoition: this.props.playerToEdit.position, imageUrl: this.props.playerToEdit.image });
  //   }
  // }

  savePlayerEvent = (e) => {
    const { addPlayer } = this.props;

    e.preventDefault();
    const newPlayer = {
      name: this.state.name,
      position: this.state.position,
      imageUrl: this.state.imageUrl,
      uid: authData.getUid(),
    };
    addPlayer(newPlayer);
    this.setState({ name: '', position: '', imageUrl: '' });
  }

  updatePlayerEvent = (e) => {
    e.preventDefault();
    const { updatePlayer, playerToEdit } = this.props;
    const updatedPlayer = {
      name: this.state.name,
      position: this.state.position,
      imageUrl: this.state.imageUrl,
      uid: playerToEdit.uid,
    };
    updatePlayer(playerToEdit.id, updatedPlayer);
  }

  nameChange = (e) => {
    e.preventDefault();
    this.setState({ name: e.target.value });
  }

  positionChange = (e) => {
    e.preventDefault();
    this.setState({ position: e.target.value });
  }

  imageChange = (e) => {
    e.preventDefault();
    this.setState({ imageUrl: e.target.value });
  }

  render() {
    const { editMode } = this.props;

    return (
        <form className='col-6 offset-3 PlayerForm'>
        <div className="form-group">
          <label className="text" htmlFor="player-name">Player Name:</label>
          <input
            type="text"
            className="form-control"
            id="player-name"
            placeholder="Enter player name"
            value={this.state.name}
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
            value={this.state.position}
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
            value={this.state.imageUrl}
            onChange={this.imageChange}
          />
        </div>
        {
          (editMode) ? (<button className="btn btn-warning" onClick={this.updatePlayerEvent}>Update Player</button>)
            : (<button className="btn btn-secondary" onClick={this.savePlayerEvent}>Save Player</button>)
        }
        </form>
    );
  }
}

export default PlayerForm;

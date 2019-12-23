import React from 'react';
import firebase from 'firebase/app';

import firebaseConnection from '../helpers/data/connection';
import Auth from '../components/Auth/Auth';

import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';

firebaseConnection();

class App extends React.Component {
  state = {
    authed: false,
  }

  componentDidMount() {
    this.removeListener = firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState ({ authed: true });
        } else {
          this.setState({ authed: false });
        }
      });
    }

    componentWillUnmount() {
      this.removeListener();
    }

    renderView = () => {
      const { authed } = this.state;
      if (!authed) {
        return(<Auth />);
      }
    }

    return (
      <div className="App">
      <MyNavBar authed={authed} />
      {
        this.renderView()
      }
    )

  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <button className='btn btn-danger'>This that test button</button>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;

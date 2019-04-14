import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import * as firebase from 'firebase'
import 'antd/dist/antd.min.css';
import App from './App';

var config = {
  apiKey: "AIzaSyANyS7cLKqNmARrV1RmeI9zZUnfyApLh-A",
  authDomain: "fajri-portfolio.firebaseapp.com",
  databaseURL: "https://fajri-portfolio.firebaseio.com",
  projectId: "fajri-portfolio",
  storageBucket: "fajri-portfolio.appspot.com",
  messagingSenderId: "718080219766"
};

firebase.initializeApp(config)

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();

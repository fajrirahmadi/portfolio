import React, { Component } from 'react';
import './App.css';
import Navbar from './component/Navbar';
import About from './component/About';
import Contact from './component/Contact';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

class App extends Component {

  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/about" component={About} /> 
          <Route path="/contact" component={Contact} /> 
          <Route path="/" component={Navbar} />
        </Switch>
      </BrowserRouter>
    )
  }
}

export default App;

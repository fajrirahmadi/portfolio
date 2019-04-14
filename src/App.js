import React, { Component } from 'react';
import Navbar from './component/Navbar';
import DetailPortfolio from './component/DetailPortfolio'
import { BrowserRouter, Switch, Route } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/detail-portfolio" component={DetailPortfolio} />
          <Route path="/" component={Navbar} />
        </Switch>
      </BrowserRouter>
    )
  }
}

export default App;

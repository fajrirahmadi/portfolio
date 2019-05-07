import React, { Component } from 'react';
import DetailPortfolio from './component/DetailPortfolio'
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './index.css';
import Home from './component/Home';
import Contact from "./component/Contact";
import About from "./component/About";

class App extends Component {

    constructor(props) {
        super(props)
        this.state =  {
            current: 'home'
        };
    }

    handleClick = (e) => {
        this.setState({
            current:e.key
        })
    }
    
    getRouterName = (name) => {
        this.setState({
            current: name
        });
    }

  render() {
    return (
        <Router>
            <Route path="/portfolio" component = {Contact} />
            <Route path="/detail-portfolio/:id" component = {DetailPortfolio} />
            <Route path="/about" component = {About} />
            <Route exact path="/" component = {Home} />
        </Router>
    )
  }
}

export default App;

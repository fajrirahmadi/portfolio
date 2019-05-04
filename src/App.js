import React, { Component } from 'react';
import DetailPortfolio from './component/DetailPortfolio'
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Layout, Menu } from 'antd';
import './index.css';
import Home from './component/Home';
import Contact from "./component/Contact";
import About from "./component/About";
import {Link} from 'react-router-dom'

const { Header, Content} = Layout;

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
        <BrowserRouter>
            <Switch>
                <Layout className="body">
                    <Header className="header">
                        <Menu
                        className="menu"
                        onClick={this.handleClick}
                        selectedKeys={[this.state.current]}
                        mode="horizontal">
                            <Menu.Item className="nav" key="home"><Link to={'/'}>Home</Link></Menu.Item>
                            <Menu.Item className="nav" key="portfolio"><Link to={'/portfolio'}>Portfolio</Link></Menu.Item>
                            <Menu.Item className="nav" key="about"><Link to={'/about'}>About</Link></Menu.Item>
                        </Menu>
                    </Header>
                    <Content>
                        <Route path="/portfolio" render={(props) => <Contact getRouterName={this.getRouterName} {...props} /> } />
                        <Route path="/detail-portfolio/:id" render={(props) => <DetailPortfolio getRouterName={this.getRouterName} {...props}  />} />
                        <Route path="/about" render={(props) => <About getRouterName={this.getRouterName} {...props} /> } />
                        <Route exact path="/" render={(props) => <Home getRouterName={this.getRouterName} {...props} /> } />
                    </Content>
                </Layout>
            </Switch>
        </BrowserRouter>
    )
  }
}

export default App;

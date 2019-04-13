import React, {Component} from "react";
import '../index.css';
import {Menu, Layout} from "antd";
import Links from './Footer';
import '../App.css';
import Home from './Home';
import Contact from "./Contact";
import About from "./About";

const { Header, Content} = Layout;

class Navbar extends Component {

    constructor(props) {
        super(props)
        this.state =  {
            current: 'home',
            component: <Home></Home>
        };
    }

    handleClick = (e) => {
        this.setState({
            current:e.key
        })
        switch(e.key) {
            case 'portfolio':
                this.setState({
                  component: <Contact></Contact>
                 });
            break;
            case 'home':
                this.setState({
                    component: <Home></Home>
               });
            break;
            case 'about':
                this.setState({
                    component: <About></About>
               });
            break;
            default:
                this.setState({
                    component: <Home></Home>
                });
            break;
        }
      }
    
      render() {
        return <div>
          <Header className="header">
            <Menu
              className="menu"
              onClick={this.handleClick}
              selectedKeys={[this.state.current]}
              mode="horizontal">
                <Menu.Item className="nav" key="home">Home</Menu.Item>
                <Menu.Item className="nav" key="portfolio">Portfolio</Menu.Item>
                <Menu.Item className="nav" key="about">About</Menu.Item>
            </Menu>
          </Header>
          <Content>
            {this.state.component}
          </Content>
          <Links />
        </div>
      }
}
export default Navbar;
import React, {Component} from "react";
import '../index.css';
import {Menu, Layout} from "antd";

const { Header} = Layout;

class Navbar extends Component {

    constructor(props) {
        super(props)
        this.state =  {

        };
    }
    
      render() {
        return <div>
          <Header className="header">
            <Menu
              className="menu"
              selectedKeys={[this.props.selectedNavbar]}
              mode="horizontal">
                <Menu.Item className="nav" key="home">
                  <a href='/'>Home</a>
                </Menu.Item>
                <Menu.Item className="nav" key="portfolio">
                  <a href='/portfolio'>Portfolio</a>
                </Menu.Item>
                <Menu.Item className="nav" key="about">
                  <a href='/about'>About</a>
                </Menu.Item>
            </Menu>
          </Header>
        </div>
      }
}
export default Navbar;
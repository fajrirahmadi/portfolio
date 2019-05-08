import React, {Component} from 'react';
import './index.css';
import Portfolio from './Portfolio';
import About from './About';
import Links from './Footer';

class Home extends Component {

    render (){
        return  <div>
                    <div className='content'>
                        <h1 className="title">Fajri Rahmadi</h1>
                        <h3 className="description">Native Android Developer</h3>
                    </div>
                    <Links />
                    <Portfolio/>
                    <About/>
                    <div className='footer'>
                        <h3 style={{color:'#fff'}}>Copyright &copy;2019 | This page created with Love by Fajri Rahmadi</h3>
                    </div>
                </div>
    }
}

export default Home;
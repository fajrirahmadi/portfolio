import React, {Component} from 'react';
import './index.css'
import Navbar from './Navbar';

class Home extends Component {

    render (){
        return  <div>
                    <Navbar selectedNavbar={'home'}/>
                    <div className='content'>
                        <h1 className="title">Fajri Rahmadi</h1>
                        <h3 className="description">Native Android Developer</h3>
                    </div>
                </div>
    }
}

export default Home;
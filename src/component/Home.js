import React, {Component} from 'react';
import './index.css';
import Portfolio from './Portfolio';
import About from './About';
import Links from './Footer';
import WorkExperience from './WorkExperience';
import { Divider , Avatar} from 'antd';
import Skill from './Skill';
import image from '../assets/image/profile_fajri.png'

class Home extends Component {

    render (){
        return  <div>
                    <div className='content'>
                        <Avatar size={128} src={image} />
                        <h1 className="title">Fajri Rahmadi</h1>
                        <h3 className="description">Native Android Developer</h3>
                    </div>
                    <Links />
                    <Divider/>
                    <About/>
                    <Divider/>
                    <WorkExperience/>
                    <Divider/>
                    <Portfolio/>
                    <Divider/>
                    <Skill/>
                    <div className='footer'>
                        <h3 style={{color:'#fff'}}>Copyright &copy;2019 | Fajri Rahmadi</h3>
                    </div>
                </div>
    }
}

export default Home;
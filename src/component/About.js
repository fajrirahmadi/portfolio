import React, {Component} from 'react';
import * as firebase from 'firebase';
import './index.css';
import Links from './Footer';

class About extends Component {

    constructor(props){
        super(props);
        this.state = {
          sajakList : []
        }
    }

    componentDidMount(){
        this.getListSajak();
        this.props.getRouterName('about');
    }

    getListSajak() {
        const mDatabase = firebase.database().ref().child('portfolio')
        mDatabase.on('child_changed', function(data) {
            console.log(data)
        })
    }

    render (){
        return  <div className='content-about'>
                    <h1 className='title'>It's About Me</h1>
                    <p className='p'>I am Fajri Rahmadi and just call me Fajri. I am 22 years old and I graduate from University of Indonesia at 2018. I interested on creating Android application. I started learn programming since I was at college. I learn C, python, Assembly, HTML, CSS, and Java. From college, I get basic programming like algorithm, data structure, modularization, and others.</p>
                    <p className='p'>I interested on android application and I learn how to create it individually. I remember that my first project is Restaurant Menu's and I install it in my phone, I was really excited at that moment. Then, I continue to explore about developing android application from component, integration, service API, and others.</p>
                    <p className='p'>I get my professional project at my third years as student of university. I learn new technology that help me until today, it was Firebase as a service. This technology was help me to fast development without think about service, because he provided it. Since this project, I always use my fast development apps using firebase. You can see my application using firebase in my portfolio page, I show there.</p>
                    <p className='p'>I work on company before my graduate day, PT Nostra Solusi Teknologi is my first company. I join as Android Developer and follow my top lead Mr. Sony Indrajid. He teach me how to make code readable, reusable, maintainable, and he show me many technology, I really proud of him. 8 month later, I quit my company and follow my way as Android Developer on Boost Indonesia. In this company, I learn about product, start from business requirement, journey, design, development, testing, and release a feature. It was my first time to work on my own product. And I am an Android Developer here until today.</p>
                    <p className='p'>I loved to discuss with you, you can contact me below</p>
                    <Links />
                </div>
    }
}

export default About;
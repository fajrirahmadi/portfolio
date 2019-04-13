import React, {Component} from 'react';
import * as firebase from 'firebase';
import './index.css';

class About extends Component {

    constructor(props){
        super(props);
        this.state = {
          sajakList : []
        }
    }

    componentDidMount(){
        this.getListSajak();
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
                    <p className='p'>Hi there, my name Fajri Rahmadi and just call me Fajri. I am 22 years old and this page will shown you about me.</p>
                    <p className='p'>I am an Android Native Developer who loved to code every thing what I need to become an apps, for example: I want to control my daily activity then I create apps name akoe where I can control my days, my financial, and my plan.</p>
                    <p className='p'>My hobbies is writing, poem and code was my loved type of writing. Then and create an apps that help me to enjoy my poem, my word, my GALAU life, and other. I call it Sajak Senja.</p>
                    <p className='p'>I love creating application since I was a collage student, when I create my first apps called Menu Masakan Padang. I love it, I enjoyed, and the most important reason is it free to learn.</p>
                </div>
    }
}

export default About;
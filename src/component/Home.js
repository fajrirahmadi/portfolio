import React, {Component} from 'react';
import * as firebase from 'firebase';
import './index.css'

class Home extends Component {

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
        return  <div className='content'>
                    <h1 className="title">Fajri Rahmadi</h1>
                    <h3 className="description">Native Android Developer</h3>
                </div>
    }
}

export default Home;
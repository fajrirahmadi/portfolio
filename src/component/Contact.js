import React, {Component} from 'react';
import * as firebase from 'firebase';
import SajakList from './SajakList';
import './index.css'

class Contact extends Component {

    constructor(){
        super();
        this.state = {
          sajakList : [],
          nama:'My Portfolio'
        }
    }

    componentDidMount() {
        const mDatabase = firebase.database().ref('/portfolio')
        mDatabase.once('value').then((snapshot) => {
            var returnArr = [];
            snapshot.forEach(function(childSnapshot) {
                returnArr.push(childSnapshot.val())
            });
            console.log(returnArr)
            this.setState({
                sajakList:returnArr
            })
        });
    }

    render (){
        return  <div className='content-portfolio'>
                    <h1 className='title'>{this.state.nama}</h1>
                    <SajakList sajaks={this.state.sajakList}/>
                </div>
    }
}

export default Contact;
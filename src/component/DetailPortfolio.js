import React, {Component} from 'react';
import * as firebase from 'firebase';
import './index.css'


class DetailPortfolio extends Component { 

    constructor() {
        super()
        this.state = {
            sajak: null
        }
    }

    componentDidMount() {
        const { id } = this.props.match.params

        firebase.database().ref('/portfolio/' + id).once('value').then((snapshot) => {
            console.log(snapshot)
            this.setState({
                
            })
        });
    }

    render() {
        return <div>
            <h1>Hai from detail</h1>
        </div>
    }
}

export default DetailPortfolio
import React, {Component} from 'react';
import * as firebase from 'firebase';
import './index.css'


class DetailPortfolio extends Component { 

    constructor(props) {
        super(props)
        this.state = {
            id: props.match.params.id,
            sajak: {}
        }
        console.log(this.props)
    }

    componentDidMount() {
        this.props.getRouterName('portfolio')
        firebase.database().ref('/portfolio/' + this.state.id).once('value').then((snapshot) => {
            console.log(this.state.id)
            console.log(snapshot.val())
            this.setState({
                sajak: snapshot.val()
            })
        });
    }

    render() {
        return  (<div className='content-detail-portfolio'>
                    <img className='image-large' alt="portfolio" src={this.state.sajak.image} />
                    <h1 style={{marginTop:36, fontSize:36}}><b>{this.state.sajak.title}</b></h1>
                    <p className='content-detail'>"{this.state.sajak.description}"</p>
                </div>)
    }
}

export default DetailPortfolio
import React, {Component} from 'react';
import * as firebase from 'firebase';
import { Card} from 'antd';
import { Row, Col } from 'react-flexbox-grid';
import './index.css'
import {Link} from 'react-router-dom'
import Navbar from './Navbar';

const { Meta } = Card;

class Contact extends Component {

    constructor(props){
        super(props);
        this.state = {
          sajakList : [],
          nama:'My Portfolio',
          title: '',
          description: '',
          image: ''
        }
    }

    componentDidMount() {
        const mDatabase = firebase.database().ref('/portfolio')
        mDatabase.once('value').then((snapshot) => {
            var returnArr = [];
            snapshot.forEach(function(childSnapshot) {
                returnArr.push(childSnapshot.val())
            });
            this.setState({
                sajakList:returnArr,
                title: returnArr[0].title,
                description: returnArr[0].description,
                image: returnArr[0].image
            })
        });
    }

    render (){
        return  (<div>
                    <Navbar selectedNavbar={'portfolio'}/>
                    <div className='content-portfolio'>
                        <h1 className='title'>{this.state.nama}</h1>
                        <div>
                            <Row>
                                {this.state.sajakList.map((sajak, index) => 
                                    <Col xs={12} sm={12} md={4} lg={3} key={index}>
                                        <Link to={`/detail-portfolio/${sajak.key}`}>
                                            <div style={{marginBottom:20}}>
                                                    <Card 
                                                        hoverable
                                                        cover={<img alt="portfolio" src={sajak.image} />}>
                                                        <Meta style={{textAlign:"justify"}}
                                                            title={sajak.title}
                                                            description={sajak.description}
                                                        />
                                                    </Card>
                                                </div>
                                        </Link>
                                        
                                    </Col>
                                )}
                            </Row>
                        </div>
                    </div>
                </div>)
    }
}

export default Contact;
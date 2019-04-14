import React, {Component} from 'react';
import * as firebase from 'firebase';
import { Card} from 'antd';
import { Row, Col } from 'react-flexbox-grid';
import './index.css'

const { Meta } = Card;

class Contact extends Component {

    constructor(){
        super();
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
        return  <div className='content-portfolio'>
                    <h1 className='title'>{this.state.nama}</h1>
                    <div>
                        <Card style={{marginBottom: 30}}>
                            <Row>
                                <Col span={24}>
                                    <img className='image-large' alt='sajak' src={this.state.image}/>
                                    <div>
                                        <h1>{this.state.title}</h1>
                                        <p style={{textAlign:"justify"}}>{this.state.description}</p>
                                    </div>
                                </Col>
                            </Row>
                        </Card>
                        
                        
                        
                        <Row>
                            {this.state.sajakList.map((sajak, index) => 
                                <Col xs={12} sm={12} md={4} lg={3} key={index}>
                                    <div onClick={() => this.handleClick(sajak)} style={{marginBottom:20}}>
                                        <Card hoverable
                                        cover={<img className='image-medium' alt="example" src={sajak.image} />}>
                                            <Meta style={{textAlign:"justify"}}
                                                title={sajak.title}
                                            />
                                        </Card>
                                    </div>
                                </Col>
                            )}
                        </Row>
                    </div>
                </div>
    }

    handleClick(sajak) {
        this.setState({
            title: sajak.title,
            description: sajak.description,
            image: sajak.image
        })
    }
}

export default Contact;
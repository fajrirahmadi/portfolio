import React, {Component} from 'react';
import * as firebase from 'firebase';
import { Card, Modal, Button} from 'antd';
import { Row, Col } from 'react-flexbox-grid';
import './index.css'

const { Meta } = Card;

class Contact extends Component {

    constructor(props){
        super(props);
        this.state = {
          sajakList : [],
          nama:'My Portfolio',
          title: '',
          description: '',
          image: '',
          visible: false
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
                    <div className='content-portfolio'>
                        <h1>{this.state.nama}</h1>
                        <div id='rounded-line-green'/>
                        <Modal
                            title={this.state.title}
                            visible={this.state.visible}
                            footer={[<Button key="back" onClick={this.handleOk}>Ok</Button>]}>
                            <p>{this.state.description}</p>
                        </Modal>
                        <Row>
                            {this.state.sajakList.map((sajak, index) => 
                                <Col xs={12} sm={12} md={6} lg={3}>
                                    <div style={{marginBottom:15}}>
                                        <Card 
                                        onClick = {() => this.handleClick(sajak)}
                                        hoverable
                                        cover={<img alt="portfolio" src={sajak.image}/>}>
                                            <Meta
                                                title={sajak.title}
                                            />
                                        </Card>
                                    </div>
                                </Col>
                            )}
                        </Row>
                    </div>
                </div>)
    }

    handleClick(sajak) {
        this.setState({
            title: sajak.title,
            description: sajak.description,
            image: sajak.image,
            visible:true
        })
    }

    handleOk = (e) => {
        console.log(e);
        this.setState({
          visible: false,
        });
      }
    
      handleCancel = (e) => {
        console.log(e);
        this.setState({
          visible: false,
        });
      }
}

export default Contact;
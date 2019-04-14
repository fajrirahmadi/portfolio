import React, {Component} from 'react';
import { Card} from 'antd';
import { Row, Col } from 'react-flexbox-grid';
import './index.css';

const { Meta } = Card;

class SajakList extends Component {

    constructor(props) {
        super(props)
        console.log(props.sajaks)
        this.state = {
            title:'',
            description:'',
            image:''
        }
    }

    render (){
        return  <div>
                    <div style={{marginBottom: 30}}>
                        <Card hoverable>
                            <Meta style={{textAlign:"justify"}}
                                title={this.state.title}
                                description={this.state.description}
                                avatar = {<img alt='sajak' src={this.state.image}/>}/>
                        </Card>
                    </div>
                    <Row>
                        {this.props.sajaks.map((sajak, index) => 
                            <Col xs={12} sm={12} md={4} lg={3} key={index}>
                                <div onClick={() => this.handleClick(sajak)} style={{marginBottom:20}}>
                                    <Card hoverable
                                    cover={<img alt="example" src={sajak.image} />}>
                                        <Meta style={{textAlign:"justify"}}
                                            title={sajak.title}
                                        />
                                    </Card>
                                </div>
                            </Col>
                        )}
                    </Row>
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

export default SajakList;
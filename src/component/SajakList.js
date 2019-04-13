import React, {Component} from 'react';
import { Card} from 'antd';
import { Row, Col } from 'react-flexbox-grid';
import './index.css';

const { Meta } = Card;

class SajakList extends Component {
    render (){
        return  <div>
                    <Row>
                        {this.props.sajaks.map((sajak, index) => 
                            <Col xs={6} sm={6} md={6} lg={3}>
                                <div style={{marginBottom:20}}>
                                    <Card hoverable
                                    cover={<img style={{ height: 500 }} alt="example" src={sajak.image} />}>
                                        <Meta style={{textAlign:"justify"}}
                                            title={sajak.title}
                                            description={sajak.description}/>
                                    </Card>
                                </div>
                            </Col>
                        )}
                    </Row>
                </div>
    }
}

export default SajakList;
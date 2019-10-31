import React, {Component} from 'react';
import './index.css';
import { Timeline, Icon} from 'antd';


class WorkExperience extends Component {

    render () {
        return (
            <div className='content-work-experience'>
                <h1>Work Experience</h1>
                <div id='rounded-line-green'/>
                <Timeline style={{maxWidth:700}}>
                    <Timeline.Item dot={<Icon type="clock-circle-o" style={{ fontSize: '20px' }} />}>
                        <b>2017</b>
                    </Timeline.Item>
                    <Timeline.Item color="green">
                        <h3>Student Internship - PT Aplikanusa Lintasarta</h3>
                        <p>Juny 2017 - August 2017</p>
                        <p><b>Division: </b>IT Support Application</p>
                        <p style={{textAlign:'justify'}}><b>Responsibility: </b>Recheck technical data of WAN device and monitor the service to make sure that there is no issue on the WAN.</p>
                    </Timeline.Item>
                    <Timeline.Item color="green">
                        <h3>Android Developer - Freelancer</h3>
                        <p>September 2017 - April 2018</p>
                        <p><b>Responsibility: </b>Create android application and deliver the apps base on project timeline.</p>
                    </Timeline.Item>
                    <Timeline.Item dot={<Icon type="clock-circle-o" style={{ fontSize: '20px' }} />}>
                        <b>2018</b>
                    </Timeline.Item>
                    <Timeline.Item color="green">
                        <h3>Android Developer - PT Nostra Solusi Technology</h3>
                        <p>February 2018 - December 2018</p>
                        <p><b>Division: </b>Android Team</p>
                        <p style={{textAlign:'justify'}}><b>Responsibility: </b>Create android application base on project requirement. I do my task base on trello card, I and team define the techniology used and create the feature as requirement.</p>
                        <p><b>Project: </b>Pegadaian Digital Syariah, Agen Pegadaian Syariah, FM Sales</p>
                    </Timeline.Item>
                    <Timeline.Item color="green">
                        <h3>Android Developer - PT Axiata Digital Service Indonesia</h3>
                        <p>December 2018 - Augustus 2019</p>
                        <p><b>Division: </b>Product &amp; Technology Marketing</p>
                        <p style={{textAlign:'justify'}}><b>Responsibility: </b>Create android application base on product requirement. I do my task base on priority release</p>
                        <p><b>Product: </b>Boost Penjual</p>
                    </Timeline.Item>
                    <Timeline.Item dot={<Icon type="clock-circle-o" style={{ fontSize: '20px' }} />}>
                        <b>2019</b>
                    </Timeline.Item>
                    <Timeline.Item color="green">
                        <h3>Product Engineer - PT Strongbee</h3>
                        <p>Augustus 2019 - Now</p>
                        <p><b>Division: </b>Mobile Developer Team</p>
                        <p style={{textAlign:'justify'}}><b>Responsibility: </b>Create android application base on product requirement every sprint, enhancement code, &amp; fixing bug</p>
                        <p><b>Product: </b>Strongbee Apps</p>
                    </Timeline.Item>
                </Timeline>
            </div>
        )
    }
}

export default WorkExperience;
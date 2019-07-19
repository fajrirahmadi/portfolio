import React, {Component} from 'react';
import * as firebase from 'firebase';
import './index.css';
import {Progress} from 'antd';
import { Timeline, Tabs} from 'antd';

const TabPane = Tabs.TabPane;

class Skill extends Component {

    constructor(props) {
        super(props)
        this.state = {
            skill:[]
        }
    }

    componentDidMount() {
        const mDatabase = firebase.database().ref('/skill')
        mDatabase.once('value').then((snapshot) => {
            var returnArr = [];
            snapshot.forEach(function(childSnapshot) {
                returnArr.push(childSnapshot.val())
            });
            this.setState({
                skill:returnArr
            });
            console.log(returnArr)
        });
    }

    render () {
        return (
            <div className='content-skill'>
                <h1>Skill Competencies</h1>
                <div id='rounded-line-green'/>
                <div>
                    <Tabs defaultActiveKey="0" tabPosition="left">
                        {this.state.skill.map((skil, index) => {
                            this.getTabPaneSkill(skil, index)
                        })}
                    </Tabs>
                </div>
            </div>
        );
    }

    getTabPaneSkill(skill, index) {
        return (
            <TabPane tab={skill.title} key={index}>
                <Timeline style={{maxWidth:300, paddingRight:16}}>
                    {Object.values(skill.value).map((data) => {
                        return (
                            <Timeline.Item>
                                <b>{data.title}</b>
                                <Progress type='line' percent={data.progress} successPercent={data.progress}/>
                            </Timeline.Item>
                        )
                    })}
                </Timeline>
            </TabPane>
        )
    }
}

export default Skill;
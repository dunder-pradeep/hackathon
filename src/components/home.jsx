import React, { Component } from 'react';

const image = require('../static/bg.PNG');

class Home extends Component {
    state = {  }
    render() { 
        return (
            <div className='homeContainer' >
                <img src={image} className='bgimage' alt="" />
                <div className="content" >
                    <h2>What is Study Planner?</h2>
                    <div>
                        graph planner is a scheduler and analyser of the courses available in the internet.
                        <ul>
                            <li>You search (built using elasticsearch) and choose a course of your wish.</li>
                            <br />
                            <li>This app builds a graph model of the pre-requisites required that you can plan with.</li>
                        </ul>
                        Features:
                        <ul>
                            <li>ElasticSearch -> for building and hosting the searchengine in cloud.</li>
                            <br />
                            <li>around 10,000 documents of courses with appropriate datafields.</li>
                            <br />
                            <li>Reactjs, react-graph-vis,.etc</li>
                        </ul>
                    </div>
                </div>
                
            </div>
         );
    }
}
 
export default Home;
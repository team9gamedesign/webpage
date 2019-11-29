import React, { Component } from 'react';
import './project.css';
import Card from '../components/Card';
import image from '../images/project.jpg';

class Project extends Component {

    render() {
        return (
            <Card title='The project'>
                <div className='projectContent'>
                    <div className='projectTextWrapper'>
                        <div className='projectText'>
                            This project is part of the <a href='https://www.kth.se/student/kurser/kurs/DH2650/?l=en'>DH2650 Computer Game Design</a> course at the <i>KTH Royal Institute of Technology</i>. During the course of six weeks, <b>The Conquer of Visulon</b> has been developed from nothing more than an idea to a full fledged concept, using knowledge gathered from the industry and active discussions in the class.
                        </div>
                        <div className='projectText'>
                            More specifically, the project included creating a working <b>Game Demo</b>, a <b>Video Trailer</b>, this <b>Website</b>, as well as a <b>Game Design Document (GDD)</b>. All of these things were created by us as a group, and we worked in close contact with each other to make sure everybody was happy with the results.
                        </div>
                        <div className='projectText'>
                            The <b>GDD</b> includes all manners of information regarding the game. Not only is the game concept presented, but things like the development platform and our marketing plan were described and motivated. By writing this document, we learned about all aspects of creating a game, not only the implementing bits.
                        </div>
                        <div className='projectText'>
                            The <b>Game</b> was implemented using <i>Unity</i>. Each group member focused on different parts of the development, resulting in an efficent work flow and several inputs into the game. It was very satisfactory when all the pieces were merged together, and we were able to present a working demo that showcased our game concept!
                        </div>
                    </div>
                    <div className='projectImageWrapper'>
                        <img className='projectImage' src={image} alt='' />
                    </div>
                </div>
            </Card >
        );
    }
}

export default Project;
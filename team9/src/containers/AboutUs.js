import React, { Component } from 'react';
import './aboutus.css';
import Card from '../components/Card';
import chantal from '../images/chantal.jpg';
import fredrik from '../images/fredrik.jpeg';

class AboutUs extends Component {
    render() {
        return (
            <Card title='About us'>
                <div className='aboutUsContent'>
                    <div className='aboutUsPerson'>
                        <img className='aboutUsImage' src={chantal} alt='' />
                        <div className='aboutUsName'>{'CHANTAL HUNDSCHEID'}</div>
                        <div className='aboutUsText'>I am a second-year Master student of Human Technology Interaction at the Technical University of Eindhoven, in the Netherlands. Currently, I am studying abroad at KTH. My focus was on designing the different User Interface elements, as well as writing the GDD and managing the project.</div>
                    </div>
                    <div className='aboutUsPerson'>
                        <img className='aboutUsImage' src={fredrik} alt='' />
                        <div className='aboutUsName'>{'FREDRIK OMSTEDT'}</div>
                        <div className='aboutUsText'>I am studying my final year of the Computer Science Master's programme at KTH. In this project, my focus has been on designing and implementing the classes. I have also been responsible for maintaining our GitHub, and I have written a lot in the GDD.</div>
                    </div>
                    <div className='aboutUsPerson'>
                        <img className='aboutUsImage' src={fredrik} alt='' />
                        <div className='aboutUsName'>{'MARCUS WERLINDER'}</div>
                        <div className='aboutUsText'></div>
                    </div>
                    <div className='aboutUsPerson'>
                        <img className='aboutUsImage' src={fredrik} alt='' />
                        <div className='aboutUsName'>{'MARKUS WINROTH'}</div>
                        <div className='aboutUsText'></div>
                    </div>
                </div>
            </Card>
        );
    }
}

export default AboutUs;

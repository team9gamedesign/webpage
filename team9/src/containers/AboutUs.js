import React, { Component } from 'react';
import './aboutus.css';
import Card from '../components/Card';
import fredrik from '../images/fredrik.jpeg';

class AboutUs extends Component {
    render() {
        return (
            <Card title='About us'>
                <div className='aboutUsContent'>
                    <div className='aboutUsPerson'>
                        <img className='aboutUsImage' src={fredrik} alt='' />
                        <div className='aboutUsName'>{'CHANTAL HUNDSCHEID'}</div>
                        <div className='aboutUsText'></div>
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

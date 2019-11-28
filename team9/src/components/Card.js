import React, { Component } from 'react';
import './card.css';

class Card extends Component {

    render() {
        return (
            <div className='card'>
                <div className='cardTitle'>
                    {this.props.title.toUpperCase()}
                </div>
                {this.props.children}
            </div>
        );
    }
}

export default Card;
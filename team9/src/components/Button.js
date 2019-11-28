import React, { Component } from 'react';
import './button.css';

class Button extends Component {

    itemIsSelected = () => {
        return this.props.itemId == this.props.selectedId;
    }

    handleClick = () => {
        this.props.setSelected(this.props.itemId);
    }

    render() {
        return (
            <div
                class={'button ' + (this.itemIsSelected() ? 'active' : '')}
                onClick={this.handleClick}
            >
                {this.props.text.toUpperCase()}
            </div>
        );
    }
}

export default Button;
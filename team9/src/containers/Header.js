import React, { Component } from 'react';
import './header.css';
import Button from '../components/Button';

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedId: 0
        }
    }

    setSelected = (id) => {
        this.setState({
            selectedId: id
        });
    }

    render() {
        return (
            <div class='header'>
                <div class='title'>The Conquer of Visulon</div>
                <div class='links'>
                    <Button
                        text={'The Game'}
                        itemId={0}
                        selectedId={this.state.selectedId}
                        setSelected={this.setSelected}
                    />
                    <Button
                        text={'Project'}
                        itemId={1}
                        selectedId={this.state.selectedId}
                        setSelected={this.setSelected}
                    />
                    <Button
                        text={'About Us'}
                        itemId={2}
                        selectedId={this.state.selectedId}
                        setSelected={this.setSelected}
                    />
                    <Button
                        text={'Contact'}
                        itemId={3}
                        selectedId={this.state.selectedId}
                        setSelected={this.setSelected}
                    />
                </div>
            </div >
        );
    }
}

export default Header;
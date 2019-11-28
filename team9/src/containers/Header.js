import React, { Component } from 'react';
import './header.css';
import Button from '../components/Button';

class Header extends Component {
    render() {
        return (
            <div className='header'>
                <div className='headerTitle'>THE CONQUER OF VISULON</div>
                <div className='headerLinks'>
                    <Button
                        text={'The Game'}
                        itemId={0}
                        selectedId={this.props.selectedId}
                        setSelected={this.props.setSelected}
                    />
                    <Button
                        text={'Project'}
                        itemId={1}
                        selectedId={this.props.selectedId}
                        setSelected={this.props.setSelected}
                    />
                    <Button
                        text={'About Us'}
                        itemId={2}
                        selectedId={this.props.selectedId}
                        setSelected={this.props.setSelected}
                    />
                    <Button
                        text={'Contact'}
                        itemId={3}
                        selectedId={this.props.selectedId}
                        setSelected={this.props.setSelected}
                    />
                </div>
            </div >
        );
    }
}

export default Header;
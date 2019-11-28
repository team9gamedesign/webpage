import React from 'react';
import './App.css';
import Header from './containers/Header';
import Game from './containers/Game';
import Project from './containers/Project';
import AboutUs from './containers/AboutUs';

class App extends React.Component {
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
            <div className='wrapper'>
                <div className='headerWrapper'>
                    <Header selectedId={this.state.selectedId} setSelected={this.setSelected} />
                </div>
                <div className='contentWrapper'>
                    {this.state.selectedId === 0 &&
                        <Game />
                    }
                    {this.state.selectedId === 1 &&
                        <Project />
                    }
                    {this.state.selectedId === 2 &&
                        <AboutUs />
                    }
                </div>
            </div>
        );
    }
}

export default App;

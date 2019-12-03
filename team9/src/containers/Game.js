import React, { Component } from 'react';
import './game.css';
import Card from '../components/Card';

class Game extends Component {

    render() {
        return (
            <Card title='The game'>
                <div className='gameContent'>
                    <div className='gameVideoWrapper'>
                        <iframe
                            className='gameVideo'
                            src='https://www.youtube.com/embed/rYzcywiFkC0'
                            frameBorder='0'
                            allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture'
                            allowFullScreen
                        />
                    </div>
                    <div className='gameTextWrapper'>
                        <div className='gameTextTitle'>{'THE CONQUER OF VISULON'}</div>
                        <div className='gameText'>
                            <b>Ziria</b>. A planet of technological marvels. The <b>Zirians</b> loved crafting, tinkering and creating, but the consequences of their actions went unnoticed. A cataclysmic event, <b>The Desolation</b>, commenced the mass extinction of the planet. In a last effort, the <b>Zirians</b> pulled all their resources together to create <b>The City in Space</b>, a new home for their species. Still looking fiercely for ways to satisfy their crafting needs, the <b>Zirians</b> became a race of marauders, travelling from planet to planet to steal their resources, no matter who is in their way. Their <b>City in Space</b> expands, while the rest of the galaxy suffers...

                        </div>
                        <div className='gameText'>
                            <b>The Conquer of Visulon</b> is a 3D class based Hack 'n Slash game. Take control of one of several classes, such as the <b>Gun Mage</b>, in your quest to conquer the galaxy for its resources. Level up your character in order to gain new, powerful abilities and combine these abilities with items found on your travels to wreak havoc in the ranks of the enemies. Utilize the resources stolen from the planets you visit by expanding and improving <b>The City in Space</b>, giving you access to mighty items and augmentations!
                        </div>
                        <div className='gameText'>
                            <b>The Conquer of Visulon</b> releases on <i>Steam</i> for <i>Windows</i>, Linux and <i>OS X</i> the <b>First of December 2020</b>.
                        </div>
                    </div>
                </div>
            </Card >
        );
    }
}

export default Game;
import React from 'react';
import './Hemisphere.css'
import NothernImg from './images/northernimg.png';
import SouthernImg from './images/southernimg.jpg';

const hemisphereConfig = {
    Nothern : {
        text : 'From Nothern Hemisphere',
        picture: NothernImg
    },
    Southern : {
        text : 'From Southern Hemisphere',
        picture: SouthernImg
    }
}

const HemisphereDisplay = ( {latitude} ) => {

    const Hemisphere = latitude > 0 ? 'Nothern' : 'Southern';
    const { text, picture } = hemisphereConfig[Hemisphere]
    
    return(
    <div className={Hemisphere}>
        <div className='ui raised text container segment'>
            <div className='image'>
                <img src={picture} alt='Hemisphere'/>
            </div>
            <div className='ui teal bottom attached label'>
                <h1> {text} </h1>
            </div>
        </div>    
    </div>
    )
}

export default HemisphereDisplay;
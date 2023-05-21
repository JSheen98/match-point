import React from 'react';
import 'semantic-ui-react';
import './css/styles.css';


const Events = () => {
    return (
        <div className="ui stackable three column grid events">

            <div className="column event">
                <div className='SportLabel'>
                    <h1>Basketball</h1>
                    <button className='ui button inverted gray massive'>🏀</button>
                </div>
            </div>
            <div className="column event">
                <div className='SportLabel'>
                    <h1>Baseball</h1>
                    <button className='ui button inverted gray massive'>⚾</button>
                </div>
            </div>
            <div className="column event">
                <div className='SportLabel'>
                    <h1>Soccer/Football</h1>
                    <button className='ui button inverted gray massive'>⚽🥅</button>
                </div>
            </div>
            <div className="column event">
                <div className='SportLabel'>
                    <h1>American Football</h1>
                    <button className='ui button inverted gray massive'>🏈</button>
                </div>
            </div>
            <div className="column event">
                <div className='SportLabel'>
                    <h1>Other</h1>
                    <button className='ui button inverted gray massive'>⛳</button>
                </div>
            </div>


        </div>








    )
};


export default Events;
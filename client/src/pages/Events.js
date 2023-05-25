import {React} from 'react';
import {useNavigate} from 'react-router-dom';
import 'semantic-ui-react';
import './css/styles.css';

// Inline styles
const styles = {
    lime: {
        backgroundColor: 'rgb(65, 226, 173)',
        borderStyle: 'solid',
        borderWidth: '5px',
        borderColor: 'black',
    }
}

const Events = () => {
    // These functions navigate the sport pages
    const navigate = useNavigate();

    const navigateToBball = () => {
        navigate('/basketball')
    };

    const navigateToBaseball = () => {
        navigate('/baseball')
    };

    const navigateToSoccer = () => {
        navigate('/soccer')
    };

    const navigateToFootball = () => {
        navigate('/football')
    };

    const navigateToOther = () => {
        navigate('/others')
    };

    // HTML with above functionality
    return (
        <div className="ui stackable three column grid events">

            <div className="column event">
                <div className='SportLabel' style={styles.lime}>
                    <h1>Basketball</h1>
                    <button onClick={navigateToBball} style={styles.black}   className='ui button massive'>🏀</button>
                </div>
            </div>
            <div className="column event">
                <div className='SportLabel' style={styles.lime}>
                    <h1>Baseball</h1>
                    <button onClick={navigateToBaseball} style={styles.black}   className='ui button massive'>⚾</button>
                </div>
            </div>
            <div className="column event">
                <div className='SportLabel' style={styles.lime}>
                    <h1>Soccer/Football</h1>
                    <button onClick={navigateToSoccer} style={styles.black}   className='ui button massive'>⚽🥅</button>
                </div>
            </div>
            <div className="column event">
                <div className='SportLabel' style={styles.lime}>
                    <h1>American Football</h1>
                    <button onClick={navigateToFootball} style={styles.black}  className='ui button massive'>🏈</button>
                </div>
            </div>
            <div className="column event">
                <div className='SportLabel' style={styles.lime}>
                    <h1>Other</h1>
                    <button onClick={navigateToOther} style={styles.black} className='ui button massive'>⛳</button>
                </div>
            </div>


        </div>








    )
};


export default Events;
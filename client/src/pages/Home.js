import React from 'react';
import './css/styles.css';
import Auth from '../utils/auth';
import EventList from '../components/EventList';


const styles = {
    lime: {
        backgroundColor: 'rgb(65, 226, 173)',
        borderStyle: 'solid',
        borderWidth: '5px',
        borderColor: 'black',
    },
    black: {
        color: 'black'
    },
    limes: {
        backgroundColor: 'rgb(65, 226, 173)',
        borderStyle: 'solid',
        borderWidth: '5px',
        borderColor: 'black',
        width: 'fit-content',
        padding: '5px',
        marginBottom: '15px'
    }, center: {
        display: 'flex',
        justifyContent: 'center'
    },
}

const Home = () => {
    //Navigations

    const navigateToEventsPage = () => {
        window.location.href = '/events'
    };
    const navigateToAddEvent = () => {
        Auth.loggedIn() ?

            (window.location.href = '/event') :
            (window.location.href = '/login')

    };
    const navigateToAddTeam = () => {
        Auth.loggedIn() ?
            (window.location.href = '/Team') :
            (window.location.href = '/login')
    };


    return (
        <section>
            <div className="ui two column centered grid events">
                <div className="four column centered row eventers ">
                    <div className="column eventers">
                        <button onClick={navigateToEventsPage} style={styles.lime} className="ui button massive">
                            EVENT PAGES
                        </button>
                    </div>
                    <div className="column eventers">

                        <div class="ui buttons">
                            <button onClick={navigateToAddEvent} style={styles.lime} className="ui button massive">ADD EVENT</button>
                            <div className=" ore or" data-text="or"></div>
                            <button onClick={navigateToAddTeam} style={styles.lime} className="ui button  massive">ADD TEAM</button>
                        </div>

                    </div>
                </div>
            </div>

            <div  className="column ">
                <div style={styles.center}>
                <h1 style={styles.limes}>Todays Events!</h1>
                </div>
                <div > 
                <EventList />
                </div>
            </div>

        </section>
    )

};

export default Home;

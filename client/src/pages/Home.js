import React from 'react';
import {useNavigate} from 'react-router-dom';
import './css/styles.css';


const styles = {
    lime: {
        backgroundColor: 'rgb(65, 226, 173)',
        borderStyle: 'solid',
        borderWidth: '5px',
        borderColor: 'black',
    }
}

const Home = () => {
//Navigations
    const navigate = useNavigate();

    const navigateToEventsPage= () => {
        navigate('/events')
    };
    const navigateToAddEvent= () => {
        navigate('/event')
    };
    const navigateToAddTeam= () => {
        navigate('/team')
    };


    return (
        <section>
        <div className="ui two column centered grid events">
            <div className="four column centered row eventers ">
                <div className="column eventers">
                    <button  onClick={navigateToEventsPage} style={styles.lime} className="ui button massive">
                        EVENT PAGES
                    </button>
                </div>
                <div className="column eventers">
                    
                <div class="ui buttons">
  <button onClick={navigateToAddEvent} style={styles.lime} className="ui button massive">ADD EVENT</button>
  <div class=" or ore" data-text="or"></div>
  <button onClick={navigateToAddTeam} style={styles.lime} className="ui button  massive">ADD TEAM</button>
</div>
                   
                </div>
            </div>
            <div className="column ">
                All Today's Events
            </div>
        </div>
        </section>
    )

};

export default Home;
import React from 'react';
<<<<<<< HEAD
<<<<<<< HEAD
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
        navigate('/eventform')
    };
    const navigateToAddTeam= () => {
        navigate('/teamform')
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
=======
=======
>>>>>>> 2d5e2224369508134ad97e7b5c8de8177791fdc0
import HomePage from '../components/HomePage';

const Home = () => {
    return (
        <>
          <HomePage />
        </>
    )
}

<<<<<<< HEAD
>>>>>>> 2d5e2224369508134ad97e7b5c8de8177791fdc0
=======
>>>>>>> 2d5e2224369508134ad97e7b5c8de8177791fdc0

export default Home;
import React from 'react';
import 'semantic-ui-react'
import '../css/styles.css'


const Other = () => {
    return (

        <div className="ui stackable one column grid menu center">
            <h1 className=''>Other Sport Events</h1>
            <div></div>
            <button className='ui left labeled icon button' onclick="history.back()"> <i class="backward icon"></i>Back</button>
  <div></div>
  <button className='ui right labeled icon button' onclick="/"> <i className="forward icon"></i>New Event</button>
            <div className="column ">
                <h1>Today</h1>
                <div className="event">
                    <h2>event</h2>
                </div>
            </div>
            <div className="column ">
                <h1>Upcoming </h1>
                <div className=" event">
                    <h2>event</h2>
                </div>
            </div>
            



        </div>


    )




};

export default Other
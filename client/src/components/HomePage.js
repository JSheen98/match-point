import React, { useState } from 'react';
import { Form } from "react-router-dom";
import EventForm from '../components/EventForm';
import EventList from '../components/EventList';

const HomePage = () => {

    return (
        <div>
            <EventForm />
            {/* <EventList /> */}
        </div>
    )
} 

export default HomePage;
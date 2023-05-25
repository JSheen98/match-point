import React from 'react';
import EventForm from '../components/EventForm';
import EventList from '../components/EventList';

// HompePage component
const HomePage = () => {

    return (
        <div>
            <EventForm />
            <EventList />
        </div>
    )
} 

export default HomePage;
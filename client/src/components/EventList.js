import React, { useState } from 'react';
import React from 'react';
import { Card, Segment } from 'semantic-ui-react';
import { useQuery } from '@apollo/client'
import { QUERY_EVENT } from '../utils/queries';
// import { events } from '../../../server/models/User';
const EventList = () => {
    const { data } = useQuery(QUERY_EVENT)
    // const [event, setEvent] = useState([]);
    const eventData = data?.events || {}
    // const addEventItem = (item) => {
    //     console.log(item);
    //     if (!item.text) {
    //         return;
    //     }
    //     const newEvent = [item, ...event];
    //     console.log(newEvent);

// function EventList() {
//     const [event, setEvent] = useState([]);

//     const addEventItem = (item) => {
//         console.log(item);
//         if (!item.text) {
//             return;
//         }
//         const newEvent = [item, ...event];
//         console.log(newEvent);

//         setEvent(newEvent);
//     };

    // if (loading) {
    //     return <h2>Loading Profile...</h2>
    // }

    return (
        <>
            <h1>Upcoming Events</h1>
            {eventData.map((eventListItem) => (
                <Segment style={{ overflow: 'auto', maxHeight: 400 }}>
                    <div className="ui three stackable cards">
                        <Card style={{ backgroundColor: 'lightblue' }} className="ui fluid card">
                            <Card.Header style={{ backgroundColor: '', padding: '10px', marginTop: '10px' }} className='ui centered blue'>{eventListItem.name}</Card.Header>
                            <Card.Content className="content">
                                <p><strong>{eventListItem.sport}</strong></p>
                                <p><strong>{eventListItem.location}</strong></p>
                                <p><strong>{eventListItem.date}</strong></p>
                            </Card.Content>
                        </Card>
                    </div>
                </Segment>
))}
        </>
    )
}

export default EventList;
import React, { useState, useEffect } from 'react';
import { useQuery, useMutation } from '@apollo/client'
import { Card, Segment } from 'semantic-ui-react';
import { QUERY_EVENT } from '../utils/queries';

function EventList() {
    const [event, setEvent] = useState([]);
    const { loading, data } = useQuery(QUERY_EVENT)
    const eventData = data?.events || []
    useEffect(() => {
      console.log(data)
        
    }, [data])
    

    const addEventItem = (item) => {
        console.log(item);
        if (!item.text) {
            return;
        }
        const newEvent = [item, ...event];
        console.log(newEvent);

        setEvent(newEvent);
    };

    if (loading) {
        return <h2>Loading Profile...</h2>
    }

    return (
        <>
            {/* <h1>Upcoming Events</h1> */}
            {eventData
            .filter((EventListItem) => {
                const eventDate = new Date(EventListItem.date);
                const today = new Date();
                return (
                    eventDate.getFullYear() === today.getFullYear() &&
                    eventDate.getMonth() === today.getMonth() &&
                    eventDate.getDate() === today.getDate()
                );
            })
            .map((EventListItem) => {
                return (
                    <Segment key={EventListItem._id} style={{ overflow: 'auto', maxHeight: 400 }}>
                    <div className="ui three stackable cards">
                        <Card style={{ backgroundColor: 'lightblue' }} className="ui fluid card">
                            <Card.Header style={{ padding: '10px', marginTop: '10px' }} className='ui centered blue'>{EventListItem.name}</Card.Header>
                            <Card.Content className="content">
                                <p><strong>Sport: {EventListItem.sport}</strong></p>
                                <p><strong>Location: {EventListItem.location}</strong></p>
                                <p><strong>Date: {new Date(EventListItem.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</strong></p>
                            </Card.Content>
                        </Card>
                    </div>
        </Segment>
            )
        })}
    </>
    )

}

export default EventList;

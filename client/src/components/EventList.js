import React, { useState, useEffect } from 'react';
import { useQuery, useMutation } from '@apollo/client'
import { Card, Segment } from 'semantic-ui-react';
import { QUERY_EVENT } from '../utils/queries';


const styles = {
    lime: {
        backgroundColor: 'rgb(65, 226, 173)',
        borderStyle: 'solid',
        borderWidth: '5px',
        borderColor: 'black',
        margin: '25px',
    },
    black: {
        color: 'black'
    },
    bord: {
        borderStyle: 'solid',
        borderWidth: '5px',
        borderColor: 'black',
       marginTop: '5px'
    },
    cards: {
        overflow: 'auto',
        maxHeight: 400,
        backgroundColor: 'rgb(65, 226, 173)',
        display: 'flex',
        justifyContent: 'center'

    },

}


// Event List component
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
                    <Segment key={EventListItem._id} style={{ overflow: 'auto', maxHeight: 400, backgroundColor:'rgb(65, 226, 173)', }}>
                    <div style={styles.cards} className="ui three stackable cards">
                        <Card style={{ backgroundColor: 'white', color: 'black' }} className="ui fluid card">
                            <Card.Header style={{ padding: '20px', backgroundColor: 'black' , color: 'rgb(65, 226, 173)' }} className='ui centered'>{EventListItem.name}</Card.Header>
                            <Card.Content className="content">
                                <p><strong>Sport: {EventListItem.sport}</strong></p>
                                <p><strong>Location: {EventListItem.location}</strong></p>
                                <p><strong>Date: {new Date(EventListItem.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</strong></p>
                                <p><strong>Created by: {EventListItem.eventCreator}</strong></p>
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

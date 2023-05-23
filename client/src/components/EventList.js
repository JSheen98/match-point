import React, { useState } from 'react';
import { Card, Segment } from 'semantic-ui-react';

function EventList() {
    const [event, setEvent] = useState([]);

    const addEventItem = (item) => {
        console.log(item);
        if (!item.text) {
            return;
        }
        const newEvent = [item, ...event];
        console.log(newEvent);

        setEvent(newEvent);
    };

    return (
        <Segment style={{overflow: 'auto', maxHeight: 400 }}>
        <div class="ui three stackable cards">
            <Card style={{ backgroundColor: 'lightblue' }} class="ui fluid card">
                <Card.Header style={{ backgroundColor: '', padding: '10px', marginTop: '10px' }} className='ui centered blue'>Event Name</Card.Header>
                <Card.Content class="content">
                    <p><strong>Sport:</strong></p>
                    <p><strong>Description:</strong></p>
                    <p><strong>Location:</strong></p>
                </Card.Content>
            </Card>
            <Card style={{ backgroundColor: 'lightblue' }} class="ui fluid card">
                <Card.Header style={{ backgroundColor: '', padding: '10px', marginTop: '10px' }} className='ui centered blue'>Event Name</Card.Header>
                <Card.Content class="content">
                    <p><strong>Sport:</strong></p>
                    <p><strong>Description:</strong></p>
                    <p><strong>Location:</strong></p>
                </Card.Content>
            </Card>
            <Card style={{ backgroundColor: 'lightblue' }} class="ui fluid card">
                <Card.Header style={{ backgroundColor: '', padding: '10px', marginTop: '10px' }} className='ui centered blue'>Event Name</Card.Header>
                <Card.Content class="content">
                    <p><strong>Sport:</strong></p>
                    <p><strong>Description:</strong></p>
                    <p><strong>Location:</strong></p>
                </Card.Content>
            </Card>
        </div>
        </Segment>
    )

}

export default EventList;
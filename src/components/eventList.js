import React, { useState } from 'react';

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
}
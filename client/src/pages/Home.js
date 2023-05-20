import React, { useState } from 'react';
import { Form } from "react-router-dom";
import EventForm from '../components/EventForm';

import 'react-semantic-ui-datepickers/dist/react-semantic-ui-datepickers.css';
import { Divider } from 'semantic-ui-react';
import { Router } from 'express';

// TODO event form (left side 30-40% width) (Tom)
const EventFormContainer = EventForm([
    {
        path: "/",
        element: <EventForm />
    }
])

// TODO event render (right side 70-60% width) (Saul)


// TODO event 5 day listing (Ben)



export default EventFormContainer
import React, { useState } from 'react';
import { Button, Form } from 'semantic-ui-react';
import { useMutation } from '@apollo/client';
import { ADD_EVENT } from '../utils/mutations';
import DatePicker from "react-datepicker";
import Auth from '../utils/auth'
import "react-datepicker/dist/react-datepicker.css";
// import DatePicker from 'react-date-picker';
// import SemanticDatepicker from 'react-semantic-ui-datepickers';
// import 'react-semantic-ui-datepickers/dist/react-semantic-ui-datepickers.css';

// minDate is supposed to set a minimum date the user cannot go past when choosing the Event date.
// comment out this const and the "minDate" line of the picker if there are issues.
// will need to set a filter of some kind to prevent older events from rendering on homepage otherwise.
// const minDate = new Date(date('Min date', new Date(currentDate)));



const EventForm = () => {
    const [formInput, setFormInput] = useState({name: '', sport: '', location: '', date: ''})
    const [create] = useMutation(ADD_EVENT)

    const handleDateChange = (date) => {
        // console.log(date)
        setFormInput({ ...formInput, date: date })
    }
    // console.log(formInput)

    const handleChange = (e) => {
        const { name, value } = e.target
        setFormInput({ ...formInput, [name]: value })
    }

    const handleFormSubmit = async (e) => {
        e.preventDefault()
        console.log("submitting form")
        console.log(formInput)
        try {
            const { data } = await create({
                variables: { ...formInput }
            })
            console.log(formInput)
            // Auth.login(data.create.token)
        } catch (err) {
            console.error(err)
        }

        setFormInput({
            name: '',
            sport: '',
            location: '',
            date: ''
        })
    }

    return (
        <Form onSubmit={handleFormSubmit}>
        <Form.Field>
            <Form.Input
                value={formInput.name}
                onChange={handleChange}
                type='text'
                name='name'
                placeholder='e.g. Basketball @ Rec'
                label="Event Name"
            />
        </Form.Field>

        <Form.Field>
            <Form.Input
                value={formInput.sport}
                onChange={handleChange}
                type='text'
                name='sport'
                placeholder='e.g. Backetball'
                label="sport"
            />
        </Form.Field>

        <Form.Field>
            <Form.Input
                value={formInput.location}
                onChange={handleChange}
                type='text'
                name='location'
                placeholder='e.g. 123 Address Rd'
                label="location"
            />
        </Form.Field>  
{/* For date, might need dropdown calendar. */}
{/* TOOL: https://www.npmjs.com/package/react-semantic-ui-datepickers */}
        
        <Form.Group width="equals">
            <DatePicker
                selected={formInput.date} 
                onChange={((date) => handleDateChange(date))}
                showTimeSelect
                dateFormat="Pp"
            />
        </Form.Group>
      

    {/* //in case we need to include the code that snapshots the user's contact info*/}
        {/* <Form.Field>
            <Form.Input
                value={formInput.username}
                onChange={handleChange}
                type='text'
                name='name'
                placeholder='e.g. User1'
                label="Username"
            />
        </Form.Field>
        <Form.Field>
            <Form.Input
                value={formInput.email}
                onChange={handleChange}
                type='email'
                name='email'
                placeholder='example@email.com'
                label="Email"
            />
        </Form.Field>
        <Form.Field>
            <Form.Input
                value={formInput.phoneNumber}
                onChange={handleChange}
                type='number'
                name='phoneNumber'
                placeholder='1-800-555-5555'
                label="Phone Number"
            />
        </Form.Field> */}
        <Button type='submit'>Submit</Button>
    </Form>
    )
}

export default EventForm;
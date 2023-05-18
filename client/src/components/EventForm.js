import React, { useState } from 'react';
import { Button, Form } from 'semantic-ui-react';
import { useMutation } from '@apollo/client';
import { ADD_EVENT } from '../utils/mutations';
import SemanticDatepicker from 'react-semantic-ui-datepickers';
import 'react-semantic-ui-datepickers/dist/react-semantic-ui-datepickers.css';


// comment out this const and the "minDate" line of the picker if there are issues
const minDate = new Date(date('Min date', new Date(currentDate)));


const EventForm = () => {
    const [formInput, setFormInput] = useState({ name: '', date: '', time: '', team1: '', team2: '', username: '', email: '', phone:''})
    const [create, { error }] = useMutation(ADD_EVENT)

    const handleChange = (e) => {
        const { name, value } = e.target
        setFormInput({ ...formInput, [name]: value })
    }

    const handleFormSubmit = async (e) => {
        e.preventDefault()

        // try {
        //     const { data } = await create({
        //         variables: { ...formInput }
        //     })

        //     Auth.login(data.signup.token)
        // } catch (err) {
        //     console.error(err)
        // }

        setFormInput({
            name: '',
            date: '',
            time: '',
            team1: '',
            team2: '',
            username: '',
            email: '',
            phone:''
        })
    }

    return (
        <Form onSubmit={handleFormSubmit}>
        <Form.Field>
            <Form.Input
                value={formInput.name}
                onChange={handleChange}
                type='text'
                name='eventname'
                placeholder='e.g. Basketball'
                label="Event Name"
            />
        </Form.Field>
{/* For date, might need dropdown calendar. */}
{/* TOOL: https://www.npmjs.com/package/react-semantic-ui-datepickers */}
        
        <Form.Group width="equals">
            <SemanticDatepicker
                error={error}
                label="Initial date"
                id="initialDate"
                onChange={onChange}
                required
                minDate={minDate}
                />
        </Form.Group>
        
        <Form.Field>
            <Form.Input
                value={formInput.time}
                onChange={handleChange}

            />
        </Form.Field>

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
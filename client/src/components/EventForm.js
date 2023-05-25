import React, { useState } from 'react'
// import Select from 'react-select';
import { Button, Form } from 'semantic-ui-react'
import { useMutation } from '@apollo/client'
import { ADD_EVENT } from '../utils/mutations'
import DatePicker from "react-datepicker"
import "react-datepicker/dist/react-datepicker.css"
import Auth from '../utils/auth'

// import DatePicker from 'react-date-picker';
// import SemanticDatepicker from 'react-semantic-ui-datepickers';
// import 'react-semantic-ui-datepickers/dist/react-semantic-ui-datepickers.css';

// Inline styles
const styles = {
    lime: {
        backgroundColor: 'rgb(65, 226, 173)',
        borderStyle: 'solid',
        borderWidth: '5px',
        borderColor: 'black',
    },
    bord: {
        borderStyle: 'solid',
        borderWidth: '5px',
        borderColor: 'black',
    }
}

// Sport options for Select
const options = [
    { value: 'Baseball', text: 'Baseball' },
    { value: 'Basketball', text: 'Basketball' },
    { value: 'Bowling', text: 'Bowling' },
    { value: 'Boxing', text: 'Boxing' },
    { value: 'Disc Golf', text: 'Disc Golf' },
    { value: 'Football', text: 'Football' },
    { value: 'Golf', text: 'Golf' },
    { value: 'Hockey', text: 'Hockey' },
    { value: 'Lacrosse', text: 'Lacrosse' },
    { value: 'Pickleball', text: 'Pickleball' },
    { value: 'Racquetball', text: 'Racquetball' },
    { value: 'Rugbee', text: 'Rugbee' },
    { value: 'Soccer', text: 'Soccer' },
    { value: 'Softball', text: 'Softball' },
    { value: 'Tennis', text: 'Tennis' },
    { value: 'Volleyball', text: 'Volleyball' },
    { value: 'Underwater Basketweaving', text: 'Underwater Basketweaving' },
    { value: 'Other', text: 'Other' }
]

// Event Form component
const EventForm = () => {
    // sets all these input fields to blank strings
    const [formInput, setFormInput] = useState({ name: '', sport: '', location: '', date: '', url: 'test' })
    const [create] = useMutation(ADD_EVENT)

    // handles date change in the date picker
    const handleDateChange = (date) => {
        setFormInput({ ...formInput, date: date })
    }

    // handles change in text fields
    const handleChange = (e) => {
        const { name, value } = e.target
        setFormInput({ ...formInput, [name]: value })
    }

    // handles change in the select type field
    const selectChange = (e) => {
        setFormInput({ ...formInput, sport: e.target.textContent })
    }

    // Sets windo location to the /profile endpoint
    const profila = () => {
        window.location.href = '/profile'
    }

    // handles form submission
    const handleFormSubmit = async (e) => {
        e.preventDefault()

        // calls our create mutation with the given form input, and logged in user's data
        try {
            const { data } = await create({
                variables: {
                    ...formInput,
                    eventCreator: Auth.getProfile().data.username
                }
            })
        } catch (err) {
            console.error(err)
        }

        // sets fields back to empty strings
        setFormInput({
            name: '',
            sport: '',
            location: '',
            date: ''
        })
    }

    // HTML with given react functions
    return (
        <div
            style={styles.lime}
            id="event-form"
        // style={styles.container}
        >
            <Form onSubmit={handleFormSubmit}>
                <Form.Field>
                    <Form.Input
                        value={formInput.name}
                        onChange={handleChange}
                        style={styles.bord}
                        type='text'
                        name='name'
                        placeholder='e.g. Basketball @ Rec'
                        label="Event Name"
                    />
                </Form.Field>

                {/* <Form.Field> */}
                <Form.Select
                    value={formInput.sport}
                    onChange={selectChange}
                    style={styles.bord}
                    // type='text'
                    name='sport'
                    // placeholder='e.g. Basketball'
                    label="Sport"
                    // className="ui selection dropdown"
                    options={options}
                />
                {/* </Form.Field> */}

                <Form.Field>
                    <Form.Input
                        value={formInput.location}
                        onChange={handleChange}
                        style={styles.bord}
                        type='text'
                        name='location'
                        placeholder='e.g. 123 Address Rd'
                        label="Location"
                    />
                </Form.Field>

                <span>Pick Date & Time</span>
                <Form.Group style={styles.bord} width="equals">
                    <DatePicker
                        selected={formInput.date}
                        onChange={((date) => handleDateChange(date))}
                        showTimeSelect
                        dateFormat="MMMM eeee d, yyyy h:mm aa"
                    />
                </Form.Group>

                <Button className='ui black' onClick={profila} type='submit'>Submit</Button>
            </Form>
        </div>
    )
}

export default EventForm;
import React, { useState } from 'react';
import { Button, Form } from 'semantic-ui-react';
import { useMutation } from '@apollo/client';
import { ADD_EVENT } from '../utils/mutations';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";


// const styles = {
//     container: {
//         margin: '25px'
//     }
// }

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
        // console.log(formInput)
        try {
            const { data } = await create({
                variables: { ...formInput }
            })
            // console.log(formInput)
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
        <div id="event-form"
        // style={styles.container}
        >
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
                        label="Sport"
                    />
                </Form.Field>

                <Form.Field>
                    <Form.Input
                        value={formInput.location}
                        onChange={handleChange}
                        type='text'
                        name='location'
                        placeholder='e.g. 123 Address Rd'
                        label="Location"
                    />
                </Form.Field>  
                <span>Pick Date & Time</span>
                <Form.Group width="equals">
                    <DatePicker
                        selected={formInput.date} 
                        onChange={((date) => handleDateChange(date))}
                        showTimeSelect
                        dateFormat="Pp"
                    />
                </Form.Group>
        
                <Button type='submit'>Submit</Button>
            </Form>
        </div>
    )
}

export default EventForm;
import React, { useState } from 'react'
// import Select from 'react-select';
import { Button, Form } from 'semantic-ui-react'
import { useMutation } from '@apollo/client'
import { ADD_EVENT } from '../utils/mutations'
import DatePicker from "react-datepicker"
// import Auth from '../utils/auth'
import "react-datepicker/dist/react-datepicker.css"
import { useParams } from "react-router-dom"
import Auth from '../utils/auth'

// import DatePicker from 'react-date-picker';
// import SemanticDatepicker from 'react-semantic-ui-datepickers';
// import 'react-semantic-ui-datepickers/dist/react-semantic-ui-datepickers.css';



// const styles = {
//     container: {
//         margin: '4%',
//         width: '500px'
//     }
// }

const options = [
    {value: 'Baseball', text: 'Baseball'},
    {value: 'Basketball', text: 'Basketball'},
    {value: 'Bowling', text: 'Bowling'},
    {value: 'Boxing', text: 'Boxing'},
    {value: 'Disc Golf', text: 'Disc Golf'},
    {value: 'Football', text: 'Football'},
    {value: 'Golf', text: 'Golf'},
    {value: 'Hockey', text: 'Hockey'},
    {value: 'Lacrosse', text: 'Lacrosse'},
    {value: 'Pickleball', text: 'Pickleball'},
    {value: 'Racquetball', text: 'Racquetball'},
    {value: 'Rugbee', text: 'Rugbee'},
    {value: 'Soccer', text: 'Soccer'},
    {value: 'Softball', text: 'Softball'},
    {value: 'Tennis', text: 'Tennis'},
    {value: 'Volleyball', text: 'Volleyball'},
    {value: 'Underwater Basketweaving', text: 'Underwater Basketweaving'},
    {value: 'Other', text: 'Other'}
]

const EventForm = () => {
    const { id } = useParams()
    const [formInput, setFormInput] = useState({ name: '', sport: '', location: '', date: '', url: 'test' })
    const [create] = useMutation(ADD_EVENT)

    const handleDateChange = (date) => {
        console.log(date)
        setFormInput({ ...formInput, date: date })
    }
    // console.log(formInput)

    const handleChange = (e) => {
        const { name, value } = e.target
        setFormInput({ ...formInput, [name]: value })
    }

    const selectChange = (e) => {
        setFormInput({ ...formInput, sport: e.target.textContent })
    }

    const handleFormSubmit = async (e) => {
        e.preventDefault()

        try {
            const { data } = await create({
                variables: {
                    ...formInput,
                    eventCreator: Auth.getProfile().data.username
                }
            })
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

        <div 
        id="event-form"
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

                {/* <Form.Field> */}
                    <Form.Select
                        value={formInput.sport}
                        onChange={selectChange}
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
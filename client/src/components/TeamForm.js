import React, { useState } from 'react'
import { Button, Form } from 'semantic-ui-react'
import { useMutation } from '@apollo/client'
import { ADD_TEAM } from '../utils/mutations'
import Auth from '../utils/auth'

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


// TODO: set up validation, maybe disable submit button until input is filled?

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

const TeamForm = () => {
    const [formInput, setFormInput] = useState({ name: '', sport: '', description: '' })
    const [addTeam, { error }] = useMutation(ADD_TEAM)

    const handleChange = (e) => {
        const { name, value } = e.target
        setFormInput({ ...formInput, [name]: value })
    }

    const selectChange = (e) => {
        setFormInput({ ...formInput, sport: e.target.textContent })
    }

    const profila = () => {
        window.location.href= '/profile'
    }

    const handleFormSubmit = async (e) => {
        e.preventDefault()

        try {
            const { data } = await addTeam({
                variables: {
                    ...formInput,
                    teamCreator: Auth.getProfile().data.username
                }
            })
            // console.log("Team added: ", data.addTeam)
        } catch (err) {
            console.error(err)
        }

        setFormInput({
            name: '',
            sport: '',
            description: ''
        })
    }

    return (
        <div style={styles.lime} id='event-form'>
            <h1>New Team</h1>
        <Form onSubmit={handleFormSubmit}>
            <Form.Field>
                <Form.Input
                    value={formInput.name}
                    onChange={handleChange}
                    style={styles.bord}
                    type='text'
                    name='name'
                    placeholder='Team name'
                    label="Name"
                />
            </Form.Field>
            <Form.Field>
                <Form.Select
                    value={formInput.sport}
                    onChange={selectChange}
                    style={styles.bord}
                    // type='text'
                    name='sport'
                    // placeholder='Sport'
                    label="Sport"
                    options={options}
                />
            </Form.Field>
            <Form.Field>
                <Form.TextArea
                    value={formInput.description}
                    onChange={handleChange}
                    style={styles.bord}
                    name='description'
                    placeholder='Describe what level of competition you are looking for'
                    label="Description"
                />
            </Form.Field>
            <Button className='ui black' onClick={profila} style={styles.bord} disabled={!Object.values(formInput).every(value => value)}>Submit</Button>

        </Form>
        </div>
    )
}

export default TeamForm;

import React, { useState } from 'react'
import { Button, Form } from 'semantic-ui-react'
import { useMutation } from '@apollo/client'
import { ADD_TEAM } from '../utils/mutations'
import Auth from '../utils/auth'

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
        <div id='event-form'>
        <Form onSubmit={handleFormSubmit}>
            <Form.Field>
                <Form.Input
                    value={formInput.name}
                    onChange={handleChange}
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
                    name='description'
                    placeholder='Describe what level of competition you are looking for'
                    label="Description"
                />
            </Form.Field>
            <Button disabled={!Object.values(formInput).every(value => value)}>Submit</Button>

        </Form>
        </div>
    )
}

export default TeamForm;

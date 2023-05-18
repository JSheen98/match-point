import React, { useState } from 'react';
import { Button, Form } from 'semantic-ui-react'
import { useMutation } from '@apollo/client'
import gql from '@apollo/client/gql'

// TODO: set up validation, maybe disable submit button until input is filled?

const ADD_TEAM = gql`
  mutation AddTeam($name: String!, $sport: String!, $description: String!) {
    addTeam(name: $name, sport: $sport, description: $description) {
      _id
      name
      sport
      description
    }
  }
`;

const TeamForm = () => {
    const [formInput, setFormInput] = useState({ name: '', sport: '', description: '' })
    const [addTeam, { error }] = useMutation(ADD_TEAM)

    const handleChange = (e) => {
        const { name, value } = e.target
        setFormInput({ ...formInput, [name]: value })
    }

    const handleFormSubmit = async (e) => {
        e.preventDefault()

        try {
            const { data } = await addTeam({
                variables: { ...formInput }
            })
            console.log("Team added: ", data.addTeam);
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
                <Form.Input
                    value={formInput.sport}
                    onChange={handleChange}
                    type='text'
                    name='sport'
                    placeholder='Sport'
                    label="Sport"
                />
            </Form.Field>
            <Form.Field>
                <Form.TextArea
                    value={formInput.description}
                    onChange={handleChange}
                    name='description'
                    placeholder='Describe the team'
                    label="Description"
                />
            </Form.Field>
            <Button type='submit'>Submit</Button>
        </Form>
    )
}

export default TeamForm;

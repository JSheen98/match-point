import React, { useState } from 'react';
import { Button, Form } from 'semantic-ui-react'
import { useMutation } from '@apollo/client'
import { LOGIN } from '../utils/mutations'
import Auth from '../utils/auth'

// TODO: set up validation, maybe disable submit button until input is filled?

const LoginForm = () => {
    const [formInput, setFormInput] = useState({ email: '', password: '' })
    const [login, { error }] = useMutation(LOGIN)

    const handleChange = (e) => {
        const { name, value } = e.target
        setFormInput({ ...formInput, [name]: value })
    }

    const handleFormSubmit = async (e) => {
        e.preventDefault()

        try {
            const { data } = await login({
                variables: { ...formInput }
            })

            Auth.login(data.login.token)
        } catch (err) {
            console.error(err)
        }

        setFormInput({
            email: '',
            password: ''
        })
    }

    return (
        <Form onSubmit={handleFormSubmit}>
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
                    value={formInput.password}
                    onChange={handleChange}
                    type='password'
                    name='password'
                    placeholder='Password'
                    label="Password"
                />
            </Form.Field>
            <Button type='submit'>Submit</Button>
        </Form>
    )
}

export default LoginForm
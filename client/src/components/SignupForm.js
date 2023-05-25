import React, { useState } from 'react';
import { Button, Form } from 'semantic-ui-react'
import { useMutation } from '@apollo/client'
import { ADD_USER } from '../utils/mutations'
import Auth from '../utils/auth'

const styles = {
    lime: {
        backgroundColor: 'rgb(65, 226, 173)',
        borderStyle: 'solid',
        borderWidth: '5px',
        borderColor: 'black',
        margin: '25px',
    },
    black: {
        color: 'black'
    },
    bord: {
        borderStyle: 'solid',
        borderWidth: '5px',
        borderColor: 'black',
    }
}


const SignupForm = () => {
    const [formInput, setFormInput] = useState({ username: '', email: '', password: '', phoneNumber: ''})
    const [errors, setErrors] = useState({})

    const [addUser, { error, data }] = useMutation(ADD_USER)

    const handleChange = (e) => {
        const { name, value } = e.target
        setFormInput({ ...formInput, [name]: value })
    }

    const handleFormSubmit = async (e) => {
        e.preventDefault()

        // Eamil/Password validation
        const validationErrors = {}
        if (formInput.password.length < 5) {
            validationErrors.password = 'Password must be at least 5 characters long'
        }
        if (!isValidEmail(formInput.email)) {
            validationErrors.email = 'Invalid email format'
        }

        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors)
            return
        }

        try {
            const { data } = await addUser({
                variables: { ...formInput }
            })
            
            Auth.login(data.addUser.token)
        } catch (err) {
            console.error(err)
        }

        setFormInput({
            username: '',
            email: '',
            password: '',
            phoneNumber: ''
        })
    }

    const isValidEmail = (email) => {
        // Returned message
        return email.includes('@')
    }

    return (
        <div style={styles.lime}>
            <h1> New account:</h1>
            <Form onSubmit={handleFormSubmit}>
                <Form.Field>
                    <Form.Input
                        value={formInput.username}
                        onChange={handleChange}
                        style={styles.bord}
                        type='text'
                        name='username'
                        placeholder='e.g. newUser1'
                        label="Username"
                    />
                </Form.Field>
                <Form.Field>
                    <Form.Input
                        value={formInput.email}
                        onChange={handleChange}
                        style={styles.bord}
                        type='email'
                        name='email'
                        placeholder='example@email.com'
                        label="Email"
                        error={errors.email} 
                    />
                    {errors.email && <p>{errors.email}</p>}
                </Form.Field>
                <Form.Field>
                    <Form.Input
                        value={formInput.password}
                        onChange={handleChange}
                        style={styles.bord}
                        type='password'
                        name='password'
                        label="Password"
                        error={errors.password} 
                    />
                    {errors.password && <p>{errors.password}</p>}
                </Form.Field>
                <Form.Field>
                    <Form.Input
                        value={formInput.phoneNumber}
                        onChange={handleChange}
                        style={styles.bord}
                        type='number'
                        name='phoneNumber'
                        placeholder='1-800-555-5555'
                        label="Phone Number"
                    />
                </Form.Field>
                <Button className='ui black' disabled={!(formInput.username && formInput.email && formInput.password)} style={styles.bord} type='submit'>Submit</Button>
            </Form>
        </div>
    )
}

export default SignupForm

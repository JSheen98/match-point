import React, { useState } from 'react';
import { Button, Form } from 'semantic-ui-react'
import { useMutation } from '@apollo/client'
import { LOGIN } from '../utils/mutations'
import Auth from '../utils/auth'


// TODO: set up validation, error messaging?


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
        <div style={styles.lime}>
            <h1>Login to make teams, events or view your profile!</h1>
            <h4>New account? <a href='/signup' style={styles.black}>click here</a></h4>
            <Form onSubmit={handleFormSubmit}>
                <Form.Field>
                    <Form.Input
                        value={formInput.email}
                        onChange={handleChange}
                        style={styles.bord}
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
                        style={styles.bord}
                        type='password'
                        name='password'
                        label="Password" 
                        error={error ? 'Invalid email or password' : null}
                    />
                </Form.Field>
                {error && <p>{error.message}</p>}
                <Button className='ui black' disabled={!(formInput.email && formInput.password)} style={styles.bord} type='submit'>Submit</Button>
            </Form>
        </div>
    )
}

export default LoginForm
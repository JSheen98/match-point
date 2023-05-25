import React from 'react'
import { useQuery, useMutation } from '@apollo/client'
import { QUERY_LOGGED_IN } from '../utils/queries'
import Auth from '../utils/auth'
import { Card, Grid, GridRow, Button } from 'semantic-ui-react'
import { DELETE_EVENT, DELETE_TEAM } from '../utils/mutations'
import { useParams } from "react-router-dom"

// Inline styles
const styles = {
    profileCard: {
        marginTop: '30px',
        marginBottom: '50'
    },
    eventCard: {
        margin: '10px'
    },
    eventContainer: {
        marginTop: '20px',
        borderRadius: '4px'
    },
    button: {
        marginBottom: '5px'
    },
    text: {
        color: 'rgb(65, 226, 173)'
    }
}

// Profile container component
const ProfileContainer = () => {
    const { loading, data } = useQuery(QUERY_LOGGED_IN)
    const userData = data?.me || {}
    const [deleteEvent, { deleteEventError }] = useMutation(DELETE_EVENT)
    const [deleteTeam, { deleteTeamError }] = useMutation(DELETE_TEAM)
    const { id } = useParams()

    // handles deletion of user's teams
    const handleDeleteTeam = async (teamId) => {
        // Auth verification
        const token = Auth.loggedIn() ? Auth.getToken() : null

        if (!token) {
            return false
        }

        try {
            // deletes the team by id, and removes the username from the team
            const { data } = await deleteTeam({
                variables: { 
                    teamId,
                    teamCreator: Auth.getProfile().data.username
                }
            })
        } catch (err) {
            console.error(err)
        }
    }

    // handles deletion of user's events
    const handleDeleteEvent = async (eventId) => {
        // auth verification
        const token = Auth.loggedIn() ? Auth.getToken() : null

        if (!token) {
            return false
        }

        try {
            // deletes the event by id, and removes the username from the event
            const { data } = await deleteEvent({
                variables: {
                    eventId, 
                    eventCreator: Auth.getProfile().data.username
                }
            })
        } catch (err) {
            console.error(err)
        }
    }

    // If the profile page is loading, we display this <h2>
    if (loading) {
        return <h2 style={styles.card}>Loading Profile...</h2>
    }

    // HTML with above functionality
    return (
        <div>
            <div className='ui centered card' style={styles.profileCard}>
                <Card.Content>
                    <h1 style={styles.text}  className='ui header centered'>Profile</h1>
                    <p><strong>Username:</strong> {userData.username}</p>
                    <p><strong>Email:</strong> {userData.email}</p>
                    <p><strong>Phone Number:</strong> {userData.phoneNumber}</p>
                    <Card.Meta>
                        <span className='date'>Joined on {userData.createdAt}</span>
                    </Card.Meta>
                </Card.Content>
            </div>
            <div className='ui container' style={styles.eventContainer}>
                <h2 style={styles.text}  className='ui centered header'>Your Events</h2>
                <Grid style={styles.eventCard}>
                    <GridRow className='centered'>
                        {userData.events.map((event) => {
                            return (
                                <Card style={styles.eventCard}>
                                    <Card.Content>
                                        <Card.Header className='ui centered'>{event.name}</Card.Header>
                                        <p><strong>Location:</strong> {event.location}</p>
                                        <p><strong>Sport:</strong> {event.sport}</p>
                                        <p><strong>Date:</strong> {new Date(event.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
                                        <Grid className='ui centered'>
                                            <GridRow >
                                                <Button onClick={() => handleDeleteEvent(event._id)} className='ui red'>Delete</Button>
                                            </GridRow>
                                        </Grid>
                                    </Card.Content>
                                </Card>
                            )
                        })}
                    </GridRow>
                </Grid>
            </div>

            <div className='ui container' style={styles.eventContainer}>
                <h2 style={styles.text} className='ui centered header'>Your Teams</h2>
                <Grid style={styles.eventCard}>
                    <GridRow className='centered'>
                        {userData.teams.map((team) => {
                            return (
                                <Card style={styles.eventCard}>
                                    <Card.Content>
                                        <Card.Header className='ui centered'>{team.name}</Card.Header>
                                        <p><strong>Sport:</strong> {team.sport}</p>
                                        <p><strong>Description:</strong> {team.description}</p>
                                        <Grid className='ui centered'>
                                            <GridRow >
                                                <Button onClick={() => handleDeleteTeam(team._id)} className='ui red'>Delete</Button>
                                            </GridRow>
                                        </Grid>
                                    </Card.Content>
                                </Card>
                            )
                        })}
                    </GridRow>
                </Grid>
            </div>
        </div>
    )
}

export default ProfileContainer
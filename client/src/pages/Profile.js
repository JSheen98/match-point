import React from 'react'
import { useQuery, useMutation } from '@apollo/client'
import { QUERY_LOGGED_IN } from '../utils/queries'
// import { REMOVE_EVENT } from '../utils/mutations' //TODO: 
import Auth from '../utils/auth'
import { Card, Grid, GridRow, Button } from 'semantic-ui-react'
import { DELETE_EVENT, DELETE_TEAM } from '../utils/mutations'
import { useParams } from "react-router-dom"

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
}

const ProfileContainer = () => {
    const { loading, data } = useQuery(QUERY_LOGGED_IN)
    const userData = data?.me || {}
    const [deleteEvent, { deleteEventError }] = useMutation(DELETE_EVENT)
    const [deleteTeam, { deleteTeamError }] = useMutation(DELETE_TEAM)
    const { id } = useParams()

    const handleDeleteTeam = async (teamId) => {
        const token = Auth.loggedIn() ? Auth.getToken() : null

        if (!token) {
            return false
        }

        try {
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

    const handleDeleteEvent = async (eventId) => {
        const token = Auth.loggedIn() ? Auth.getToken() : null

        if (!token) {
            return false
        }

        try {
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

    if (loading) {
        return <h2 style={styles.card}>Loading Profile...</h2>
    }

    return (
        <div>
            <div className='ui centered card' style={styles.profileCard}>
                <Card.Content>
                    <h1 className='ui blue header centered'>Profile</h1>
                    <p><strong>Username:</strong> {userData.username}</p>
                    <p><strong>Email:</strong> {userData.email}</p>
                    <p><strong>Phone Number:</strong> {userData.phoneNumber}</p>
                    <Card.Meta>
                        <span className='date'>Joined on {userData.createdAt}</span>
                    </Card.Meta>
                </Card.Content>
            </div>
            <div className='ui container' style={styles.eventContainer}>
                <h2 className='ui centered blue header'>Your Events</h2>
                <Grid style={styles.eventCard}>
                    <GridRow className='centered'>
                        {userData.events.map((event) => {
                            return (
                                <Card style={styles.eventCard}>
                                    <Card.Content>
                                        <Card.Header className='ui centered'>{event.name}</Card.Header>
                                        <p><strong>Location:</strong> {event.location}</p>
                                        <p><strong>Sport:</strong> {event.sport}</p>
                                        <p><strong>Date:</strong> {event.date}</p>
                                        <Grid className='ui centered'>
                                            <GridRow >
                                                <Button onClick={() => handleDeleteEvent(event._id)} className='ui red'>Delete</Button>
                                                <Button className='ui yellow'>Update</Button>
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
                <h2 className='ui centered blue header'>Your Teams</h2>
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
                                                {/* <Button className='ui yellow'>Update</Button> */}
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
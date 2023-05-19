import React from 'react'
import { useQuery, useMutation } from '@apollo/client'
import { QUERY_USER } from '../utils/queries'
// import { REMOVE_EVENT } from '../utils/mutations' //TODO: 
import Auth from '../utils/auth'
import { Card, Grid, GridRow, Button } from 'semantic-ui-react'

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
    }
}

const ProfileContainer = () => {
    const { loading, data } = useQuery(QUERY_USER)
    const userData = data?.me || {}

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
                    {/* <p><strong>Phone Number:</strong> {userData.phoneNumber}</p> */}
                    <Card.Meta>
                        <span className='date'>Joined in {userData.dateJoined}</span>
                    </Card.Meta>
                </Card.Content>
            </div>
            <div className='ui container' style={styles.eventContainer}>
                <h2 className='ui centered blue header'>Your Events</h2>
                <Grid style={styles.eventCard}>
                    <GridRow className='centered'>
                        <Card style={styles.eventCard}>
                            <Card.Content>
                                <Card.Header className='ui centered'>Soccer Game</Card.Header>
                                <p><strong>Description:</strong> We will meet Friday, the 5th at the rec center @ around 4pm. If you have any questions, call me at 1(800)-555-5555</p>
                                <Grid className='ui centered'>
                                    <GridRow >
                                        <Button className='ui red'>Delete</Button>
                                        <Button className='ui yellow'>Update</Button>
                                    </GridRow>
                                </Grid>
                            </Card.Content>
                        </Card>
                    </GridRow>
                </Grid>
            </div>
            <div className='ui container' style={styles.eventContainer}>
                <h2 className='ui centered blue header'>Your Teams</h2>
                <Grid style={styles.eventCard}>
                    <GridRow className='centered'>
                        <Card style={styles.eventCard}>
                            <Card.Content>
                                <Card.Header className='ui centered'>{userData.team}</Card.Header>
                                <p><strong>Sport:</strong> {userData.team}</p>
                                <p><strong>Description:</strong> {userData.team}</p>
                                <Grid className='ui centered'>
                                    <GridRow >
                                        <Button className='ui red'>Delete</Button>
                                        <Button className='ui yellow'>Update</Button>
                                    </GridRow>
                                </Grid>
                            </Card.Content>
                        </Card>
                    </GridRow>
                </Grid>
            </div>
        </div>
    )
}

export default ProfileContainer
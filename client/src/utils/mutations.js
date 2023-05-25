import { gql } from "@apollo/client"

// frontend mutations
export const LOGIN = gql`
    mutation login($email: String!, $password: String!) {
        login(email: $email, password: $password) {
            token
            user {
                _id
                username
            }
        }
    }
`

export const ADD_USER = gql`
    mutation addUser($username: String!, $email: String!, $password: String!, $phoneNumber: String) {
        addUser(username: $username, email: $email, password: $password, phoneNumber: $phoneNumber) {
            token
            user {
                _id
                username
            }
        }
    }
`

export const ADD_TEAM = gql`
mutation addTeam($name: String!, $sport: String!, $description: String!) {
    addTeam(name: $name, sport: $sport, description: $description) {
        _id
        teamCreator
    }  
}
`

export const DELETE_TEAM = gql`
    mutation deleteTeam($teamId: ID!) {
        deleteTeam(teamId: $teamId) {
            _id
        }
    }
`

export const ADD_EVENT = gql`
    mutation addEvent($name: String!, $sport: String!, $location: String!, $date: String!, $url: String) {
        addEvent(name: $name, sport: $sport, location: $location, date: $date, url: $url) {
            _id
            url
            eventCreator
        }
    }
`

export const DELETE_EVENT = gql`
    mutation deleteEvent($eventId: ID!) {
        deleteEvent(eventId: $eventId) {
            _id
        }
    }
`
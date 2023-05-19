import { gql } from "@apollo/client"

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
    mutation addUser($username: String!, $email: String!, $password: String!, phoneNumber: String) {
        addUser(username: $username, email: $email, password: $password, phoneNumber: $phoneNumber) {
            token
            user {
                _id
                username
            }
        }
    }
`

export const ADD_EVENT = gql`
    mutation addEvent($name: String!, $date: String!, $time: String!, $sport: String! $team1: String!, $team2: String!, $username: String!, $email: String!, $phone: String!) {
        addEvent(name: $name, date: $date, time: $time, sport: $sport, team1: $team1, team2: $team2, username: $username, email: $email, phone: $phone) {
            
        }
    }
`
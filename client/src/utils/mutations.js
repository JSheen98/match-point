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
    mutation addUser($username: String!, $email: String!, $password: String!, $phoneNumber: Number!) {
        addUser(username: $username, email: $email, password: $password, phoneNumber: $phoneNumber) {
            token
            user {
                _id
                username
            }
        }
    }
`

// export const ADD_TEAM = gql`
// mutation addTeam($name: String!, $sport: String!, $events: ID!) {
//     addTeam(name: $name, sport: $sport, events: $events) 
//     }
// }

// `

// export const ADD_EVENT = gql`
// mutation addEvent($name: String!, $date: String!, $time: String!, $team1: ID!, $team2: ID! ){
//     addEvent(name: $name, date: $date, time: $time, team1: $team1, team2: $team2) {}
//     }
// }

// `
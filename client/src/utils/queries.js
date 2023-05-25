import { gql } from '@apollo/client';

// front end queries
export const QUERY_LOGGED_IN = gql`
{
    me {
        _id
        username
        email
        phoneNumber
        createdAt
        teams {
            _id
            name
            description
            sport
        }
        events {
           _id
           name
           date
           location
           date
           url
           sport
           eventCreator
        }
    }
}
`

export const QUERY_USER = gql`
query User($username: String!) {
    User(username: $username) {
        _id
        username
        email
        phonenumber
        team
    }
}
`;

export const QUERY_TEAM = gql`
query Team($name: String!) {
    Team(name: $name) {
        _id
        name
        sport
        events
    }
}
`;

export const QUERY_EVENT = gql`
{
    events {
        _id
        name
        sport
        location
        date
    }
}
`

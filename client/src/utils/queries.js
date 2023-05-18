import { gql } from '@apollo/client';

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
query Events($name: String!){
    Events(name: $name){
        _id
        name
        date
        time
        team1
        team2
    }
}
`;
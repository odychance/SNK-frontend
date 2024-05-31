import { gql } from "@apollo/client";

export const GET_USER = gql`
    query getUser {
        getUser {
            email
            id
            name
            lastname
        }
    }
`
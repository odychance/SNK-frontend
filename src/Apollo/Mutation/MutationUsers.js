import { gql } from "@apollo/client";

export const AUTHENTICATE_USER = gql`
    mutation authenticateUser($input: AuthenticateInput) {
            authenticateUser(input: $input) {
                token
        }
    }
`

export const NEW_USER = gql`
mutation newUSer($input: UserInput) {
    newUser(input: $input) {
      id
      name
      lastname
      email
      created
    } 
  }
`

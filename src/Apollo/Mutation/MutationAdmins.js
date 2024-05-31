import { gql } from "@apollo/client";

export const AUTHENTICATE_ADMIN = gql`
    mutation authenticateAdmin($input: AuthenticateInput) {
        authenticateAdmin(input: $input) {
            token
        }
    }
`

export const NEW_ADMIN = gql`
mutation newAdmin($input: AdminInput) {
    newAdmin(input: $input) {
      id
      name
      lastname
      email
      created
    }
  }
`

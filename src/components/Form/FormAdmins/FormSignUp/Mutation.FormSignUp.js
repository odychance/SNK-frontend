import { gql } from "@apollo/client";

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

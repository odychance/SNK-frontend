import { gql } from "@apollo/client";

export const NEW_TITAN = gql`
mutation newTitan($input: TitanInput) {
    newTitan(input: $input) {
      id
      name
      host 
      skill
      history
      picture
      uploadedBy
      created
    }
  }
`

export const UPDATE_TITAN = gql`
mutation updateTitan($id: ID!, $input: UpdateTitanInput) {
  updateTitan(id: $id, input: $input) {
    name
    host 
    skill
    history
    created
    uploadedBy
  }
}
`

export const DELETE_TITAN = gql`
mutation deleteTitan($id: ID!) {
  deleteTitan(id: $id)
}
`
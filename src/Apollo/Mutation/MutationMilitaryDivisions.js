import { gql } from "@apollo/client";

export const NEW_MILITARY_DIVISION = gql`
mutation newMilitaryDivision($input: MilitaryDivisionInput) {
    newMilitaryDivision(input: $input) {
      id
      division
      purpose
      picture
      uploadedBy
      created
    }
  }
`

export const DELETE_MILITARY_DIVISION = gql`
mutation deleteMilitaryDivision($id: ID!) {
    deleteMilitaryDivision(id: $id)
}
`

export const UPDATE_MILITARY_DIVISION = gql`
mutation updateMilitaryDivision($id: ID!, $input: updateMilitaryDivisionInput) {
  updateMilitaryDivision(id: $id, input: $input ) {
    id
    division
    purpose
    picture
    uploadedBy
    created
  }
}
`
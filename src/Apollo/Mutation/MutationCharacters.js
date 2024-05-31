import { gql } from "@apollo/client";

export const NEW_CHARACTER = gql`
    mutation newCharacter($input: CharacterInput) {
        newCharacter(input: $input) {
            id
            name
            titan
            skills
            picture
            history
            uploadedBy
        }
    }
`

export const DELETE_CHARACTER = gql`
    mutation deleteCharacter($id: ID!) {
        deleteCharacter(id: $id)
    
    }
` 

export const UPDATE_CHARACTER = gql`
    mutation updateCharacter($id: ID!, $input: UpdateCharacterInput) {
        updateCharacter(id: $id, input: $input) {
            id
            name
            titan
            skills
            history
            picture
        }
    }
`
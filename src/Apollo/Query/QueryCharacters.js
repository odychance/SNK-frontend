import { gql } from "@apollo/client";

export const GET_CHARACTERS = gql`
query getCharacters {
    getCharacters {
      id
      name
      titan
      skills
      history
      picture
      uploadedBy
    }
  }
`
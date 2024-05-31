import { gql } from "@apollo/client";

export const GET_TITANS = gql`
    query getTitans {
        getTitans {
            id
            name
            host 
            history
            skill
            picture
            created
            uploadedBy
        }
    }
`
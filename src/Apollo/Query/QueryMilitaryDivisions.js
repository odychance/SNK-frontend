import { gql } from "@apollo/client";

export const GET_MILITARY_DIVISIONS = gql`
    query getMilitaryDivisions {
        getMilitaryDivisions {
            id
            division
            purpose
            picture
            uploadedBy
            created
        }
    }
`
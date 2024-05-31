import { gql } from "@apollo/client";

export const GET_BACK_OFS = gql`
    query getBackOfs {
        getBackOfs {
            id
            title
            description
            imgRef
            uploadedBy
            created
        }
    }
`
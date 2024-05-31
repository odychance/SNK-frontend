import { gql } from "@apollo/client";

export const GET_ADMIN = gql`
query getAdmin{
    getAdmin{
        id
        name
        lastname
        email
        created
        admin
    }
}
`
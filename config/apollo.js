// import { ApolloClient, HttpLink, InMemoryCache } from "@apollo/client";
// import fetch from "node-fetch";

// const client = new ApolloClient({
//     cache: new InMemoryCache(),
//     link: new HttpLink({
//         uri: 'http://localhost:4000/',
//         fetch
//     })
// });

// export default client;


import { ApolloClient, createHttpLink, InMemoryCache } from "@apollo/client";
import fetch from 'isomorphic-unfetch'
import { setContext } from "apollo-link-context";

const httpLink = createHttpLink({
    // uri: "http://localhost:4000/",
    uri: "https://snk-backend-2.onrender.com",
    fetch
})

const authLink = setContext((_, { headers }) => {
    const token = localStorage.getItem('token')
    return {
        headers: {
            ...headers,
            authorization: token ? `${token}` : ''
        }
    }
})

export function createApolloClient() {
    return new ApolloClient({
        ssrMode: typeof window === "undefined",
        link: authLink.concat( httpLink ),
        cache: new InMemoryCache(),
    })
}


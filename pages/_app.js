import '../src/scss/global.scss'
import { ApolloProvider } from '@apollo/client'
import { createApolloClient } from 'config/apollo'
import client from '../config/apollo'
import { Loader } from '@/components/Shared'

function MyApp({ Component, pageProps }) {
  const client = createApolloClient();

  return (
    <ApolloProvider client={client}>
      <Component {...pageProps} />
      <Loader />
    </ApolloProvider>
  )
}

export default MyApp

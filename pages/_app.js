import '../src/scss/global.scss'
import { ApolloProvider } from '@apollo/client'
import { createApolloClient } from 'config/apollo'
import client from '../config/apollo'
import { Loader } from '@/components/Shared'
import SmothScroll from '@/hooks/SmothScroll'

function MyApp({ Component, pageProps }) {
  const client = createApolloClient();

  return (
    <SmothScroll>
      <ApolloProvider client={client}>
        <Component {...pageProps} />
        {/* <Loader /> */}
      </ApolloProvider>
    </SmothScroll>
  )
}

export default MyApp

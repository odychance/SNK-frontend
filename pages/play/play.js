import React from 'react'
import Layout from '@/components/Layout/Layout'
import NotFound from '@/components/NotFound'

const play = () => {
  return (
    <Layout>
      <NotFound textPage="404 <br/> Page not Found."/>
    </Layout>
  )
}

export default play
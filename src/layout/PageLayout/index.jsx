import React from 'react'
import { Outlet } from 'react-router-dom';

import Header from '../../components/Header'
import Footer from '../../components/Footer'

import { Layout } from './PageLayoutStyles.js'

const PageLayout = () => {
  return (
    <Layout>
      <Header />
      <main>
        <Outlet />
      </main> 
      <Footer />
    </Layout>
  )
}

export default PageLayout
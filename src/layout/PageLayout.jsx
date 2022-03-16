import React from 'react'
import { Outlet } from 'react-router-dom';

import Header from '../components/Header'

import { Layout } from './PageLayoutStyles.js'

const PageLayout = () => {
  return (
    <Layout>
      <Header /> 
    
      <Outlet />
    </Layout>
  )
}

export default PageLayout
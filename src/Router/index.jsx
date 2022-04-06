import React from 'react'
import { Routes, Route, useLocation } from 'react-router-dom';

// Views
import Home from '../views/Home';
import Clinics from '../views/Clinics';
import Patients from '../views/Patients';
import FAQs from '../views/FAQs';

import { AnimatePresence } from 'framer-motion';

const Router = () => {
  
  const location = useLocation();

  return (
    <AnimatePresence>
      <Routes location={location} key={location.pathname} >
        <Route exact path='/' element={<Home />} />
        <Route exact path='/clinics' element={ <Clinics /> } />
        <Route exact path='/patients' element={ <Patients /> } />
        <Route exact path='/faqs' element={ <FAQs /> } />
      </Routes>
    </AnimatePresence>
  )
}

export default Router
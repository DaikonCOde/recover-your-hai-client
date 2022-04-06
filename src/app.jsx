import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
// Global style
import Theme from './theme';
// layout pages
import PageLayout from './layout/PageLayout';
import Header from './components/Header';
import Footer from './components/Footer';

import Router from './Router';

const App = () => {

  return (
    <BrowserRouter>
      <Theme>
        <Header />
        <Router />
        <Footer />
      </Theme>
    </BrowserRouter>
  )
}

export default App
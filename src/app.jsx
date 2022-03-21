import { BrowserRouter, Routes, Route } from 'react-router-dom';
// Global style
import Theme from './theme';
// layout pages
import PageLayout from './layout/PageLayout';
// Views
import Home from './views/Home';
import Clinics from './views/Clinics'
import Patients from './views/Patients'

const App = () => {
  return (
    <BrowserRouter>
      <Theme>
        <Routes>
          <Route path='/' element={ <PageLayout /> } >
            <Route  index element={<Home />} />
            <Route path='/clinics' element={ <Clinics /> } />
            <Route path='/patients' element={ <Patients /> } />
          </Route>
        </Routes>
      </Theme>
    </BrowserRouter>
  )
}

export default App
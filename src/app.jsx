import { BrowserRouter, Routes, Route } from 'react-router-dom';

import PageLayout from './layout/PageLayout';

import Home from './views/Home';
import Theme from './theme';

const App = () => {
  return (
    <BrowserRouter>
      <Theme>
        <Routes>
          <Route path='/' element={ <PageLayout /> } >
            <Route  index element={<Home />} />
          </Route>
        </Routes>
      </Theme>
    </BrowserRouter>
  )
}

export default App
import React from 'react';
import Header from './components/Header'
import Breadcrumbs from './components/Breadcrumbs'
import Footer from './components/Footer'
import ComplaintsPage from './components/Сomplaints/ComplaintsPage'
import RaitingRegionsPage from './components/RaitingRegions/RaitingRegionsPage'

import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';

import './styles/app.scss';

function App() {
  return (
    <Router>
    <div className="w-full h-auto app">
      <Header />
      <Breadcrumbs />
        <Switch>
          <Route path='/first'>
            <RaitingRegionsPage />
          </Route>
          <Route path='/second'>
            <ComplaintsPage />
          </Route>
          <Route path='/'>
            <RaitingRegionsPage />
            </Route>
        </Switch>

      <Footer />
      <ul className="nav">
            <li>
              <Link to="/first" >Первая</Link>
            </li>
            <li>
              <Link to="/second">Вторая</Link>
            </li>
          </ul>
    </div>
    </Router>

  );
}

export default App;

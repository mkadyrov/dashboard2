import React from 'react';
import Header from './components/Header'
import Breadcrumbs from './components/Breadcrumbs'
import Footer from './components/Footer'
import ComplaintsPage from './components/Сomplaints/ComplaintsPage'
import RaitingRegionsPage from './components/RaitingRegions/RaitingRegionsPage'

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';

import './styles/app.scss';

function App() {
  return (
    <div className="w-full h-auto app">
      <Header />
      <Breadcrumbs />
      <Router>
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
      </Router>
      <Footer />
    </div>
  );
}

export default App;

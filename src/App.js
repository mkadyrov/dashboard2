import React from 'react';
import Header from './components/Header'
import Breadcrumbs from './components/Breadcrumbs'
import Footer from './components/Footer'
import Page from './components/Сomplaints/Page'

import './styles/app.scss';

function App() {
  return (
    <div className="w-full h-auto app">
      <Header />
      <Breadcrumbs />
      <Page />
      <Footer />
    </div>
  );
}

export default App;

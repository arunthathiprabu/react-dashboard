import React from 'react';

import Dashboard from './Dashboard';
import SideNavBar from './SideNavBar';
import Navbar from './Navbar';


const App = () => {
  return (
    <div className="app">
      <Navbar />
      <SideNavBar />
      <Dashboard />
    </div>
  );
};

export default App;

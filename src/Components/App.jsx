import React from 'react';
import Header from './header/Header';
import Main from './main/Main';
import { Outlet } from 'react-router-dom';

const App = () => {
  return (
    <div className='App'>
      <Header/>
      <Outlet/>
    </div>
  );
};

export default App;
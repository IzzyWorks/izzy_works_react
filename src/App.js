import React from 'react';
import { useState } from 'react';
import './scss/main.css';
import HomePageComp from './components/home/HomePageComp';
import NavBar from './components/navigation/NavBar';
import navData from './components/data/navData';

function App() {
  const [hamburger, setHamburger] = useState(false);
  const [showHide, setShowHide] = useState(true);
  const handleClickEvent = () => {
    console.log('Button click');
    setShowHide(!showHide);
    setHamburger(!hamburger);
  };

  return (
    <div className='App'>
      <NavBar
        navBar={navData}
        buttonData={{
          handleClickEvent,
          label: showHide == true ? 'Hide' : 'Show',
          hamburger,
        }}
      />
      <HomePageComp />
    </div>
  );
}

export default App;

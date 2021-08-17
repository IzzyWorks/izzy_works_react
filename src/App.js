import React from 'react';
import { useState } from 'react';
import './scss/main.css';
import HomePageComp from './components/home/HomePageComp';
import NavBar from './components/nav/NavBar';

function App() {
  const navbar = [
    {
      id: '1122',
      title: 'Home',
      text: 'white',
      lottie: [0, 11],
      desktop: false,
    },
    {
      id: '1123',
      title: 'tldnr',
      text: 'white',
      lottie: [12, 21],
      desktop: false,
    },
    {
      id: '1124',
      title: 'Obic',
      text: 'white',
      lottie: [22, 33],
      desktop: false,
    },
    {
      id: '1125',
      title: 'HapMap',
      text: 'white',
      lottie: [33, 33],
      desktop: false,
    },
    {
      id: '1126',
      title: 'Case Studies',
      text: 'black',
      lottie: [33, 33],
      desktop: true,
    },
    {
      id: '1127',
      title: 'About',
      text: 'black',
      lottie: [33, 33],
      desktop: true,
    },
  ];

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
        navBar={navbar}
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

import React from 'react';
import { useState } from 'react';
import './scss/main.css';

//components
import HomePageComp from './components/home/HomePageComp';
import NavBar from './components/navigation/NavBar';

// data
import navData from './components/data/navData';

function App() {
  const [hamburger, setHamburger] = useState(false);
  const [showHide, setShowHide] = useState(true);
  // const [pageCount, setPage] = useState([0]);
  const handleClickEvent = () => {
    console.log('Button click');
    setShowHide(!showHide);
    setHamburger(!hamburger);
  };
  // const updatePageCount = () => {
  //   pageUp(pageCount + 1);
  //   pageDown(pageCount - 1);
  //   pageHome(pageCount == 0);
  // };
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

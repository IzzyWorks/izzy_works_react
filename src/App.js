import React from 'react';
import './App.css';
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

  const [hamburger, setHamburger] = setState([false]);
  const toggleHamburger = () => {
    setHamburger(!hamburger);
  };

  const [showHide, setShowHide] = useState(true);
  const handleClickInTheNav = () => {
    console.log('Button click');
    setShowHide(!showHide);
  };

  return (
    <div className='App'>
      <NavBar
        navBar={navbar}
        navState={toggleHamburger}
        buttonData={{
          handleClickInTheNav,
          label: showHide == true ? 'Hide' : 'Show',
        }}
      />
      <HomePageComp />
    </div>
  );
}

export default App;

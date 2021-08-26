import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { useState } from 'react';
import './scss/main.css';

//components
import HomePage from './components/HomePage';
import NavBar from './components/NavBar';

// data
import navBarData from './components/data/navData';

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
        navBarData={navBarData}
        hamburgerSwitch={{
          handleClickEvent,
          label: showHide == true ? 'Hide' : 'Show',
          hamburger,
        }}
      />
      <Switch>
        <Route path='/home' component={HomePage} exact />
        <Route path='/*'>
          <Redirect to='/home' component={HomePage} />
        </Route>
      </Switch>
    </div>
  );
}

export default App;

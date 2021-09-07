import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { useState } from 'react';
import './scss/main.scss';

//components
import HomePage from './components/home/HomePage';
import NavBar from './components/nav/NavBar';

//FullPage Demo TEST
import FullPageDemo from './components/FullPageDemo/FullPageDemo';

// data
import navBarData from './components/data/NavData';

function App() {
  // const [hamburger, setHamburger] = useState(false);
  // const [showHide, setShowHide] = useState(true);
  // const handleClickEvent = () => {
  //   console.log('Button click');
  //   setShowHide(!showHide);
  //   setHamburger(!hamburger);
  // };
  return (
    <div className='App'>
      <NavBar
        navBarData={navBarData}
        // hamburgerSwitch={{
        //   handleClickEvent,
        //   label: showHide == true ? 'Hide' : 'Show',
        //   hamburger,
        // }}
      />
      <div style={{clear:"both",display:"block"}}></div>
      <Switch>
        <Route path='/home' component={HomePage} exact />
        <Route path='/fullPageDemo' component={FullPageDemo} exact />
        <Route path='/*'>
          <Redirect to='/home' component={HomePage} />
        </Route>
      </Switch>
    </div>
  );
}

export default App;

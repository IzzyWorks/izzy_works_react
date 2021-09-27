import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import './components/scss/main.scss';

//components
import HomePage from './components/homePage/HomePage';
import NavBar from './components/nav/NavBar';

// data
import navBarData from './components/data/NavData';

function App() {
  return (
    <div className='App'>
      <NavBar navBarData={navBarData} />
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

// 🔥🔥🔥 Hamburger Behavior 🔥🔥🔥
// const [hamburger, setHamburger] = useState(false);
// const [showHide, setShowHide] = useState(true);
// const handleClickEvent = () => {
//   console.log('Button click');
//   setShowHide(!showHide);
//   setHamburger(!hamburger);
// };

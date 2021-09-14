import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';
import { CSSTransition } from 'react-transition-group';

//components
import NavBar from './components/nav/NavBar';
import LandingPage from './components/pages/LandingPage';
// import WhitePaper from './components/pages/WhitePaperPage';
import OBICPage from './components/pages/OBICPage';
import TldnrPage from './components/pages/TldnrPage';
import HapMapPage from './components/pages/HapMapPage';
import AboutPage from './components/pages/AboutPage';

//css
import './components/scss/main.scss';

//data
import ContentData from './components/data/ContentData';
import NavBarData from './components/data/NavBarData';

const routes = [
  { path: '/', name: 'Home', Component: LandingPage },
  {
    path: '/obic',
    name: 'OBIC',
    // Component: WhitePaper,
    Component: OBICPage,
    //PageContent: ContentData,
  },
  {
    path: '/tldnr',
    name: 'tldnr',
    // Component: WhitePaper,
    Component: TldnrPage,
    //PageContent: ContentData,
  },
  {
    path: '/hapmap',
    name: 'HapMap',
    // Component: WhitePaper,
    Component: HapMapPage,
    //PageContent: ContentData,
  },
  {
    path: '/about',
    name: 'About',
    Component: AboutPage,
  },
];

function Example() {
  return (
    <Router>
      <NavBar NavBarData={NavBarData} />
      <div className='index-container'>
        {routes.map(({ path, Component }) => (
          <Route key={path} exact path={path}>
            {({ match }) => (
              <CSSTransition
                in={match != null}
                timeout={300}
                classNames='page'
                unmountOnExit
              >
                <div className='page'>
                  <Component />
                </div>
              </CSSTransition>
            )}
          </Route>
        ))}
      </div>
    </Router>
  );
}

const rootElement = document.getElementById('root');
ReactDOM.render(<Example />, rootElement);

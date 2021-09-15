import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';
import { CSSTransition } from 'react-transition-group';

//components
import NavBar from './components/nav/NavBar';
import LandingPage from './components/pages/LandingPage';
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
    Component: OBICPage,
    PageContent: ContentData[0],
  },
  {
    path: '/tldnr',
    name: 'tldnr',
    Component: TldnrPage,
    PageContent: ContentData[1],
  },
  {
    path: '/hapmap',
    name: 'HapMap',
    Component: HapMapPage,
    PageContent: ContentData[2],
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
      <section className='section__wrapper'>
        {routes.map(({ path, Component, PageContent }) => (
          <Route key={path} exact path={path}>
            {({ match }) => (
              <CSSTransition
                in={match}
                timeout={1000}
                classNames='scroll-down'
                unmountOnExit
              >
                <div>
                  <Component whitePaper={PageContent} />
                </div>
              </CSSTransition>
            )}
          </Route>
        ))}
      </section>
    </Router>
  );
}

const rootElement = document.getElementById('root');
ReactDOM.render(<Example />, rootElement);

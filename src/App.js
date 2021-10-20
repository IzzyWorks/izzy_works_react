import React from 'react';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import { CSSTransition } from 'react-transition-group';

//components
import NavBar from './components/nav/NavBar';
import LandingPage from './components/pages/LandingPage';
import OBICPage from './components/pages/OBICPage';
import TldnrPage from './components/pages/TldnrPage';
import HapMapPage from './components/pages/HapMapPage';
import AboutPage from './components/pages/AboutPage';

//data
import ContentData from './components/data/ContentData';
import NavObj from './components/data/NavObj';

const routes = [
  {
    path: '/',
    name: 'Home',
    Component: LandingPage,
    PageContent: ContentData[0],
  },
  {
    path: '/obic',
    name: 'OBIC',
    Component: OBICPage,
    PageContent: ContentData[1],
  },
  {
    path: '/tldnr',
    name: 'tldnr',
    Component: TldnrPage,
    PageContent: ContentData[2],
  },
  {
    path: '/hapmap',
    name: 'HapMap',
    Component: HapMapPage,
    PageContent: ContentData[3],
  },
  {
    path: '/about',
    name: 'About',
    Component: AboutPage,
    PageContent: ContentData[4],
  },
];

function App() {
  // const playDirectionObj = JSON.parse(
  //   window.localStorage.getItem('lottieData')
  // );
  // const playDirection = Object.values(playDirectionObj);
  // const updateCSSTransition = (e) => {};

  const scrollDirection = () => {
    'scroll-down';
    // `scroll-${playDirection[1] == 1 ? 'down' : 'up'}`
  };

  return (
    <Router>
      <NavBar NavObj={NavObj} />
      <section className='section__wrapper'>
        {routes.map(({ path, Component, PageContent }) => (
          <Route key={path} exact path={path}>
            {({ match }) => (
              <CSSTransition
                in={match != null}
                timeout={2000}
                classNames={scrollDirection}
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

export default App;

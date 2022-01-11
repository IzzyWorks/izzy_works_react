import React, { Component, useContext } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { CSSTransition } from 'react-transition-group';
import { UiContext, useUiContext } from './components/context/UiContext';

//components
import NavBar from './components/interface/NavBar';
import LandingPage from './components/pages/LandingPage';
import OBICPage from './components/pages/OBICPage';
import TldnrPage from './components/pages/TldnrPage';
import HapMapPage from './components/pages/HapMapPage';
import AboutPage from './components/pages/AboutPage';

//data
import contentDATA from './components/data/ContentData';
// import NavObj from './components/data/NavObj';
import uiDATA from './components/data/uiData';

const routes = [
  {
    path: '/',
    name: 'Home',
    Component: LandingPage,
    PageContent: contentDATA[0],
  },
  {
    path: '/obic',
    name: 'OBIC',
    Component: OBICPage,
    PageContent: contentDATA[1],
  },
  {
    path: '/tldnr',
    name: 'tldnr',
    Component: TldnrPage,
    PageContent: contentDATA[2],
  },
  {
    path: '/hapmap',
    name: 'HapMap',
    Component: HapMapPage,
    PageContent: contentDATA[3],
  },
  {
    path: '/about',
    name: 'About',
    Component: AboutPage,
    PageContent: contentDATA[4],
  },
];

const App = () => {
  const [uiContext, setUiContext] = React.useState(uiDATA);

  return (
    <UiContext.Provider value={uiContext}>
      <Router>
        <NavBar />
        <section className='section__wrapper'>
          {routes.map(({ path, Component, PageContent }) => (
            <Route key={path} exact path={path}>
              {({ match }) => (
                <CSSTransition
                  in={match != null}
                  timeout={2000}
                  classNames='scroll-down'
                  // classNames={`scroll-${pageState[0].playDirection}`}
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
    </UiContext.Provider>
  );
};

export default App;

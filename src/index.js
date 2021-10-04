import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import { CSSTransition } from 'react-transition-group';

//components
import NavBar from './components/nav/NavBar';
import LandingPage from './components/pages/LandingPage';
import OBICPage from './components/pages/OBICPage';
import TldnrPage from './components/pages/TldnrPage';
import HapMapPage from './components/pages/HapMapPage';
import AboutPage from './components/pages/AboutPage';
import './components/scss/main.scss';
import useLocalStorage from './components/hooks/useLocalStorage'; // key value pair

//data
import ContentData from './components/data/ContentData';
import NavObj from './components/data/NavObj';
// import { PageDirectionContext } from './components/context/PageDirectionContext';

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

function IzzyWorks() {
  const playDirectionObj = JSON.parse(
    window.localStorage.getItem('lottieData')
  );
  const playDirection = Object.values(playDirectionObj);
  return (
    <Router>
      <NavBar NavObj={NavObj} />
      <section className='section__wrapper'>
        {routes.map(({ path, Component, PageContent }) => (
          // <PageDirectionContext.Provider value={{ playDirection }}>
          <Route key={path} exact path={path}>
            {({ match }) => (
              <CSSTransition
                in={match != null}
                timeout={2000}
                // classNames='scroll-down'
                classNames={`scroll-${playDirection[1] == 1 ? 'down' : 'up'}`}
                unmountOnExit
              >
                <div>
                  <Component whitePaper={PageContent} />
                </div>
              </CSSTransition>
            )}
          </Route>
          // </PageDirectionContext.Provider>
        ))}
      </section>
    </Router>
  );
}

const rootElement = document.getElementById('root');
ReactDOM.render(<IzzyWorks />, rootElement);

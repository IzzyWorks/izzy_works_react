import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Route,
  Link,
  NavLink,
} from 'react-router-dom';
import { CSSTransition } from 'react-transition-group';
import { Container, Navbar, Nav } from 'react-bootstrap';

//components
// import NavBar from '../src/components/nav/NavBar';
import LandingPage from './components/pages/LandingPage';
import WhitePaper from './components/pages/WhitePaperPage';
import AboutPage from './components/pages/AboutPage';
import './components/scss/main.scss';

//data
import ContentData from './components/data/ContentData';

const routes = [
  { path: '/', name: 'Home', Component: LandingPage },
  {
    path: '/obic',
    name: 'OBIC',
    Component: WhitePaper,
    PageContent: ContentData,
  },
  {
    path: '/tldnr',
    name: 'tldnr',
    Component: WhitePaper,
    PageContent: ContentData,
  },
  {
    path: '/hapmap',
    name: 'HapMap',
    Component: WhitePaper,
    PageContent: ContentData,
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
      <>
        <Navbar bg='light'>
          <Nav className='mx-auto'>
            {routes.map((route) => (
              <Nav.Link
                key={route.path}
                as={NavLink}
                to={route.path}
                activeClassName='active'
                exact
              >
                {route.name}
              </Nav.Link>
            ))}
          </Nav>
        </Navbar>
        <div className='index-container'>
          {routes.map(({ path, Component, PageContent }) => (
            <Route key={path} exact path={path}>
              {({ match }) => (
                <CSSTransition
                  in={match != null}
                  timeout={300}
                  classNames='page'
                  // onEnter={(whitePaper) => (props, whitePaper)}
                  // }}
                  unmountOnExit
                >
                  <div className='page'>
                    <Component whitePaper={PageContent} />
                  </div>
                </CSSTransition>
              )}
            </Route>
          ))}
        </div>
      </>
    </Router>
  );
}

const rootElement = document.getElementById('root');
ReactDOM.render(<Example />, rootElement);

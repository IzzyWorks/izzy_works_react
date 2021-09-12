import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Route,
  Link,
  NavLink,
} from 'react-router-dom';
import { CSSTransition } from 'react-transition-group';

//components
import NavBar from '../src/components/nav/NavBar';
import LandingPage from '../src/components/whitepaperComps/WhitePaper';
import AboutPage from '../src/components/homePage/About';
import './components/scss/main.scss';

//data
import ContentData from './components/data/ContentData';

const routes = [
  { path: '/', name: 'Home', Component: LandingPage },
  {
    path: ContentData.path,
    name: ContentData.id,
    Component: ContentData,
  },
  // { path: '/tldnr', name: 'tldnr', Component: Home },
  // { path: '/hapmap', name: 'HapMap', Component: About },
  { path: '/about', name: 'About', Component: AboutPage },
];

function Example() {
  return (
    <Router>
      <>
        <NavBar bg='light'>
          <NavBar className='mx-auto'>
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
          </NavBar>
        </NavBar>
        <Container className='index-container'>
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
        </Container>
      </>
    </Router>
  );
}

const rootElement = document.getElementById('root');
ReactDOM.render(<Example />, rootElement);

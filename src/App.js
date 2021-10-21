import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { CSSTransition } from 'react-transition-group';
import { useSelector } from 'react-redux';

//components
import NavBar from './components/interface/NavBar';
import LandingPage from './components/pages/LandingPage';
import OBICPage from './components/pages/OBICPage';
import TldnrPage from './components/pages/TldnrPage';
import HapMapPage from './components/pages/HapMapPage';
import AboutPage from './components/pages/AboutPage';

//data
import ContentData from './components/data/ContentData';
// import NavObj from './components/data/NavObj';

// const routes = [
//   {
//     Component: LandingPage,
//   },
//   {
//     Component: OBICPage,
//   },
//   {
//     Component: TldnrPage,
//   },
//   {
//     Component: HapMapPage,
//   },
//   {
//     Component: AboutPage,
//   },
// ];

export const App = () => {
  const uiComponents = (useSelector((state) => state.ui), routes, ContentData);
  console.log(uiComponents);

  // const whitePages = uiComponents.map((uiComponent) => {
  //   return (
  //     <Route key={uiComponent.id} exact path={uiComponent.url}>
  //       {({ match }) => (
  //         <CSSTransition
  //           in={match != null}
  //           timeout={2000}
  //           classNames={uiComponent.textColor}
  //           unmountOnExit
  //         >
  //           <div>
  //             <Component whitePage={ContentData} />
  //           </div>
  //         </CSSTransition>
  //       )}
  //     </Route>
  //   );
  // });

  // return (
  //   <Router>
  //     <NavBar NavObj={NavObj} />
  //     <section className='section__wrapper'>{whitePages}</section>
  //   </Router>
  // );
};

//  const scrollDirection = () => {
//    'scroll-down';
//    // `scroll-${playDirection[1] == 1 ? 'down' : 'up'}`
//  };

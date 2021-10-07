import React from 'react';

//hooks
// import useLocalStorage from '../hooks/useLocalStorage';

//props from whitepaper from index.js;

function AboutPage() {
  // console.log('%cRendering About Page', 'color: darkred; font-size: 16px');
  return (
    <div className='about__wrapper'>
      <h1>about</h1>
    </div>
  );
}

// const renderAboutPage = (props) => {
//   const [priviousPage, setPriviousPage] = useLocalStorage('previousPage', 0);
//   setPriviousPage(props.whitePaper.page);
// };

export default AboutPage;

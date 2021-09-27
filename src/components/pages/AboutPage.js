import React from 'react';

//hooks
import useLocalStorage from '../hooks/useLocalStorage';

function AboutPage() {
  renderAboutPage;
  return (
    <div className='about__wrapper'>
      <h1>about</h1>
    </div>
  );
}

const renderAboutPage = () => {
  const [priviousPage, setPriviousPage] = useLocalStorage('previousPage', 0);
  setPriviousPage(props.whitePaper.page);
};

export default AboutPage;

import React from 'react';

//hooks
import useLocalStorage from '../hooks/useLocalStorage';

//components
import Title from './whitePaper/Title';
import Synopsis from './whitePaper/Synopsis';
import Details from './whitePaper/details/DetailsCard';

function HapMapPage(props) {
  console.log('Rendering HapMap Page...');
  renderHapMapPage;
  const whitePaper = props.whitePaper;
  return (
    <div>
      <article
        key={whitePaper.id}
        className={`article__wrapper ${whitePaper.style}`}
      >
        <Title articleTitle={whitePaper.id} />
        <Synopsis articleSynopsis={whitePaper.synopsis} />
        <Details articleDetails={whitePaper.details} />
      </article>
      ;
    </div>
  );
}

const renderHapMapPage = () => {
  const [priviousPage, setPriviousPage] = useLocalStorage('previousPage', 0);
  setPriviousPage(props.whitePaper.page);
};

export default HapMapPage;

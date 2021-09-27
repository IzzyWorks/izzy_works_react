import React from 'react';

//components
import Title from './whitePaper/Title';
import Synopsis from './whitePaper/Synopsis';
import Details from './whitePaper/details/DetailsCard';

//hooks
import useLocalStorage from '../hooks/useLocalStorage';

function TldrnPage(props) {
  console.log('Rendering tldnr Page...');
  renderTldnrPage;
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

const renderTldnrPage = () => {
  const [priviousPage, setPriviousPage] = useLocalStorage('previousPage', 0);
  setPriviousPage(props.whitePaper.page);
};

export default TldrnPage;

import React from 'react';

//components
import Title from './whitePaper/Title';
import Synopsis from './whitePaper/Synopsis';
import Details from './whitePaper/details/DetailsCard';

function HapMapPage(props) {
  console.log('Rendering HapMap Page...');
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

export default HapMapPage;

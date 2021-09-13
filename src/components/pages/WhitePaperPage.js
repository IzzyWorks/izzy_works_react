import React from 'react';

//components
import Title from '../whitepaperComps/Title';
import Synopsis from '../whitepaperComps/Synopsis';
import Details from '../whitepaperComps/detailsComps/DetailsCard';

function WhitePaperPage(props) {
  console.log('whitepaper', props);
  return (
    <div>
      {props.whitePaper.map((whitePaper) => (
        <article
          key={whitePaper.id}
          className={`article__wrapper ${whitePaper.style}`}
        >
          <Title articleTitle={whitePaper.id} />
          <Synopsis articleSynopsis={whitePaper.synopsis} />
          <Details articleDetails={whitePaper.details} />
        </article>
      ))}
      ;
    </div>
  );
}

export default WhitePaperPage;

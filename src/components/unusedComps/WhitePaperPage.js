import React from 'react';

//components
import Title from '../pages/whitePaper/Title';
import Synopsis from '../pages/whitePaper/Synopsis';
import Details from '../pages/whitePaper/details/DetailsCard';

/* props
whitePaper={ContentData} from index.js */

function WhitePaperPage(props) {
  console.log('white', props);
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

import React from 'react';
import uuid from 'react-uuid';

//componenets
import Authors from './DetailsAuthors';
import Sources from './DetailsSources';
import Tools from './DetailsTools';

function Details(props) {
  // console.log('details ===>', props.articleDetails);
  // console.log('authors ===>', props.articleDetails.authors);
  const authorsArr = props.articleDetails.authors;
  const sourcesArr = props.articleDetails.sources;
  const toolsArr = props.articleDetails.tools;
  return (
    <React.Fragment>
      {<Authors authors={authorsArr} />}
      <div className='details-date'>{props.articleDetails.date}</div>
      <div className='details-length'>{props.articleDetails.length}</div>
      {<Sources sources={sourcesArr} />}
      {<Tools tools={toolsArr} />}
    </React.Fragment>
  );
}

export default Details;

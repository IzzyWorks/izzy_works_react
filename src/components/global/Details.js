import React from 'react';

function Details(props) {
  // console.log(props.articleDetails.authors[0]);
  return (
    <div className='details-card'>
      <React.Fragment>
        {props.articleDetails.authors.map((authors) => (
          <div className='authors-wrapping'>
            <div className='author-name'>{authors.name}</div>
            <div className='author-roll'>{authors.roll}</div>
            <div className='author-contact'>{authors.contact}</div>
          </div>
        ))}
        <div className='details-date'>{props.articleDetails.date}</div>
        <div className='details-length'>{props.articleDetails.length}</div>
      </React.Fragment>
      <React.Fragment>
        {props.articleDetails.sources.map((sources) => (
          <div className='sources-wrapping'>
            <div className='sources-title'>{sources.title}</div>
            <div className='sources-link'>{sources.src}</div>
          </div>
        ))}
      </React.Fragment>
    </div>
  );
}

export default Details;

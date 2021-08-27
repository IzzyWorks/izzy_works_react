import React from 'react';
import uuid from 'react-uuid';

//componenets
import Authors from './Authors';
import Sources from './Sources';
import Tools from './Tools';

function Details(props) {
  console.log('details ===>', props.articleDetails);
  console.log('authors ===>', props.articleDetails.authors);
  const AuthorsArr = props.articleDetails.authors;
  return (
    <React.Fragment>
      {AuthorsArr.map((authors) => (
        <Authors key={uuid()} author={authors} />
      ))}
      {/* <div className='details-date'>{props.articleDetails.date}</div>
      <div className='details-length'>{props.articleDetails.length}</div>
      {props.articleDetails.sources.map((sources) => (
        <Sources key={uuid()} source={sources} />
      ))}
      {props.articleDetails.tools.map((tools) => (
        <Tools key={uuid()} tool={tools} />
      ))} */}
    </React.Fragment>
  );
}

export default Details;

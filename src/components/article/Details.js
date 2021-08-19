import React from 'react';

function Details(props) {
  return (
    <React.Fragment>
      {console.log('looking inside Details comp -->', props.articleDate)}
      {/* {props.articleDate.map((articleDate) => (
        <div className='card'>
          <p key={112233} className='details'>
            {articleDate}
          </p>
        </div>
      ))} */}
      <h1>test</h1>
    </React.Fragment>
  );
}

export default Details;

import React from 'react';

function Details(props) {
  const {
    publication : { date, length, tools[] },
  } = props.articleDetails;
  return (
    <React.Fragment>
      {console.log(
        'looking inside Details comp -->',
        articleDetails.publication.date
      )}
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

import React from 'react';

function Summary(props) {
  return (
    <React.Fragment>
      {props.articleSummary.map((articleSummary) => (
        <p key={articleSummary.id} className='summary'>
          {articleSummary.synopsis}
        </p>
      ))}
    </React.Fragment>
  );
}

export default Summary;

import React from 'react';

function Summary(props) {
  return (
    <React.Fragment>
      <div className='summary-wrapping'>
        <h2 className='summary-header'>{props.articleSummary.header}</h2>
        <h3 className='summary-text'>{props.articleSummary.text}</h3>
        <p className='summary-img'>{props.articleSummary.img}</p>
      </div>
    </React.Fragment>
  );
}

export default Summary;

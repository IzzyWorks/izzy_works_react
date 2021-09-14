import React from 'react';

function Synopsis(props) {
  return (
    <React.Fragment>
      <div className='synopsis-wrapping'>
        <h2 className='synopsis-header'>{props.articleSynopsis.header}</h2>
        <h3 className='synopsis-text'>{props.articleSynopsis.text}</h3>
        <p className='synopsis-img'>{props.articleSynopsis.img}</p>
      </div>
    </React.Fragment>
  );
}

export default Synopsis;

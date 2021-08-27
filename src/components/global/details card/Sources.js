import React from 'react';
import uuid from 'react-uuid';

function Sources(props) {
  return (
    <div key={uuid()} className='sources-section'>
      {props.sources.map((source) => (
        <div className='sources-wrapping'>
          <div className='sources-title'>{source.title}</div>
          <div className='sources-link'>{source.src}</div>
        </div>
      ))}
    </div>
  );
}

export default Sources;

import React from 'react';
import uuid from 'react-uuid';

function Authors(props) {
  return (
    <div key={uuid()} className='authors-section'>
      {props.authors.map((author) => (
        <div className='authors-wrapping'>
          <div className='author-name'>{author.name}</div>
          <div className='author-roll'>{author.roll}</div>
          <div className='author-contact'>{author.contact}</div>
        </div>
      ))}
    </div>
  );
}

export default Authors;

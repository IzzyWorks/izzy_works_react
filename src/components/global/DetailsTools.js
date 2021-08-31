import React from 'react';
import uuid from 'react-uuid';

function Tools(props) {
  return (
    <div className='tools-section'>
      {props.tools.map((tool) => (
        <div key={uuid()} className='tool-wrapping'>
          <div className='tool-name'>{tool.name}</div>
          <div className='tool-img'>{tool.img}</div>
        </div>
      ))}
    </div>
  );
}

export default Tools;

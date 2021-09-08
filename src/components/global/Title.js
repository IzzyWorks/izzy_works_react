import React, { useEffect, useState } from 'react';

function Title(props) {

  let classes = props.classes;

  const [cssTransition, setCssTransition ]= useState();

  /* This CSS style is applied when the drawer is opened */
const openedStyle = {
  left: '1200px' /* max-with is 100% when the drawer is opened */,
  /* Upon transitioning to Open,
     animate `max-width' for 0.5s*/
  transition: 'max-width 0.5s'
};

/* This CSS style is applied when the drawer is closed */
const closedStyle = {
  left: '0px'  /* max-width is 0 in the closed drawer */,
  /* Upon transitioning to Closed,
     animate `max-width' for 0.5s */
  transition: 'left 2s ease-in'
};

useEffect(()=>{
  setTimeout(()=>{
    setCssTransition(closedStyle);
  },0);
},[]);

  return (
    <React.Fragment>
      {console.log("Re-rendering.....")}
        <h2 className="baseAnimation" style={true? cssTransition: openedStyle}>{props.articleTitle}</h2>
    </React.Fragment>
  );
}

export default Title;

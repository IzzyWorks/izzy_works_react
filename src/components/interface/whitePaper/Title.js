import React, { useEffect, useState } from 'react';
import animationStyles from '../TextAnimation';

function Title(props) {
  let classes = props.classes;

  const [cssTransition, setCssTransition] = useState();

  //let myChange = props.MyArray.Somevalue == 'red' ? true : false;

  useEffect(() => {
    // console.log('Mounting====>');
    setTimeout(() => {
      setCssTransition(animationStyles['1'].title.onMount);
    }, 0);
  }, [props.myArray]);

  // useEffect(()=>{ //Somevalue

  // },[myChange]);

  return (
    <React.Fragment>
      {/* {console.log("Re-rendering.....")} */}
      <h2 className='baseAnimation' style={true ? cssTransition : openedStyle}>
        {props.articleTitle}
      </h2>
    </React.Fragment>
  );
}

export default Title;
